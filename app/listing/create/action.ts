"use server";

import { getSessionUser } from "@/lib/auth";
import { FormDataUtils } from "@/lib/commons/formdata_utils";
import prisma from "@/lib/db";
import { GeonamesProvider, GeonamesResponse } from "@/lib/geocode/geonames";
import { CreateListingForm } from "@/lib/types/listing";
import { ValidatorError } from "@/lib/validation";
import { CreateListingFormValidator } from "@/lib/validation/listing";
import { ListingCreateFormState } from "./type";

// TODO: Rename when done
export async function createListingNew(
  previousState: ListingCreateFormState,
  formData: FormData
) {
  // TODO: Validate form, return object if any error
  const formState: ListingCreateFormState = {
    errors: new Map(),
  };
  return formState;
}

export async function createListing(prevState: any, formData: FormData) {
  const formUtils = new FormDataUtils(formData);
  // NOTE: Default values, if the field is required, must be fail safes
  const listing: CreateListingForm = {
    price: formUtils.getNumber("price", -1),
    description: formUtils.getString("description", ""),
    deposit: formUtils.getNumber("deposit", 0),
    availableDate: formUtils.getDate("availableDate", new Date()), // TODO: Set to a date in the far far future like Y2099
    beds: formUtils.getNumber("beds", -1),
    baths: formUtils.getNumber("baths", -1),
    longitude: formUtils.getNumber("inputLongitude", -999),
    latitude: formUtils.getNumber("inputLatitude", -999),
    area: 100, // TODO: Remove soon
  };

  // Validate
  const validator = new CreateListingFormValidator(listing);
  try {
    validator.validate();
  } catch (e) {
    if (e instanceof ValidatorError) {
      return e.getErrorMessage();
    }
  }

  // TODO: 👇👇👇 Move fetching of data from the map
  const geocodeProvider = new GeonamesProvider(
    listing.latitude,
    listing.longitude
  );
  const url = geocodeProvider.url();

  // Fetch data from the geocode provider
  const address: GeonamesResponse = await fetch(url).then((res) => res.json());
  // TODO: 👆👆👆 Move fetching of data from the map

  const userSession = await getSessionUser();
  const userDB = await prisma.user.findUnique({
    where: {
      email: userSession?.email!,
    },
  });

  // FUTURE: remove city and prov from addressLine (only use nearest.name)
  const addressLine =
    address.nearest.name +
    "," +
    address.nearest.city +
    "," +
    address.nearest.prov;

  // Persist
  const createdListing = await prisma.listing.create({
    data: {
      deposit: listing.deposit,
      description: listing.description,
      beds: listing.beds,
      baths: listing.baths,
      area: 100.0, // TODO: make this be inputted in form
      availableDate: listing.availableDate,
      user: {
        connect: {
          id: userDB?.id,
        },
      },
      address: {
        create: {
          addressLine: addressLine,
          city: address.nearest.city,
          state: address.nearest.prov,
          country: address.nearest.state,
          latitude: address.nearest.latt,
          longitude: address.nearest.longt,
        },
      },
      prices: {
        create: {
          value: listing.price,
        },
      },
    },
  });

  // FUTURE: redirect to create listing preview
}

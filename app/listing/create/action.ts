"use server";

import { getSessionUser } from "@/lib/auth";
import { FormDataUtils } from "@/lib/commons/formdata_utils";
import prisma from "@/lib/db";
import { GeonamesProvider, GeonamesResponse } from "@/lib/geocode/geonames";
import { ListingCreateForm } from "@/lib/types/listing";
import { ValidatorError } from "@/lib/validation";
import { ListingCreateFormValidator } from "@/lib/validation/listing/create";
import { ListingCreateFormState } from "./type";

/**
 * Checks if user is logged in.
 *
 * @returns true if user is logged in, otherwise false.
 */
export async function isUserAuthenticated() {
  const user = await getSessionUser();
  if (user) {
    return true;
  }
  return false;
}

/**
 * Fetch address using the given coordinates.
 *
 * @param latitude Latitude coordinate
 * @param longitude Longitude coordinate
 * @returns Address
 */
export async function fetchAddresss(latitude: number, longitude: number) {
  const provider = new GeonamesProvider(latitude, longitude);
  return await provider.fetch();
}

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

// TODO: Remove soon
export async function createListing(prevState: any, formData: FormData) {
  const formUtils = new FormDataUtils(formData);
  // NOTE: Default values, if the field is required, must be fail safes
  const listing: ListingCreateForm = {
    price: formUtils.getNumber("price", -1),
    description: formUtils.getString("description", ""),
    deposit: formUtils.getNumber("deposit", 0),
    availableDate: formUtils.getDate("availableDate", new Date(2000)),
    beds: formUtils.getNumber("beds", -1),
    baths: formUtils.getNumber("baths", -1),
    longitude: formUtils.getNumber("inputLongitude", -999),
    latitude: formUtils.getNumber("inputLatitude", -999),
    area: 100,
  };

  // Validate
  const validator = new ListingCreateFormValidator(listing);
  try {
    validator.validate();
  } catch (e) {
    if (e instanceof ValidatorError) {
      return e.getErrorMessage();
    }
  }

  const geocodeProvider = new GeonamesProvider(
    listing.latitude,
    listing.longitude
  );
  const url = geocodeProvider.url();

  // Fetch data from the geocode provider
  const address: GeonamesResponse = await fetch(url).then((res) => res.json());

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
      area: 100.0,
      availableDate: listing.availableDate,
      user: {
        connect: {
          id: userDB?.id,
        },
      },
      address: {
        create: {
          addressLine: addressLine,
          city: address.nearest.city ?? "",
          state: address.nearest.prov ?? "",
          country: address.nearest.state ?? "",
          latitude: address.nearest.latt ?? "",
          longitude: address.nearest.longt ?? "",
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

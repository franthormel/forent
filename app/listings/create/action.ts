"use server";

import { FormDataUtils } from "@/lib/commons";
import { GeonamesProvider, GeonamesResponse } from "@/lib/geocode/geonames";
import { FormListing } from "@/lib/types/listing";
import { ValidatorError } from "@/lib/validation";
import { FormListingValidator } from "@/lib/validation/listing";
import prisma from "@/lib/db";
import { getSessionUser } from "@/lib/auth";

export async function createListing(prevState: any, formData: FormData) {
  const formUtils = new FormDataUtils(formData);
  // Default values, if the field is required, must be fail safes
  const listing: FormListing = {
    price: formUtils.getNumber("price", -1),
    description: formUtils.getString("description", ""),
    deposit: formUtils.getNumber("deposit", 0),
    availableDate: formUtils.getDate("availableDate", new Date()),
    beds: formUtils.getNumber("beds", -1),
    baths: formUtils.getNumber("baths", -1),
    longitude: formUtils.getString("inputLongitude", ""),
    latitude: formUtils.getString("inputLatitude", ""),
  };

  const validator = new FormListingValidator(listing);
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

  // todo: remove city and prov from addressLine (only use nearest.name)
  const addressLine =
    address.nearest.name +
    "," +
    address.nearest.city +
    "," +
    address.nearest.prov;

  const createdListing = await prisma.listing.create({
    data: {
      deposit: listing.deposit,
      description: listing.description,
      beds: listing.beds,
      baths: listing.baths,
      area: 100.0, // todo: fix
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

  // todo: redirect to preview

  // todo: redirect to create listing
}

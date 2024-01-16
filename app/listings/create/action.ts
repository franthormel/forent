"use server";

import { FormDataUtils } from "@/lib/commons";
import { GeonamesProvider, GeonamesResponse } from "@/lib/geocode/geonames";
import { FormListing } from "@/lib/types/listing";
import { ValidatorError } from "@/lib/validation";
import { FormListingValidator } from "@/lib/validation/listing";
import prisma from "@/lib/db";

export async function createListing(prevState: any, formData: FormData) {
  const formUtils = new FormDataUtils(formData);
  // Default values, if the field is required, must be fail safes
  const draft: FormListing = {
    price: formUtils.getNumber("price", -1),
    description: formUtils.getString("description", ""),
    deposit: formUtils.getNumber("deposit", 0),
    availableDate: formUtils.getDate("availableDate", new Date()),
    beds: formUtils.getNumber("beds", -1),
    baths: formUtils.getNumber("baths", -1),
    longitude: formUtils.getString("inputLongitude", ""),
    latitude: formUtils.getString("inputLatitude", ""),
  };

  const validator = new FormListingValidator(draft);
  try {
    validator.validate();
  } catch (e) {
    if (e instanceof ValidatorError) {
      return e.getErrorMessage();
    }
  }

  const geocodeProvider = new GeonamesProvider(draft.latitude, draft.longitude);
  const url = geocodeProvider.url();
  console.log("Fetching geocode from " + url);

  // Fetch data from the geocode provider
  const response: GeonamesResponse = await fetch(url).then((res) => res.json());
  console.log("Geocode response : " + response);

  // todo: save to db
  // prisma.listing.create()
}

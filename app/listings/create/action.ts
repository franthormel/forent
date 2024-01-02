"use server";

import { FormDataUtils } from "@/lib/commons";
import { GeonamesProvider, GeonamesResponse } from "@/lib/geocode/geonames";
import { FormListing } from "@/lib/types/listing";
import {
  FormListingValidator,
  FormListingError,
} from "@/lib/validation/listing";

export async function createListing(
  prevState: any,
  formData: FormData
): Promise<FormListingError | undefined> {
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

  console.log(draft);

  const validator = new FormListingValidator(draft);
  try {
    validator.validate();
  } catch (e) {
    if (e instanceof FormListingError) {
      return e;
    }
  }

  const geocodeProvider = new GeonamesProvider(draft.latitude, draft.longitude);
  const url = geocodeProvider.url();

  // Fetch data from the geocode provider
  const response: GeonamesResponse = await fetch(url).then((res) => res.json());

  // TODO Parse response
}

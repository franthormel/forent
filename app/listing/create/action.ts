"use server";

import { getSessionUser } from "@/lib/auth";
import { FormDataUtils } from "@/lib/commons/formdata_utils";
import prisma from "@/lib/db";
import { GeonamesProvider, GeonamesResponse } from "@/lib/geocode/geonames";
import { ListingCreateForm, ListingPreviewForm } from "@/lib/types/listing";
import { ValidatorError } from "@/lib/validation";
import { ListingCreateFormValidator } from "@/lib/validation/listing/create";
import { IMAGE_URLS } from "./_data/listing-images";
import { ListingCreateFormState } from "./type";

/**
 * Fetch six (6) to 12 image URLs meant to be used for listing photos.
 *
 * @returns image URLs
 */
export async function fetchRandomImages() {
  const MIN = 6;
  const MAX = 12;
  const deviance = Math.floor(Math.random() * (MAX - MIN));
  const limit = MIN + deviance;
  const images = new Set<string>();

  while (images.size !== limit) {
    const index = Math.floor(Math.random() * IMAGE_URLS.length);
    const image = IMAGE_URLS[index];
    images.add(image);
  }

  return Array.from(images);
}

/**
 * Return user session object
 *
 * @returns User session if user is logged in, otherwise `null`.
 */
export async function fetchUser() {
  return await getSessionUser();
}

/**
 * Checks if user is logged in.
 *
 * @returns true if user is logged in, otherwise false.
 */
export async function userIsAuthenticated() {
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

// FUTURE: Rename when done
export async function createListingNew(
  previousState: ListingCreateFormState,
  formData: FormData
) {
  const noErrorState: ListingCreateFormState = {
    errors: [],
  };

  // Only authenticated users
  const isAuthenticated = await userIsAuthenticated();
  if (!isAuthenticated) {
    return noErrorState;
  }

  // Prepare submitted form data
  const formDataUtils = new FormDataUtils(formData);
  const imageUrls = await fetchRandomImages();
  const formListing: ListingCreateForm = {
    price: formDataUtils.getNumber("price", 0),
    deposit: formDataUtils.getNumber("deposit", 0),
    description: formDataUtils.getString("description", ""),
    imageUrls: imageUrls,
    beds: formDataUtils.getNumber("beds", 0),
    baths: formDataUtils.getNumber("baths", 0),
    area: formDataUtils.getNumber("area", 0),
    availableDate: formDataUtils.getDate("availableDate", new Date(2000)),
    addressLongitude: formDataUtils.getDecimal("addressLongitude", -1000),
    addressLatitude: formDataUtils.getDecimal("addressLatitude", -1000),
    addressLine: formDataUtils.getString("addressLine", ""),
    addressCity: formDataUtils.getString("addressCity", ""),
    addressState: formDataUtils.getString("addressState", ""),
    addressZipcode: formDataUtils.getString("addressZipcode", ""),
  };

  console.log("Form = ", formListing);

  // TODO: Validated submitted data
  // TODO: If valid, go to create
  // TODO: If not valid, return errors

  return noErrorState;
}

// FUTURE: Remove soon
export async function createListing(prevState: any, formData: FormData) {
  const formUtils = new FormDataUtils(formData);
  // NOTE: Default values, if the field is required, must be fail safes
  const listing: ListingCreateForm = {
    price: formUtils.getNumber("price", -1),
    description: formUtils.getString("description", ""),
    deposit: formUtils.getNumber("deposit", 0),
    imageUrls: [], // FUTURE: Add more data soon
    availableDate: formUtils.getDate("availableDate", new Date(2000)),
    beds: formUtils.getNumber("beds", -1),
    baths: formUtils.getNumber("baths", -1),
    addressLongitude: formUtils.getNumber("inputLongitude", -999),
    addressLatitude: formUtils.getNumber("inputLatitude", -999),
    area: 100,
    addressLine: "",
    addressCity: "",
    addressState: "",
    addressZipcode: "",
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
    listing.addressLongitude,
    listing.addressLongitude
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

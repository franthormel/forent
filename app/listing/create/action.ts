"use server";

import { getSessionUser } from "@/lib/auth";
import { FormDataUtils } from "@/lib/commons/formdata_utils";
import prisma from "@/lib/db";
import { GeonamesProvider } from "@/lib/geocode/geonames";
import { ListingCreateForm } from "@/lib/types/listing";
import { ListingCreateFormValidator } from "@/lib/validation/listing/create";
import { RedirectType, redirect } from "next/navigation";
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

export async function createListing(
  previousState: ListingCreateFormState,
  formData: FormData
) {
  const okState: ListingCreateFormState = {
    success: true,
    errors: {},
  };

  // Only authenticated users
  const isAuthenticated = await userIsAuthenticated();
  if (!isAuthenticated) {
    return okState;
  }

  const formDataUtils = new FormDataUtils(formData);
  const imageUrls = await fetchRandomImages();
  // Prepare submitted form data
  const listingForm: ListingCreateForm = {
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

  // Validate form data
  const validator = new ListingCreateFormValidator(listingForm);
  const result = validator.validate();
  if (result.success) {
    const userSession = await getSessionUser();
    const userDB = await prisma.user.findUnique({
      where: {
        email: userSession?.email!,
      },
    });

    // If valid, record listing in DB ...
    const listingDB = await prisma.listing.create({
      data: {
        user: {
          connect: {
            id: userDB?.id,
          },
        },
        prices: {
          create: {
            value: listingForm.price,
          },
        },
        deposit: listingForm.deposit,
        description: listingForm.description,
        imageUrls: listingForm.imageUrls,
        beds: listingForm.beds,
        baths: listingForm.baths,
        area: listingForm.area,
        availableDate: listingForm.availableDate,
        address: {
          create: {
            longitude: listingForm.addressLongitude,
            latitude: listingForm.addressLatitude,
            addressLine: listingForm.addressLine,
            city: listingForm.addressCity,
            state: listingForm.addressState,
            zipcode: listingForm.addressZipcode,
            country: "", // FUTURE: Remove soon
          },
        },
      },
    });

    // .. then redirect to its details page
    redirect(`/listing/${listingDB.id}`, RedirectType.push);
  } else {
    // If not valid, return errors
    const errorState: ListingCreateFormState = {
      success: false,
      errors: {},
    };

    // Parse errors
    const errors = result.error.errors;
    for (const error of errors) {
      const path = error.path.at(0)?.toString();
      const message = error.message;

      switch (path) {
        case "price":
          errorState.errors.price = message;
          break;
        case "deposit":
          errorState.errors.deposit = message;
          break;
        case "description":
          errorState.errors.description = message;
          break;
        case "beds":
          errorState.errors.beds = message;
          break;
        case "baths":
          errorState.errors.baths = message;
          break;
        case "area":
          errorState.errors.area = message;
          break;
        case "availableDate":
          errorState.errors.availableDate = message;
          break;
        case "addressLongitude" || "addressLatitude":
          errorState.errors.addressMap = message;
          break;
        case "addressLine":
          errorState.errors.addressLine = message;
          break;
        case "addressCity":
          errorState.errors.addressCity = message;
          break;
        case "addressState":
          errorState.errors.addressState = message;
          break;
        case "addressZipcode":
          errorState.errors.addressZipcode = message;
          break;
      }
    }

    console.log(errorState);

    return errorState;
  }

  return okState;
}

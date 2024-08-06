"use server";

import prisma from "@/lib/db";
import { LISTINGS_PER_PAGE } from "./constants";
import { countListingsToSkip } from "./function";
import { Listing } from "./types";

export async function fetchListingsByPage(currentPage: number) {
  const dbListings = await prisma.listing.findMany({
    skip: countListingsToSkip(currentPage, LISTINGS_PER_PAGE),
    take: LISTINGS_PER_PAGE,
    include: {
      address: true,
      prices: true,
    },
  });
  const processedListings = dbListings.map((dbListing) => {
    const dbListingPrice = dbListing.prices
      .filter((dbListingPrice) => dbListingPrice.isCurrent)
      .at(0)!
      .value.toNumber();
    const dbListingAddress = dbListing.address!;
    const listing: Listing = {
      id: dbListing.id,
      imageUrls: dbListing.imageUrls,
      beds: dbListing.beds,
      baths: dbListing.baths,
      area: dbListing.area.toNumber(),
      createdDate: dbListing.createdDate,
      address: {
        addressLine: dbListingAddress.addressLine,
        city: dbListingAddress.city,
        state: dbListingAddress.state,
        longitude: dbListingAddress.longitude.toNumber(),
        latitude: dbListingAddress.latitude.toNumber(),
      },
      price: {
        value: dbListingPrice,
      },
    };
    return listing;
  });

  return processedListings;
}

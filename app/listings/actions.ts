"use server";

import prisma from "@/lib/db";
import { Listing, PrismaListing } from "./types";

const prismaListingMapper = (dbListing: PrismaListing) => {
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
};

export async function fetchMatchedListings(): Promise<Listing[]> {
  // TODO: Add filter param values
  const prismaListings = await prisma.listing.findMany({
    include: {
      address: true,
      prices: true,
    },
  });
  return prismaListings.map(prismaListingMapper);
}

"use server";

import prisma from "@/lib/db";
import { DEFAULT_LIST_FILTERS } from "./constants";
import { Listing, ListingsSearchFilters, PrismaListing } from "./types";

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

export async function fetchMatchedListings(
  filters: ListingsSearchFilters = DEFAULT_LIST_FILTERS
): Promise<Listing[]> {
  // TODO: Use beds filter values
  // TODO: Use baths filter values
  const prismaListings = await prisma.listing.findMany({
    include: {
      address: true,
      prices: true,
    },
    where: {
      // Filter (price)
      prices: {
        some: {
          // Price must be current ...
          isCurrent: true,
          AND: {
            // ... and must be greater than or equal than the minimum filter value ...
            value: {
              gte: filters.price.min.value,
            },
            AND: {
              // ... and must be lesser than or equal than the maximum filter value
              value: {
                lte: filters.price.max.value,
              },
            },
          },
        },
      },
      // Filter (area): must be greater than or equal than the minimum filter value ...
      area: {
        gte: filters.area.min.value,
      },
      AND: {
        // ... and must be lesser than or equal than the maximum filter value
        area: {
          lte: filters.area.max.value,
        },
      },
    },
  });
  return prismaListings.map(prismaListingMapper);
}

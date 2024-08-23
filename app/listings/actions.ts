"use server";

import prisma from "@/lib/db";
import { DEFAULT_LIST_FILTERS } from "./constants";
import {
  BedsBathsOption,
  Listing,
  ListingsSearchFilters,
  PrismaListing,
} from "./types";

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

  // It is easier to filter the beds/baths values programatically rather than using Prisma's filtering API for the use case.
  return prismaListings
    .filter((listing) =>
      bedsBathsOptionFilter(filters.beds.value, listing.beds)
    )
    .filter((listing) =>
      bedsBathsOptionFilter(filters.baths.value, listing.baths)
    )
    .map(prismaListingMapper);
  return prismaListings.map(prismaListingMapper);
}

function bedsBathsOptionFilter(
  option: BedsBathsOption,
  value: number
): boolean {
  switch (option) {
    case BedsBathsOption.ANY:
      return true;
      break;
    case BedsBathsOption.ONE:
      return value === 1;
      break;
    case BedsBathsOption.TWO:
      return value === 2;
      break;
    case BedsBathsOption.THREE:
      return value === 3;
      break;
    case BedsBathsOption.FOUR:
      return value === 4;
      break;
    case BedsBathsOption.MORE_THAN_FIVE:
      return value >= 5;
      break;
    default:
      return true;
  }
}

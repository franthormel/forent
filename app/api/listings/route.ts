import { DEFAULT_REQUEST_FILTERS } from "@/app/listings/constants";
import {
  BedsBathsOption,
  Listing,
  ListingsSearchFiltersRequest,
  PrismaListing,
} from "@/app/listings/types";
import prisma from "@/lib/db";

export async function POST(request: Request) {
  const json = await request.json();
  const searchFilters: ListingsSearchFiltersRequest = json;
  const listings = await fetchMatchedListings(searchFilters);
  return Response.json({ listings });
}

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
  filters: ListingsSearchFiltersRequest = DEFAULT_REQUEST_FILTERS
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
              gte: filters.price.min,
            },
            AND: {
              // ... and must be lesser than or equal than the maximum filter value
              value: {
                lte: filters.price.max,
              },
            },
          },
        },
      },
      // Filter (area): must be greater than or equal than the minimum filter value ...
      area: {
        gte: filters.area.min,
      },
      AND: {
        // ... and must be lesser than or equal than the maximum filter value
        area: {
          lte: filters.area.max,
        },
      },
    },
  });

  // It is easier to filter the beds/baths values programatically rather than using Prisma's filtering API.
  return prismaListings
    .filter((listing) => bedsBathsOptionFilter(filters.beds, listing.beds))
    .filter((listing) => bedsBathsOptionFilter(filters.baths, listing.baths))
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

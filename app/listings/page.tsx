import prisma from "@/lib/db";
import { LISTINGS_PER_PAGE, STARTING_PAGE } from "./constants";
import ListingsContent from "./content";
import { countListingsToSkip } from "./function";
import ListingsProvider from "./provider";
import { ListingsSearchFilters } from "./search-filters";
import { Listing } from "./types";

export default async function Listings() {
    // These are just the initial values.
    // The ones that will be 'filtered' are different.
    const dbListings = await prisma.listing.findMany({
        skip: countListingsToSkip(STARTING_PAGE, LISTINGS_PER_PAGE),
        take: LISTINGS_PER_PAGE,
        include: {
            address: true,
            prices: true,
        }
    });

    // FUTURE: Might need to move this data 'transformer' into another function
    // since it might be used in server actions by client components down the tree 
    const processedListings: Listing[] = dbListings.map((dbListing) => {
        const dbListingPrice = dbListing.prices.filter((dbListingPrice) => dbListingPrice.isCurrent).at(0)!.value.toNumber();
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
                value: dbListingPrice
            }
        }
        return listing
    })


    const listingsCount = await prisma.listing.count()
    const pages = Math.ceil(listingsCount / LISTINGS_PER_PAGE);

    return (
        <ListingsProvider>
            <div className="flex flex-col gap-y-8">
                <ListingsSearchFilters />
                <ListingsContent listings={processedListings} pages={pages} />
            </div>
        </ListingsProvider>
    );
}

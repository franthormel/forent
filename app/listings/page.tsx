import CardListing from "@/components/card-listing";
import Pagination from "@/components/pagination";
import prisma from "@/lib/db";
import { CURRENCY_FORMATTER } from "@/lib/formatter/currency";
import { countListingsToSkip } from "./function";
import { ListingsListTop } from "./list-top";
import { ListingsMap } from "./map";
import { ListingsSearchFilters } from "./search-filters";

const LISTINGS_PER_PAGE = 11;

export default async function Listings() {
    const currentPage = 1;
    const listingsToSkip = countListingsToSkip(currentPage, LISTINGS_PER_PAGE);
    // Count the number of listings using the givne current pagination option values
    const listingsCount = await prisma.listing.count()
    // Filter listings using the given pagination and filter options
    const listings = await prisma.listing.findMany({
        skip: listingsToSkip,
        take: LISTINGS_PER_PAGE,
        include: {
            address: true,
            prices: true
        }
    });
    const pages = Math.ceil(listingsCount / LISTINGS_PER_PAGE);

    // TODO: Remove last
    console.log("-------------------------------------------------------")
    console.log("length", listingsCount);
    console.log("skip", listingsToSkip);
    console.log("pages ", pages);

    return (
        <div className="flex flex-col gap-y-8">
            {/* Search and price filters */}
            <ListingsSearchFilters />
            <div className="flex h-[36rem]">
                <ListingsMap />
                {/* List of listings */}
                <div className="flex basis-1/2 flex-col">
                    {/* List of listings count & sort option */}
                    <ListingsListTop />
                    {/* List of listings cards */}
                    <div className="flex basis-full flex-col items-center overflow-x-auto p-4">
                        <div className="grid-cols-auto grid gap-4 xl:grid-cols-2 xl:gap-6">
                            {listings.map((listing) => {
                                const listingPrice = listing.prices.filter(price => price.isCurrent)
                                    .at(0)!.value
                                    .toNumber();
                                const priceFormatted = CURRENCY_FORMATTER.format(listingPrice)
                                return (
                                    <CardListing
                                        key={listing.id}
                                        id={listing.id}
                                        addressLine1={listing.address!.addressLine}
                                        addressLine2={`${listing.address!.city}, ${listing.address!.state}`}
                                        area={listing.area.toString()}
                                        baths={listing.baths}
                                        beds={listing.beds}
                                        imgUrl={listing.imageUrls[0]}
                                        price={priceFormatted} />
                                )
                            })}
                        </div>
                    </div>
                    {/* List of listings pagination */}
                    <div className="flex basis-20 items-center justify-center border-y-[1px] border-gray-200">
                        <Pagination pages={pages} currentPage={currentPage} />
                    </div>
                </div>
            </div>
        </div>
    );
}

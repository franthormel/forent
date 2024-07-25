import CardListing from "@/components/card-listing";
import { CURRENCY_FORMATTER } from "@/lib/currency";
import prisma from "@/lib/db";
import { ListingsListTop } from "./list-top";
import { ListingsMap } from "./map";
import { ListingsSearchFilters } from "./search-filters";

export default async function Listings() {
    const listings = await prisma.listing.findMany({
        take: 40,
        include: {
            address: true,
            prices: true
        }
    });

    return (
        <div className="flex flex-col gap-y-8">
            {/* Search and price filters */}
            <ListingsSearchFilters />
            <div className="flex h-[36rem]">
                <ListingsMap />
                {/* TODO: List of listings */}
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
                    {/* TODO: List of listings pagination */}
                    <div className="basis-20 bg-yellow-500" />
                </div>
            </div>
        </div>
    );
}

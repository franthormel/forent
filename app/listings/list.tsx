import CardListing from "@/components/card-listing";
import { CURRENCY_FORMATTER } from "@/lib/formatter/currency";
import { PrismaListing } from "@/lib/types-prisma/listing";

export interface ListingsListInterface {
    listings: PrismaListing[]
}

export default function ListingsList(props: ListingsListInterface) {
    return (
        <div className="flex basis-full flex-col items-center overflow-x-auto p-4">
            <div className="grid-cols-auto grid gap-4 xl:grid-cols-2 xl:gap-6">
                {props.listings.map((listing) => {
                    const listingPrice = listing.prices.filter((price) => price.isCurrent)
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
    )
}

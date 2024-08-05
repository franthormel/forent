"use client"

import CardListing from "@/components/card-listing";
import { CURRENCY_FORMATTER } from "@/lib/formatter/currency";
import { useState } from "react";
import { Listing } from "./types";

export interface ListingsListInterface {
    listings: Listing[]
}

export default function ListingsList(props: ListingsListInterface) {
    const [listings, setListings] = useState<Listing[]>(props.listings);

    return (
        <div className="flex basis-full flex-col items-center overflow-x-auto p-4">
            <div className="grid-cols-auto grid gap-4 xl:grid-cols-2 xl:gap-6">
                {listings.map((listing) => {
                    const priceFormatted = CURRENCY_FORMATTER.format(listing.price.value)
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

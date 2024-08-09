"use client"

import CardListing from "@/components/card-listing";
import { CURRENCY_FORMATTER } from "@/lib/formatter/currency";
import { useContext, useEffect, useMemo, useState } from "react";
import { LISTINGS_PER_PAGE } from "./constants";
import { countListingsToSkip } from "./function";
import { ListingsContext } from "./provider";
import { Listing } from "./types";

export interface ListingsListProps {
    listings: Listing[]
}

export default function ListingsList(props: ListingsListProps) {
    const { pagination } = useContext(ListingsContext);
    const currentPage = pagination.currentPage.value;

    const memoListings = useMemo<Listing[]>(() => {
        const start = countListingsToSkip(currentPage, LISTINGS_PER_PAGE);
        const end = start + LISTINGS_PER_PAGE;
        const newListings = props.listings.slice(start, end);
        return newListings;
    }, [currentPage])

    return (
        <div className="flex basis-full flex-col items-center overflow-x-auto p-4">
            <div className="grid-cols-auto grid gap-4 xl:grid-cols-2 xl:gap-6">
                {memoListings.map((listing) => {
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

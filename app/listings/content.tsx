"use client"

import { useContext } from "react"
import ListingsList from "./list"
import { ListingsListCountSort } from "./list-count-sort"
import { ListingsMap } from "./map"
import ListingsPagination from "./pagination"
import { ListingsContext } from "./provider"
import { Listing, ListingSortCompareFunctions } from "./types"

interface ListingsContentInterface {
    listings: Listing[]
}

export default function ListingsContent(props: ListingsContentInterface) {
    // TODO: Use context filter values, try to use useMemo if applicable
    const context = useContext(ListingsContext);

    const sortedListings = props.listings.sort(ListingSortCompareFunctions.choose(context.sort.value))

    return (
        <div className="flex h-[36rem]">
            <ListingsMap listings={props.listings} />
            <div className="flex basis-1/2 flex-col">
                <ListingsListCountSort listingsCount={props.listings.length} />
                <ListingsList listings={sortedListings} />
                <ListingsPagination listingsCount={props.listings.length} />
            </div>
        </div>
    )
}

"use client"

import { useContext, useEffect, useMemo, useState } from "react"
import { ListingSortCompareFunctions, makeSearchFiltersRequest } from "./functions"
import ListingsList from "./list"
import { ListingsListCountSort } from "./list-count-sort"
import { ListingsMap } from "./map"
import ListingsPagination from "./pagination"
import { ListingsContext } from "./provider"
import { Listing } from "./types"

export default function ListingsContent() {
    const context = useContext(ListingsContext);
    const [listings, setListings] = useState<Listing[]>([]);

    useEffect(() => {
        async function updateListings() {
            const searchFiltersRequest = makeSearchFiltersRequest(context.searchFilters);
            const request = await fetch("/api/listings", {
                method: "POST",
                body: JSON.stringify(searchFiltersRequest),
            });
            const json = await request.json()
            const newListings: Listing[] = json.listings as Listing[];
            setListings(newListings)
        }
        updateListings()
    }, [context.searchFilters])


    const sortedListings = useMemo(() => {
        return listings.sort(ListingSortCompareFunctions.choose(context.sort.value))
    }, [context.sort.value, listings])

    return (
        <div className="flex h-[36rem]">
            <ListingsMap listings={listings} />
            <div className="flex basis-1/2 flex-col">
                <ListingsListCountSort listingsCount={listings.length} />
                <ListingsList listings={sortedListings} />
                <ListingsPagination listingsCount={listings.length} />
            </div>
        </div>
    )
}

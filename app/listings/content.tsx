"use client"

import { useContext, useEffect, useState } from "react"
import { countMatchedListings, fetchListingsByPage } from "./actions"
import ListingsList from "./list"
import { ListingsListTop } from "./list-top"
import { ListingsMap } from "./map"
import ListingsPagination from "./pagination"
import { ListingsContext } from "./provider"
import { Listing } from "./types"

export default function ListingsContent() {
    const [listings, setListings] = useState<Listing[]>([])
    const [listingsCount, setListingsCount] = useState<number>(0)

    const context = useContext(ListingsContext)
    const currentPage = context.pagination.currentPage.value

    // Change pagination
    useEffect(() => {
        async function updateListings() {
            const newListings = await fetchListingsByPage(currentPage)
            setListings(newListings)
        }
        updateListings()
    }, [currentPage])


    // Count how many listings
    useEffect(() => {
        async function countListings() {
            const newListingsCount = await countMatchedListings()
            setListingsCount(newListingsCount)
        }
        countListings()
    }, [])

    return (
        <div className="flex h-[36rem]">
            <ListingsMap />
            <div className="flex basis-1/2 flex-col">
                <ListingsListTop listingsCount={listingsCount} />
                <ListingsList listings={listings} />
                <ListingsPagination listingsCount={listingsCount} />
            </div>
        </div>
    )
}

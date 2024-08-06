"use client"

import { useContext, useEffect, useState } from "react"
import { fetchListingsByPage } from "./actions"
import ListingsList from "./list"
import { ListingsListTop } from "./list-top"
import { ListingsMap } from "./map"
import ListingsPagination from "./pagination"
import { ListingsContext } from "./provider"
import { Listing } from "./types"

export interface ListingsContentProps {
    pages: number
}

export default function ListingsContent(props: ListingsContentProps) {
    const [listings, setListings] = useState<Listing[]>([]);
    const context = useContext(ListingsContext);
    const currentPage = context.pagination.currentPage.value;

    useEffect(() => {
        async function updateListings() {
            const newListings = await fetchListingsByPage(currentPage);
            setListings(newListings);
        }
        updateListings();
    }, [currentPage])

    return (
        <div className="flex h-[36rem]">
            <ListingsMap />
            <div className="flex basis-1/2 flex-col">
                <ListingsListTop />
                <ListingsList listings={listings} />
                <ListingsPagination pages={props.pages} />
            </div>
        </div>
    )
}

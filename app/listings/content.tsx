import ListingsList from "./list"
import { ListingsListTop } from "./list-top"
import { ListingsMap } from "./map"
import ListingsPagination from "./pagination"
import { Listing } from "./types"

export interface ListingsContentProps {
    listings: Listing[]
    pages: number
}

export default function ListingsContent(props: ListingsContentProps) {
    return (
        <div className="flex h-[36rem]">
            <ListingsMap />
            <div className="flex basis-1/2 flex-col">
                <ListingsListTop />
                <ListingsList listings={props.listings} />
                <ListingsPagination pages={props.pages} />
            </div>
        </div>
    )
}

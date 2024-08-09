import ListingsList from "./list"
import { ListingsListTop } from "./list-top"
import { ListingsMap } from "./map"
import ListingsPagination from "./pagination"
import { Listing } from "./types"

interface ListingsContentInterface {
    listings: Listing[]
}

export default function ListingsContent(props: ListingsContentInterface) {
    return (
        <div className="flex h-[36rem]">
            {/* TODO: Display listings as pins  */}
            <ListingsMap listings={props.listings} />
            <div className="flex basis-1/2 flex-col">
                <ListingsListTop listingsCount={props.listings.length} />
                <ListingsList listings={props.listings} />
                <ListingsPagination listingsCount={props.listings.length} />
            </div>
        </div>
    )
}

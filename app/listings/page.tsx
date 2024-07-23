import { ListingsListTop } from "./list-top";
import { ListingsMap } from "./map";
import { ListingsSearchFilters } from "./search-filters";

export default function Listings() {
    return (
        <div className="flex flex-col gap-y-8">
            {/* Search and price filters */}
            <ListingsSearchFilters />
            <div className="flex h-[36rem]">
                <ListingsMap />
                {/* TODO: List of listings */}
                <div className="basis-1/2 flex flex-col">
                    <ListingsListTop />
                    {/* TODO: Listing cards */}
                    <div className="basis-full bg-orange-500" />
                    {/* TODO: Pagination */}
                    <div className="basis-20 bg-yellow-500" />
                </div>
            </div>
        </div>
    );
}

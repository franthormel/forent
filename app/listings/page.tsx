import { fetchMatchedListings } from "./actions";
import ListingsContent from "./content";
import ListingsProvider from "./provider";
import { ListingsSearchFilters } from "./search-filters";

export default async function Listings() {
    const listings = await fetchMatchedListings();

    return (
        <ListingsProvider>
            <div className="flex flex-col gap-y-8">
                <ListingsSearchFilters />
                <ListingsContent listings={listings} />
            </div>
        </ListingsProvider>
    );
}

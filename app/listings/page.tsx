import ListingsContent from "./content";
import ListingsProvider from "./provider";
import { ListingsSearchFilters } from "./search-filters";

export default async function Listings() {
    return (
        <ListingsProvider>
            <div className="flex flex-col gap-y-8">
                <ListingsSearchFilters />
                <ListingsContent />
            </div>
        </ListingsProvider>
    );
}

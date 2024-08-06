import prisma from "@/lib/db";
import { LISTINGS_PER_PAGE } from "./constants";
import ListingsContent from "./content";
import ListingsProvider from "./provider";
import { ListingsSearchFilters } from "./search-filters";

export default async function Listings() {
    // TODO: Move down and the count must be equal to the number of matched listings based on filter values
    const listingsCount = await prisma.listing.count()
    const pages = Math.ceil(listingsCount / LISTINGS_PER_PAGE);

    return (
        <ListingsProvider>
            <div className="flex flex-col gap-y-8">
                <ListingsSearchFilters />
                <ListingsContent pages={pages} />
            </div>
        </ListingsProvider>
    );
}

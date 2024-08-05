import prisma from "@/lib/db";
import ListingsContent from "./content";
import { countListingsToSkip } from "./function";
import { ListingsSearchFilters } from "./search-filters";

const LISTINGS_PER_PAGE = 11;

export default async function Listings() {
    const currentPage = 1;
    const listingsToSkip = countListingsToSkip(currentPage, LISTINGS_PER_PAGE);
    // Filter listings using the given pagination and filter options
    const listings = await prisma.listing.findMany({
        skip: listingsToSkip,
        take: LISTINGS_PER_PAGE,
        include: {
            address: true,
            prices: true,
        }
    });

    const listingsCount = await prisma.listing.count()
    const pages = Math.ceil(listingsCount / LISTINGS_PER_PAGE);

    return (
        <div className="flex flex-col gap-y-8">
            {/* Search and price filters */}
            <ListingsSearchFilters />
            <ListingsContent listings={listings} pages={pages} currentPage={currentPage} />
        </div>
    );
}

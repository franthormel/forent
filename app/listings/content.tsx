import Pagination from "@/components/pagination"
import { PrismaListing } from "@/lib/types-prisma/listing"
import ListingsList from "./list"
import { ListingsListTop } from "./list-top"
import { ListingsMap } from "./map"

export interface ListingsContentProps {
    listings: PrismaListing[]
    pages: number
    currentPage: number
}

export default function ListingsContent(props: ListingsContentProps) {
    return (
        <div className="flex h-[36rem]">
            <ListingsMap />
            <div className="flex basis-1/2 flex-col">
                <ListingsListTop />
                <ListingsList listings={props.listings} />
                <div className="flex basis-20 items-center justify-center border-y-[1px] border-gray-200">
                    <Pagination pages={props.pages} currentPage={props.currentPage} />
                </div>
            </div>
        </div>
    )
}
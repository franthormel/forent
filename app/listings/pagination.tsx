"use client"

import Pagination from "@/components/pagination";
import { useContext } from "react";
import { LISTINGS_PER_PAGE } from "./constants";
import { ListingsContext } from "./provider";

interface ListingsPaginationInterface {
    listingsCount: number
}

export default function ListingsPagination(props: ListingsPaginationInterface) {
    const context = useContext(ListingsContext);
    const pages = Math.ceil(props.listingsCount / LISTINGS_PER_PAGE);

    return (
        <div className="flex basis-20 items-center justify-center border-y-[1px] border-gray-200">
            <Pagination
                pages={pages}
                currentPage={context.pagination.currentPage.value}
                changeToPreviousPage={context.pagination.changeToPreviousPage}
                changeCurrentPage={context.pagination.currentPage.change}
                changeToNextPage={context.pagination.changeToNextPage}
            />
        </div>
    );
}

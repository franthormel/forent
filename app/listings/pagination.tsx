"use client"

import Pagination from "@/components/pagination";
import { useContext } from "react";
import { ListingsContext } from "./provider";

export interface ListingsPaginationProps {
    pages: number
}

export default function ListingsPagination(props: ListingsPaginationProps) {
    const context = useContext(ListingsContext);

    return (
        <div className="flex basis-20 items-center justify-center border-y-[1px] border-gray-200">
            <Pagination
                pages={props.pages}
                currentPage={context.pagination.currentPage.value}
                changeToPreviousPage={context.pagination.changeToPreviousPage}
                changeCurrentPage={context.pagination.currentPage.change}
                changeToNextPage={context.pagination.changeToNextPage}
            />
        </div>
    );
}

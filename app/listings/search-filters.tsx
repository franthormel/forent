"use client"

import ListingsFiltersBedsBaths from "./filter-beds-baths";
import ListingsFilterPrice from "./filter-price";
import ListingsFilterArea from "./filters-area";
import ListingsSearchFiltersModalMenu from "./search-filters-modal-menu";

export function ListingsSearchFilters() {
    return (
        <div className="flex w-full gap-x-4 px-8 md:px-10 lg:max-w-5xl">
            <ListingsFilterPrice />
            <ListingsFiltersBedsBaths />
            <ListingsFilterArea />
            <ListingsSearchFiltersModalMenu />
        </div>
    )
}
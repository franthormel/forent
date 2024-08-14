"use client"

import Search from "@/components/search";
import ListingsFiltersBedsBaths from "./filter-beds-baths";
import ListingsFilterPrice from "./filter-price";
import ListingsFilterArea from "./filters-area";
import ListingsSearchFiltersMenu from "./search-filters-menu";

export function ListingsSearchFilters() {
    return (
        <div className="flex w-full gap-x-4 px-8 md:px-10 lg:max-w-5xl">
            <div className="w-full">
                <Search />
            </div>
            <ListingsFilterPrice />
            <ListingsFiltersBedsBaths />
            <ListingsFilterArea />
            <ListingsSearchFiltersMenu />
        </div>
    )
}
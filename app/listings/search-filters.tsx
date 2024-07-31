"use client"

import Dropdown from "@/components/dropdown";
import Search from "@/components/search";
import ListingsFiltersBedsBaths from "./filter-beds-baths";
import ListingsFilterPrice from "./filter-price";
import ListingsFilterArea from "./filters-area";
import ListingsSearchFiltersMenu from "./search-filters-menu";

// TODO: Make sure that only one (1) dropdown is open at a time.
export function ListingsSearchFilters() {
    return (
        <div className="flex w-full gap-x-4 px-8 md:px-10 lg:max-w-5xl">
            {/* Search filter */}
            <div className="w-full">
                <Search />
            </div>
            {/* Price filter */}
            <div className="hidden md:flex">
                <Dropdown props={{ text: "Price" }}>
                    <div className="md:w-48 lg:w-64">
                        <ListingsFilterPrice />
                    </div>
                </Dropdown>
            </div>
            {/* Beds/Baths filter */}
            <div className="hidden lg:flex">
                <Dropdown props={{ text: "Beds/Baths" }}>
                    <div className="w-64 lg:w-72">
                        <ListingsFiltersBedsBaths />
                    </div>
                </Dropdown>
            </div>
            {/* Area filter */}
            <div className="hidden lg:flex">
                <Dropdown props={{ text: "Area" }}>
                    <div className="w-24 xl:w-56">
                        <ListingsFilterArea />
                    </div>
                </Dropdown>
            </div>
            {/* Filter menu */}
            <ListingsSearchFiltersMenu />
        </div>
    )
}
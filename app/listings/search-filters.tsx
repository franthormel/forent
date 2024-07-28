import ButtonTextIconOutlined from "@/components/buttons/text-icon-outlined";
import Search from "@/components/search";
import ListingsSearchFiltersMenu from "./search-filters-menu";

export function ListingsSearchFilters() {
    return (
        <div className="flex w-full gap-x-4 px-8 md:px-10 lg:max-w-5xl">
            {/* Search filter */}
            <div className="w-full">
                <Search />
            </div>
            {/* Price filter */}
            <div className="hidden md:flex">
                <ButtonTextIconOutlined props={{
                    text: "Price",
                    dataCy: "button-filter-price"
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        height="24"
                        width="24">
                        <path d="M480-360 280-560h400L480-360Z" />
                    </svg>
                </ButtonTextIconOutlined>
            </div>
            {/* Beds/Baths filter */}
            <div className="hidden lg:flex">
                <ButtonTextIconOutlined props={{
                    text: "Beds/Baths",
                    dataCy: "button-filter-beds-baths"
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        height="24"
                        width="24">
                        <path d="M480-360 280-560h400L480-360Z" />
                    </svg>
                </ButtonTextIconOutlined>
            </div>
            {/* Area filter */}
            <div className="hidden lg:flex">
                <ButtonTextIconOutlined props={{
                    text: "Area",
                    dataCy: "button-filter-area"
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        height="24"
                        width="24">
                        <path d="M480-360 280-560h400L480-360Z" />
                    </svg>
                </ButtonTextIconOutlined>
            </div>
            {/* Filter menu */}
            <ListingsSearchFiltersMenu />
        </div>
    )
}
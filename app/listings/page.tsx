import ButtonIconTextOutlined from "@/components/buttons/icon-text-outlined";
import ButtonTextIconOutlined from "@/components/buttons/text-icon-outlined";
import Search from "@/components/search";

export default function Home() {
    return (
        <div className="px-8 md:px-10">
            {/* TODO: Small layouts */}
            {/* TODO: Medium layouts */}
            {/* TODO: Large layouts */}
            {/* TODO: Extra large layouts */}
            {/* TODO: Extra extra large layouts */}
            {/* Search and price filters */}
            <div className="flex gap-x-4">
                {/* Search filter */}
                <div className="w-full">
                    <Search />
                </div>
                {/* Price filter */}
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
                {/* Beds/Baths filter */}
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
                {/* Area filter */}
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
                {/* Filter menu */}
                <ButtonIconTextOutlined props={{
                    text: "Filter",
                    dataCy: "button-filter-menu"
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        width="24"
                        viewBox="0 -960 960 960">
                        <path d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z" />
                    </svg>
                </ButtonIconTextOutlined>
            </div>
        </div>
    );
}

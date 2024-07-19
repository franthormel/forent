import ButtonIconTextOutlined from "@/components/buttons/icon-text-outlined";
import ButtonTextIconOutlined from "@/components/buttons/text-icon-outlined";
import Search from "@/components/search";

export default function Home() {
    return (
        <div className="flex flex-col gap-y-8">
            {/* Search and price filters */}
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
                <div className="flex lg:hidden">
                    <ButtonIconTextOutlined props={{
                        text: "Filters",
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
            <div className="flex h-[36rem]">
                {/* TODO: Map of listings */}
                <div className="basis-1/2 bg-red-200">
                    Map
                </div>
                {/* TODO: List of listings */}
                <div className="basis-1/2 bg-yellow-100">
                    List
                </div>
            </div>
        </div>
    );
}

import ButtonFilled from "@/components/buttons/filled";
import FormInputReset from "@/components/form-input/reset";
import ListingsFiltersBedsBaths from "./filter-beds-baths";
import ListingsFilterPrice from "./filter-price";
import ListingsFilterArea from "./filters-area";

export default function ListingsSearchFiltersModalContent() {
    // TODO: Fix display of search filters
    return (
        <div className="flex flex-col gap-8 p-8">
            <header className="text-2xl font-bold">
                Filters
            </header>
            {/* Price */}
            <div className="max-w-[80%]">
                <ListingsFilterPrice />
            </div>
            {/* Beds/Baths */}
            <div className="flex">
                <ListingsFiltersBedsBaths />
            </div>
            {/* Area */}
            <div className="max-w-[80%]">
                <ListingsFilterArea />
            </div>
            {/* Reset and Search buttons */}
            <div className="flex justify-center gap-10">
                <FormInputReset />
                <ButtonFilled text="Search" />
            </div>
        </div>
    );
}

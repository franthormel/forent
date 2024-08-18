import ButtonsSegmentedLabelled from "@/components/buttons-segmented/labelled";
import ButtonFilled from "@/components/buttons/filled";
import FormInput from "@/components/form-input";
import FormInputReset from "@/components/form-input/reset";
import { BEDS_BATHS_FILTER } from "./constants";

export default function ListingsSearchFiltersModalContent() {
    // TODO: Add input actions
    return (
        <div className="flex flex-col gap-16 p-8">
            <div className="flex flex-col gap-8">
                <header className="text-2xl font-bold">
                    Filters
                </header>
                {/* Price */}
                {/* TODO: (Price filter) Make sure values are the same */}
                <div className="max-w-[80%] gap-5">
                    <FormInput label="Minimum Price"
                        name="price-min"
                        type="number" />
                    <FormInput label="Maximum Price"
                        name="price-max"
                        type="number" />
                </div>
                {/* TODO: (Beds/baths filter) Make sure values are the same */}
                <div className="flex flex-col gap-5">
                    <ButtonsSegmentedLabelled label="Beds"
                        values={BEDS_BATHS_FILTER}
                        activeIndex={0} />
                    <ButtonsSegmentedLabelled label="Baths"
                        values={BEDS_BATHS_FILTER}
                        activeIndex={0} />
                </div>
                {/* Area */}
                {/* TODO: (Area filter) Make sure values are the same */}
                <div className="max-w-[80%] gap-5">
                    <FormInput label="Minimum Area"
                        name="area-min"
                        type="number" />
                    <FormInput label="Maximum Area"
                        name="area-min"
                        type="number" />
                </div>
            </div>
            {/* TODO: Reset and Search buttons */}
            <div className="flex justify-center gap-10">
                <FormInputReset />
                <ButtonFilled text="Search" />
            </div>
        </div>
    );
}

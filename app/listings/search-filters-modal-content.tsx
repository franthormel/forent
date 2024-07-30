import ButtonsSegmentedLabelled from "@/components/buttons-segmented/labelled";
import ButtonFilled from "@/components/buttons/filled";
import FormInput from "@/components/form-input";
import FormInputReset from "@/components/form-input/reset";

export default function ListingsSearchFiltersModalContent() {
    const bedsBathsOptions = ["Any", "1", "2", "3", "4", "5+"];

    return (
        <div className="flex flex-col gap-8 p-8">
            <header className="text-2xl font-bold">
                Filters
            </header>
            {/* Price */}
            <div className="flex max-w-[80%] flex-col gap-5">
                {/* TODO: Use price formatter */}
                <FormInput label="Minimum Price"
                    name="price-min"
                    placeholder="None" />
                {/* TODO: Use price formatter */}
                <FormInput label="Maximum Price"
                    name="price-min"
                    placeholder="₱ 10,000,000" />
            </div>
            {/* Beds/Baths */}
            <div className="flex flex-col gap-5">
                <ButtonsSegmentedLabelled label="Beds"
                    values={bedsBathsOptions} />
                <ButtonsSegmentedLabelled label="Baths"
                    values={bedsBathsOptions} />
            </div>
            {/* Area */}
            <div className="flex max-w-[80%] flex-col gap-5">
                <FormInput label="Minimum Area"
                    name="area-min"
                    placeholder="None" />
                {/* TODO: Create and use area formatter */}
                <FormInput label="Maximum Area"
                    name="area-min"
                    placeholder="100 sqm." />
            </div>
            {/* Reset and Search buttons */}
            <div className="flex justify-center gap-10">
                <FormInputReset />
                <ButtonFilled text="Search" />
            </div>
        </div>
    );
}

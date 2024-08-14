import ButtonsSegmentedLabelled from "@/components/buttons-segmented/labelled";
import ButtonSmallFilled from "@/components/buttons/small/filled";
import ButtonSmallText from "@/components/buttons/small/text";
import Dropdown from "@/components/dropdown";

export default function ListingsFiltersBedsBaths() {
    const bedsBathsOptions = ["Any", "1", "2", "3", "4", "5+"];

    return (
        <div className="hidden lg:flex">
            <Dropdown props={{ text: "Beds/Baths" }}>
                <div className="flex w-64 flex-col gap-5 lg:w-72">
                    <ButtonsSegmentedLabelled label="Beds"
                        values={bedsBathsOptions}
                        activeIndex={0} />
                    <ButtonsSegmentedLabelled label="Baths"
                        values={bedsBathsOptions}
                        activeIndex={0} />
                    <div className="flex justify-evenly">
                        <ButtonSmallText text="Reset" />
                        <ButtonSmallFilled text="Search" />
                    </div>
                </div>
            </Dropdown>
        </div>
    )
}

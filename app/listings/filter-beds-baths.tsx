import ButtonsSegmentedLabelled from "@/components/buttons-segmented/labelled";
import ListingsFilterButtons from "./filter-buttons";

export default function ListingsFiltersBedsBaths() {
    const bedsBathsOptions = ["Any", "1", "2", "3", "4", "5+"];

    return (
        <div className="flex flex-col gap-5">
            <ButtonsSegmentedLabelled label="Beds"
                values={bedsBathsOptions} />
            <ButtonsSegmentedLabelled label="Baths"
                values={bedsBathsOptions} />
            <ListingsFilterButtons />
        </div>
    );
}

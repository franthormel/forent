import ButtonSmallFilled from "@/components/buttons/small/filled";
import ButtonSmallText from "@/components/buttons/small/text";
import FormInput from "@/components/form-input";
import { AREA_FORMATTER } from "@/lib/formatter/area";

export default function ListingsFilterArea() {
    const DEFAULT_MAX = 20;

    const minAreaPlaceholder = "None";
    const maxAreaPlaceholder = AREA_FORMATTER.format(DEFAULT_MAX);

    return (
        <div className="flex flex-col gap-5">
            <FormInput label="Minimum Area"
                name="area-min"
                placeholder={minAreaPlaceholder} />
            <FormInput label="Maximum Area"
                name="area-min"
                placeholder={maxAreaPlaceholder} />
            <div className="flex flex-col gap-3 xl:hidden">
                <ButtonSmallText text="Reset" />
                <ButtonSmallFilled text="Search" />
            </div>
            <div className="hidden justify-evenly xl:flex">
                <ButtonSmallText text="Reset" />
                <ButtonSmallFilled text="Search" />
            </div>
        </div>
    );
}

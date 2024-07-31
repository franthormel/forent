import ButtonSmallFilled from "@/components/buttons/small/filled";
import ButtonSmallText from "@/components/buttons/small/text";
import FormInput from "@/components/form-input";

export default function ListingsFilterArea() {
    return (
        <div className="flex flex-col gap-5">
            <FormInput label="Minimum Area"
                name="area-min"
                placeholder="None" />
            {/* TODO: Create and use area formatter */}
            <FormInput label="Maximum Area"
                name="area-min"
                placeholder="100 sqm." />
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

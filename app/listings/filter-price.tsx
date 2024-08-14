import ButtonSmallFilled from "@/components/buttons/small/filled";
import ButtonSmallText from "@/components/buttons/small/text";
import Dropdown from "@/components/dropdown";
import FormInput from "@/components/form-input";
import { CURRENCY_FORMATTER } from "@/lib/formatter/currency";

export default function ListingsFilterPrice() {
    const DEFAULT_MAX = 10_000_000;

    const minPricePlaceholder = "None";
    const maxPricePlaceholder = CURRENCY_FORMATTER.format(DEFAULT_MAX);

    return (
        <div className="hidden md:flex">
            <Dropdown props={{ text: "Price" }}>
                <div className="flex flex-col gap-5 md:w-48 lg:w-64">
                    <FormInput label="Minimum Price"
                        name="price-min"
                        placeholder={minPricePlaceholder} />
                    <FormInput label="Maximum Price"
                        name="price-min"
                        placeholder={maxPricePlaceholder} />
                    <div className="flex justify-evenly">
                        <ButtonSmallText text="Reset" />
                        <ButtonSmallFilled text="Search" />
                    </div>
                </div>
            </Dropdown>
        </div>
    )
}

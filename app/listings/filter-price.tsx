import FormInput from "@/components/form-input";
import { CURRENCY_FORMATTER } from "@/lib/formatter/currency";
import ListingsFilterButtons from "./filter-buttons";

export default function ListingsFilterPrice() {
    const DEFAULT_MAX = 10_000_000;

    const minPricePlaceholder = "None";
    const maxPricePlaceholder = CURRENCY_FORMATTER.format(DEFAULT_MAX);

    return (
        <div className="flex flex-col gap-5">
            <FormInput label="Minimum Price"
                name="price-min"
                placeholder={minPricePlaceholder} />
            <FormInput label="Maximum Price"
                name="price-min"
                placeholder={maxPricePlaceholder} />
            <ListingsFilterButtons />
        </div>
    );
}

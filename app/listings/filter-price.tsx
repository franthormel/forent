import FormInput from "@/components/form-input";
import ListingsFilterButtons from "./filter-buttons";

export default function ListingsFilterPrice() {
    return (
        <div className="flex flex-col gap-5">
            {/* TODO: Use price formatter */}
            <FormInput label="Minimum Price"
                name="price-min"
                placeholder="None" />
            {/* TODO: Use price formatter */}
            <FormInput label="Maximum Price"
                name="price-min"
                placeholder="₱ 10,000,000" />
            <ListingsFilterButtons />
        </div>
    );
}

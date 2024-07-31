import ButtonSmallFilled from "@/components/buttons/small/filled";
import ButtonSmallText from "@/components/buttons/small/text";

export default function ListingsFilterButtons() {
    return (
        <div className="flex justify-evenly">
            <ButtonSmallText text="Reset" />
            <ButtonSmallFilled text="Search" />
        </div>
    );
}

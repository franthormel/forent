import { buttonText, buttonType } from "../functions";
import { ButtonProps } from "../types";

export default function ButtonSmallText(props: ButtonProps) {
    const text = buttonText(props.loading) ?? props.text;
    const type = buttonType(props.type);

    return (
        <button data-cy={props.dataCy ?? "btn-text"}
            className="text-sm"
            onClick={props.onClick}
            type={type}>
            {text}
        </button>
    );
}

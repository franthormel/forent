import { buttonText, buttonType } from "./functions";
import { ButtonProps } from "./types";

export default function ButtonText(props: ButtonProps) {
    const text = buttonText(props.loading) ?? props.text;
    const type = buttonType(props.type);

    return (
        <button data-cy={props.dataCy ?? "btn-text"}
            onClick={props.onClick}
            type={type}>
            {text}
        </button>
    );
}
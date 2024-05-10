import { buttonFontSize, buttonType } from "./functions";
import { ButtonProps } from "./types";

export default function ButtonText(props: ButtonProps) {
    const fontSize = buttonFontSize(props.size);
    const type = buttonType(props.type);

    return (
        <button className={`${fontSize}`}
            data-cy={props.dataCy ?? "btn-text"}
            onClick={props.onClick}
            type={type}>
            {props.text}
        </button>
    );
}
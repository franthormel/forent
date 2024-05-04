import { buttonFontSize } from "./functions";
import { ButtonProps } from "./types";

// TODO: Component
// TODO: Story
export default function ButtonText(props: ButtonProps) {
    const fontSize = buttonFontSize(props.size);

    return (
        <button className={`${fontSize}`}
            data-cy={props.dataCy ?? "btn-text"}
            onClick={props.onClick}
            // NOTE: This prevents it from submitting HTML forms
            type="button">
            {props.text}
        </button>
    );
}
import { buttonFontSize, buttonPadding } from "./functions";
import { ButtonProps } from "./types";

// NOTE: Button styles must be consistent (must apply the same applicable CSS to all button components)
export default function ButtonOutlined(props: ButtonProps) {
    const padding = buttonPadding(props.size);
    const fontSize = buttonFontSize(props.size);

    return (
        <button className={`${padding} ${fontSize} rounded-full border-2 border-gray-800 bg-slate-50 transition-all
                        hover:bg-gray-800 hover:text-slate-50`}
            data-cy={props.dataCy ?? "button"}
            onClick={props.onClick}
            // NOTE: This prevents it from submitting HTML forms
            type="button">
            {props.text}
        </button>
    );
}

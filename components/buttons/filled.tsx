import { buttonFontSize, buttonPadding } from "./functions";
import { ButtonProps } from "./types";

// NOTE: Button styles must be consistent (must apply the same applicable CSS to all button components)
export default function ButtonFilled(props: ButtonProps) {
    const padding = buttonPadding(props.size);
    const fontSize = buttonFontSize(props.size);

    return (
        <button className={`bg-amber-400 rounded-full ${padding} ${fontSize} transition-all hover:shadow-md`}
            data-cy={props.dataCyBtn ?? "button"}
            onClick={props.onClick}>
            {props.text}
        </button>
    );
}

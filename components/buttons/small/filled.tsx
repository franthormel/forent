import { buttonType, buttonCursor, buttonText } from "../functions";
import { ButtonProps } from "../types";

// NOTE: Button styles must be consistent (must apply the same applicable CSS to all button components)
export default function ButtonSmallFilled(props: ButtonProps) {
    const type = buttonType(props.type)
    const cursor = buttonCursor(props.loading)
    const text = buttonText(props.loading) ?? props.text;

    return (
        <button className={`${cursor} rounded-full bg-amber-400 px-5 py-2.5 text-sm transition-all
						hover:${props.loading ? 'shadow-none' : 'shadow-md'}`}
            data-cy={props.dataCy ?? "button"}
            onClick={props.onClick}
            disabled={props.loading}
            type={type}>
            {text}
        </button>
    )
}

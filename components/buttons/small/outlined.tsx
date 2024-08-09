import { buttonCursor, buttonText, buttonType } from "../functions";
import { ButtonProps } from "../types";

// NOTE: Button styles must be consistent (must apply the same applicable CSS to all button components)
export default function ButtonSmallOutlined(props: ButtonProps) {
    const type = buttonType(props.type);
    const cursor = buttonCursor(props.loading)
    const text = buttonText(props.loading) ?? props.text;

    return (
        <button className={`${cursor} rounded-full border-2 border-gray-800 bg-slate-50 px-5 py-2.5 text-sm transition-all
                        hover:${!props.loading && 'bg-gray-800'}
                        hover:${!props.loading && 'text-slate-50'}`}
            data-cy={props.dataCy ?? "button"}
            onClick={props.onClick}
            type={type}>
            {text}
        </button>
    );
}

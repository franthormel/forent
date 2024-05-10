import { buttonFontSize, buttonPadding, buttonType } from "./functions"
import { ButtonProps } from "./types"

// NOTE: Button styles must be consistent (must apply the same applicable CSS to all button components)
export default function ButtonFilled(props: ButtonProps) {
    const padding = buttonPadding(props.size)
    const fontSize = buttonFontSize(props.size)
    const type = buttonType(props.type)

    return (
        <button className={`${padding} ${fontSize} rounded-full bg-amber-400 transition-all hover:shadow-md`}
            data-cy={props.dataCy ?? "button"}
            onClick={props.onClick}
            type={type}>
            {props.text}
        </button>
    )
}

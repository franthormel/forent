import { buttonCursor, buttonFontSize, buttonPadding, buttonText, buttonType } from "./functions"
import { ButtonProps } from "./types"

// NOTE: Button styles must be consistent (must apply the same applicable CSS to all button components)
export default function ButtonFilled(props: ButtonProps) {
	const padding = buttonPadding(props.size)
	const fontSize = buttonFontSize(props.size)
	const type = buttonType(props.type)
	const cursor = buttonCursor(props.loading)
	const text = buttonText(props.loading) ?? props.text;

	return (
		<button className={`${padding} ${fontSize} ${cursor} rounded-full bg-amber-400 transition-all
				// Hide shadow on hover when loading state
				hover:${props.loading ? 'shadow-none' : 'shadow-md'}`}
			data-cy={props.dataCy ?? "button"}
			onClick={props.onClick}
			disabled={props.loading}
			type={type}>
			{text}
		</button>
	)
}

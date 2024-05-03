import { buttonFontSize } from "../buttons/functions";
import { ButtonProps } from "../buttons/types";

type FormInputResetProps = Omit<ButtonProps, "text">

// TODO: Story
// TODO: Component
export default function FormInputReset(props: FormInputResetProps) {
    const fontSize = buttonFontSize(props.size);

    return (
        <input type="reset"
            value="Reset"
            className={`${fontSize} cursor-pointer`}
            data-cy={props.dataCy ?? "form-input-reset"} />
    )
}

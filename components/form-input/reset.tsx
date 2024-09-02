import { ButtonProps } from "../buttons/types";

type FormInputResetProps = Omit<ButtonProps, "text">

export default function FormInputReset(props: FormInputResetProps) {
    return (
        <input type="reset"
            value="Reset"
            className="cursor-pointer"
            onClick={props.onClick}
            data-cy={props.dataCy ?? "form-input-reset"} />
    )
}

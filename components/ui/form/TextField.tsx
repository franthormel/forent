import FieldProps from "./FormFieldProps"

type TextFieldProps = Omit<FieldProps, "type">

export default function TextField(props: TextFieldProps) {
    return (
        <div>
            <label htmlFor={props.name}>{props.label}</label>
            <textarea placeholder={props.placeholder}
                name={props.name}
                required={props.required} />
        </div>
    )
}
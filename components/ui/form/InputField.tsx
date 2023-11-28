import FieldProps from "./Field"

export default function InputField(props: FieldProps) {
    return (
        <div>
            <label htmlFor={props.name}>{props.label}</label>
            <input type={props.type}
                placeholder={props.placeholder}
                name={props.name}
                required={props.required} />
        </div>
    )
}
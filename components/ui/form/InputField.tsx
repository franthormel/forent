import FormFieldProps from "./FormFieldProps"

export default function InputField(props: FormFieldProps) {
    const required = props.required ?? false;

    return (
        <div>
            <label htmlFor={props.name}>{props.label}</label>
            <input type={props.type}
                placeholder={props.placeholder}
                name={props.name}
                required={required} />
        </div>
    )
}
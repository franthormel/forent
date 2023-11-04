interface InputFieldProps {
    /** 
     * Label text to be displayed.
     */
    label: string
    /**
     * Label `for` attribute value. 
     * See [guide](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#defining_an_explicit_label_with_the_for_attribute) 
     */
    htmlFor: string
    /**
     * Input type.
     */
    type: string
    /**
     * Input name.
     */
    name: string
    /**
     * Required.
     */
    required: boolean
}

export default function InputField({
    ...props
}: InputFieldProps) {
    return (
        <div>
            <label htmlFor={props.htmlFor}>{props.label}</label>
            <br />
            <input
                className="border-2 border-neutral-300 mt-1 rounded-sm"
                type={props.type}
                name={props.name}
                id={props.htmlFor}
                required={props.required}
            />
        </div>
    )
}

// TODO:
// 1. Add input field onActive styling
// 2. Add input field required styling
// 3. Add toggle password visibility on/off
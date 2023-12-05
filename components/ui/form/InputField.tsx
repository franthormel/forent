import Optional from "./Optional";

type InputFieldType = "text" | "date" | "number";
export interface InputFieldProps {
    /**
     * Input type. Default is 'text'
     */
    type?: InputFieldType;
    /**
     * Input name
     */
    name: string;
    /**
     * Input label
     */
    label: string;
    /**
     * Input placeholder
     */
    placeholder?: string;
    /**
     * Is input optional. Default is 'false'
     */
    optional?: boolean;
    /**
     * Minimum value
     */
    min?: number | string;
    /**
     * Maximum value
     */
    max?: number | string;
    /**
     * Minimum string length
     */
    minLength?: number;
    /**
     * Maximum string length
     */
    maxLength?: number;
    /**
     * Default value
     */
    defaultValue?: number | string;
}

export default function InputField(props: InputFieldProps) {
    return (
        <div className="w-5/6">
            <div className="flex justify-between">
                <label htmlFor={props.name}>
                    {props.label}
                </label>
                {props.optional && <Optional />}
            </div>
            <input type={props.type ?? "text"}
                placeholder={props.placeholder}
                name={props.name}
                required={!props.optional}
                min={props.min}
                max={props.max}
                minLength={props.minLength}
                defaultValue={props.defaultValue}
                className="mt-2 block w-full rounded-md border-2 border-slate-200 px-2 py-1" />
        </div>
    )
}
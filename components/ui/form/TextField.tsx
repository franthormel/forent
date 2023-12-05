import Optional from "./Optional"

export interface TextFieldProps {
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
     * Minimum string length
     */
    minLength?: number;
    /**
     * Maximum string length
     */
    maxLength?: number;
}

export default function TextField(props: TextFieldProps) {
    return (
        <div className="w-5/6">
            <div className="flex justify-between">
                <label htmlFor={props.name}>{props.label}</label>
                {props.optional && <Optional />}
            </div>
            <textarea placeholder={props.placeholder}
                name={props.name}
                required={!props.optional}
                minLength={props.minLength}
                maxLength={props.maxLength}
                className="mt-2 block w-full rounded-md border-2 border-slate-200 px-2 py-1" />
        </div>
    )
}
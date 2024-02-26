import { StringUtils } from "@/lib/commons/string_utils";
import TextError from "../text-error/TextError";
import TextOptional from "../text-optional/TextOptional";

type FormInputType = "text" | "date" | "number";

export interface FormInputProps {
    /**
     * Input type. Default is 'text'
     */
    type?: FormInputType;
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
    /**
     * Error message
     */
    errorMessage?: string;
}

export default function FormInput(props: FormInputProps) {
    const hasError = StringUtils.checkInput(props.errorMessage);

    return (
        <div className="w-5/6 min-w-full">
            <div className="flex justify-between">
                <label htmlFor={props.name}>
                    {props.label}
                </label>
                <TextOptional optional={props.optional} />
            </div>
            <input type={props.type ?? "text"}
                placeholder={props.placeholder}
                name={props.name}
                required={!props.optional}
                min={props.min}
                max={props.max}
                minLength={props.minLength}
                defaultValue={props.defaultValue}
                className={`mt-2 w-full rounded-md border-2 px-2 py-1 ${hasError ? 'border-red-600' : 'border-slate-200'}`} />
            <TextError value={props.errorMessage} />
        </div>
    )
}
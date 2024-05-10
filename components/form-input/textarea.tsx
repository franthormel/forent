import { StringUtils } from "@/lib/commons/string_utils"
import TextError from "../text/error"
import TextOptional from "../text/optional"

interface FormInputTextAreaProps {
    /**
     * Input name
     */
    name: string
    /**
     * Input label
     */
    label: string
    /**
     * Input placeholder
     */
    placeholder?: string
    /**
     * Is input optional. Default is 'false'
     */
    optional?: boolean
    /**
     * Minimum string length
     */
    minLength?: number
    /**
     * Maximum string length
     */
    maxLength?: number
    /**
     * Error message
     */
    errorMessage?: string
    dataCy?: string
    dataCyLabel?: string
    dataCyOptional?: string
    dataCyError?: string
}

export default function FormInputTextArea(props: FormInputTextAreaProps) {
    const hasError = StringUtils.checkInput(props.errorMessage)

    return (
        <div className="w-5/6 min-w-full">
            <div className="flex justify-between">
                <label htmlFor={props.name}
                    data-cy={props.dataCyLabel ?? "form-input-textarea-label"}>
                    {props.label}
                </label>
                <TextOptional optional={props.optional} dataCy={props.dataCyOptional} />
            </div>
            <textarea placeholder={props.placeholder}
                name={props.name}
                required={!props.optional}
                minLength={props.minLength}
                maxLength={props.maxLength}
                className={`mt-2 w-full rounded-md border-2 px-2 py-1 ${hasError ? 'border-red-600' : 'border-slate-200'} h-16`}
                data-cy={props.dataCy ?? "form-input-textarea"} />
            <TextError value={props.errorMessage} dataCy={props.dataCyError} />
        </div>
    )
}

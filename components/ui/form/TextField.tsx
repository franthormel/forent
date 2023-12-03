import FieldProps from "./Field"
import Optional from "./Optional"

export type TextFieldProps = Omit<FieldProps, "type">

export default function TextField(props: TextFieldProps) {
    return (
        <div className="w-4/6">
            <div className="flex justify-between">
                <label htmlFor={props.name}>{props.label}</label>
                {props.optional && <Optional />}
            </div>
            <textarea placeholder={props.placeholder}
                name={props.name}
                required={!props.optional}
                className="mt-2 block w-full rounded-md border-2 border-slate-200 px-2 py-1" />
        </div>
    )
}
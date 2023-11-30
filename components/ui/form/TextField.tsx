import FieldProps from "./Field"
import Optional from "./Optional"

export type TextFieldProps = Omit<FieldProps, "type">

export default function TextField(props: TextFieldProps) {
    return (
        <div className="grid gap-y-2 w-fit">
            <div className="flex justify-between">
                <label htmlFor={props.name}>{props.label}</label>
                {props.optional ?? <Optional />}
            </div>
            <textarea placeholder={props.placeholder}
                name={props.name}
                required={props.optional}
                className="block border-2 rounded-md border-slate-200 py-1 px-2 w-80" />
        </div>
    )
}
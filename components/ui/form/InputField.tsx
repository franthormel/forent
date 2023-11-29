import FieldProps from "./Field"
import Optional from "./Optional";

export default function InputField(props: FieldProps) {
    return (
        <div className="grid gap-y-2 w-fit">
            <div className="flex justify-between">
                <label htmlFor={props.name}>
                    {props.label}
                </label>
                {props.required ?? <Optional />}
            </div>
            <input type={props.type ?? "text"}
                placeholder={props.placeholder}
                name={props.name}
                required={props.required}
                className="block border-2 rounded-md border-slate-200 py-1 px-2 w-80" />
        </div>
    )
}
import FieldProps from "./Field"
import Optional from "./Optional";

export default function InputField(props: FieldProps) {
    return (
        <div className="w-fit">
            <div className="flex justify-between">
                <label htmlFor={props.name}>
                    {props.label}
                </label>
                {props.optional ?? <Optional />}
            </div>
            <input type={props.type ?? "text"}
                placeholder={props.placeholder}
                name={props.name}
                required={props.optional}
                className="block border-2 rounded-md border-slate-200 py-1 px-2 w-80 mt-2" />
        </div>
    )
}
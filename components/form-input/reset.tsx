interface FormInputResetProps {
    dataCy?: string
}

export default function FormInputReset(props: FormInputResetProps) {
    return (
        <input type="reset"
            value="Reset"
            className="cursor-pointer rounded-md border-2 border-transparent px-6 py-3 transition-all hover:border-slate-200"
            data-cy={props.dataCy ?? "form-input-reset"} />
    )
}

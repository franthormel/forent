interface FormSubmitButtonProps {
    /** 
     * Text to be displayed.
     */
    text?: string
    /**
     * Disabled state.
     */
    disabled?: boolean
}

export default function FormSubmitButton({
    text = 'Submit',
    disabled = false,
}: FormSubmitButtonProps) {
    return (
        <button
            className="bg-blue-500 px-3 py-2 rounded-full w-fit"
            disabled={disabled}>
            {text}
        </button>
    )
}

// TODO:
// 1. Add disabled styling similar to `LinkButton`
// 2. Add onclick styling similar to `LinkButton`

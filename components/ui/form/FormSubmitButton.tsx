interface FormSubmitButtonProps {
    text?: string;
}

export default function FormSubmitButton(props: FormSubmitButtonProps) {
    const text = props.text ?? 'Submit';

    return <input type="submit" value={text}
        className="cursor-pointer w-fit rounded-md px-6 py-3 transition-all bg-amber-400 hover:shadow-md" />;
}
export interface SubmitButtonProps {
    /**
     * Text to be displayed. Default is 'Submit'
     */
    text?: string;
}

export default function SubmitButton(props: SubmitButtonProps) {
    const text = props.text ?? 'Submit';

    return <input type="submit" value={text}
        className="w-fit cursor-pointer rounded-md bg-amber-400 px-6 py-3 transition-all hover:shadow-md" />;
}
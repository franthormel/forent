export interface SubmitButtonProps {
    /**
     * Text to be displayed. Default is 'Submit'
     */
    text?: string;
}

export default function SubmitButton(props: SubmitButtonProps) {
    const text = props.text ?? 'Submit';

    return <input type="submit" value={text}
        className="cursor-pointer w-fit rounded-md px-6 py-3 transition-all bg-amber-400 hover:shadow-md" />;
}
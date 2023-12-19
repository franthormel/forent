'use client'

import { useFormStatus } from "react-dom";

export interface SubmitButtonProps {
    /**
     * Text to be displayed. Default is 'Submit'
     */
    text?: string;
}

export default function SubmitButton(props: SubmitButtonProps) {
    const text = props.text ?? 'Submit';
    // TODO: Show pending state = https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#pending-states
    const { pending } = useFormStatus();

    return <input type="image" value={text}
        className="w-fit cursor-pointer rounded-md bg-amber-400 px-6 py-3 transition-all hover:shadow-md" />;
}
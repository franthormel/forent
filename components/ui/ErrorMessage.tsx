export interface ErrorMessageProps {
    /**
     * Text to display
     */
    value: string;
}

export default function ErrorMessage(props: ErrorMessageProps) {
    return <span className="text-lg font-medium text-red-600">{props.value}</span>;
}
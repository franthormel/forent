import { StringUtils } from "@/lib/commons/string_utils";

export interface ErrorMessageProps {
    /**
     * Text to display
     */
    value?: string;
}

export default function ErrorMessage(props: ErrorMessageProps) {
    const showError = StringUtils.checkInput(props.value);

    if (showError) {
        return <span className="text-sm font-medium text-red-600">{props.value}</span>;
    }

    return null;
}
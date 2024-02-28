import { StringUtils } from "@/lib/commons/string_utils";

interface TextErrorProps {
    /**
     * Text to display
     */
    value?: string;
}

// todo: is this really needed?
export default function TextError(props: TextErrorProps) {
    const showError = StringUtils.checkInput(props.value);

    if (showError) {
        return <span className="text-sm font-medium text-red-600">{props.value}</span>;
    }

    return null;
}
import { StringUtils } from "@/lib/commons/string_utils"

interface TextErrorProps {
    /**
     * Text to display
     */
    value?: string
    dataCy?: string
}

export default function TextError(props: TextErrorProps) {
    const showError = StringUtils.checkInput(props.value)

    if (showError) {
        return (
            <span className="text-sm text-red-600"
                data-cy={props.dataCy ?? "text-error"}>
                {props.value}
            </span>
        )
    }
}
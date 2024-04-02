interface TextOptionalProps {
    /**
     * Is input optional. Default is 'false'
     */
    optional?: boolean
    dataCy?: string
}

export default function TextOptional(props: TextOptionalProps) {
    if (props.optional) {
        return (
            <span className="text-gray-500"
                data-cy={props.dataCy ?? "text-optional"}>
                Optional
            </span>
        )
    }
}

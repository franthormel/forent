interface TextOptionalProps {
    /**
     * Is input optional. Default is 'false'
     */
    optional?: boolean;
}

export default function TextOptional(props: TextOptionalProps) {
    if (props.optional) {
        return <span className="text-gray-500">Optional</span>
    }
}

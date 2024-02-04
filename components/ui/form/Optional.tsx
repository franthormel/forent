export interface OptionalProps {
    /**
     * Is input optional. Default is 'false'
     */
    optional?: boolean;
}

export default function Optional(props: OptionalProps) {
    if (props.optional) {
        return <span className="text-gray-500">
            Optional
        </span>
    }

    return null;
}

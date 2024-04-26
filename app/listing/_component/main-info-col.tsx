interface ListingPageMainInfoColumnProps {
    value: string | number
    label: string
}

// TODO: Component
// TODO: Story
export default function ListingPageMainInfoColumn(props: ListingPageMainInfoColumnProps) {
    return (
        <div>
            <span className="font-bold text-gray-800">{props.value}</span>
            <p className="text-sm text-gray-700">{props.label}</p>
        </div>
    )
}

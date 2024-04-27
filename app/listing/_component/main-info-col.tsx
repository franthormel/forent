interface ListingPageMainInfoColumnProps {
    value: string | number
    label: string
    dataCyValue?: string
    dataCyLabel?: string
}

export default function ListingPageMainInfoColumn(props: ListingPageMainInfoColumnProps) {
    return (
        <div data-cy={"listing-main-info-col"}>
            <span className="font-bold text-gray-800"
                data-cy={props.dataCyValue ?? "listing-main-info-col-value"}>
                {props.value}
            </span>
            <p className="text-sm text-gray-700"
                data-cy={props.dataCyLabel ?? "listing-main-info-col-label"}>
                {props.label}
            </p>
        </div>
    )
}

interface ListingMainInfoColumnProps {
    value: string | number
    label: string
    dataCyValue?: string
    dataCyLabel?: string
}

export default function ListingMainInfoColumn(props: ListingMainInfoColumnProps) {
    return (
        <div>
            <span className="font-bold"
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

interface ListingCreateHeaderProps {
	dataCy?: string
	dataCySubHeader?: string
}

export default function ListingCreateHeader(props: ListingCreateHeaderProps) {
	return (
		<div className="grid auto-rows-auto gap-y-1">
			<header className="font-bold text-xl"
				data-cy={props.dataCy ?? "listing-create-header"}>
				Create your listing
			</header>
			<p className="text-lg text-gray-500"
				data-cy={props.dataCySubHeader ?? "listing-create-subheader"}>
				By providing the following information
			</p>
		</div>
	)
}

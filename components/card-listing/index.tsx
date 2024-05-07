import { NumberUtils } from "@/lib/commons/number_utils"
import Image from 'next/image'
import Link from "next/link"

interface CardListingProps {
	id: string
	addressLine1: string
	addressLine2: string
	area: number | string
	baths: number | string
	beds: number | string
	imgUrl: string
	price: string
	dataCyImage?: string
	dataCyPrice?: string
	dataCyBeds?: string
	dataCyBaths?: string
	dataCyArea?: string
	dataCyAddressLine1?: string
	dataCyAddressLine2?: string
}

export default function CardListing(props: CardListingProps) {
	const beds = NumberUtils.toNumber(props.beds, 0)
	const baths = NumberUtils.toNumber(props.baths, 0)

	const dataCyImage = props.dataCyImage ?? "card-listing-image"
	const dataCyPrice = props.dataCyPrice ?? "card-listing-price"
	const dataCyBeds = props.dataCyBeds ?? "card-listing-beds"
	const dataCyBaths = props.dataCyBaths ?? "card-listing-baths"
	const dataCyArea = props.dataCyArea ?? "card-listing-area"
	const dataCyAddressLine1 = props.dataCyAddressLine1 ?? "card-listing-address-line1"
	const dataCyAddressLine2 = props.dataCyAddressLine2 ?? "card-listing-address-line2"

	return (
		<Link href={`/listing/${props.id}`}>
			<div className="w-80 cursor-pointer rounded-md bg-slate-50 p-0 shadow-md transition-all hover:shadow-xl">
				<Image
					className="h-3/5 w-full rounded-t-md object-cover"
					alt="Search"
					src={props.imgUrl}
					height={NumberUtils.toNumber(process.env.LISTING_CARD_PHOTO_WIDTH, 300)}
					width={NumberUtils.toNumber(process.env.LISTING_CARD_PHOTO_HEIGHT, 300)}
					data-cy={dataCyImage}
				/>
				<div className="grid grid-flow-row auto-rows-max gap-2 p-5">
					<header className="text-xl font-bold" data-cy={dataCyPrice}>
						{props.price}
					</header>
					<p className="text-base">
						<span data-cy={dataCyBeds}>
							<span className="font-bold">{beds}</span> bed{beds > 1 && "s"}
						</span>
						<span className="ml-3" data-cy={dataCyBaths}>
							<span className="font-bold">{baths}</span> bath{baths > 1 && "s"}
						</span>
						<span className="ml-3" data-cy={dataCyArea}>
							<span className="font-bold">{props.area}</span> sqm
						</span>
					</p>
					<p className="text-xs">
						<p data-cy={dataCyAddressLine1}>{props.addressLine1}</p>
						<p data-cy={dataCyAddressLine2}>{props.addressLine2}</p>
					</p>
				</div>
			</div>
		</Link>
	)
}

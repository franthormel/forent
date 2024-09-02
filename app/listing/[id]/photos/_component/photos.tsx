import ButtonSmallFilled from "@/components/buttons/small/filled";
import { NumberUtils } from "@/lib/commons/number_utils";
import Image from "next/image";
import Link from "next/link";

interface ListingPhotosProps {
	listingId: string
	imageUrls: string[]
	dataCy?: string
	dataCyHeader?: string
	dataCyBtn?: string
}

export default function ListingPhotos(props: ListingPhotosProps) {
	const listingPhotos = props.imageUrls.map((imageUrl, i) => {
		const index = i + 1
		return <Image alt={`Listing Photo Number #${index}`}
			src={imageUrl}
			key={`photo-${index}`}
			id={index.toString()}
			data-cy={`listing-photo-${index}`}
			width={NumberUtils.toNumber(process.env.LISTING_FULL_PHOTO_WIDTH, 1600)}
			height={NumberUtils.toNumber(process.env.LISTING_FULL_PHOTO_HEIGHT, 900)}
		/>
	})
	const listingUrl = `/listing/${props.listingId}`

	return (
		<div className="grid auto-rows-auto gap-y-12 md:gap-y-14 lg:gap-y-16 xl:gap-y-18">
			<div className="flex items-baseline justify-between gap-x-2 px-20 md:justify-around lg:justify-evenly">
				<header data-cy={props.dataCyHeader ?? "listing-photos-header"}
					className="font-medium text-xl">
					Photos
				</header>
				<Link href={listingUrl} data-cy="listing-photos-link">
					<ButtonSmallFilled text="Go to Listing"
						dataCy={props.dataCyBtn ?? "listing-photos-btn"} />
				</Link>
			</div>
			<div className="grid auto-rows-auto gap-6 md:gap-8 lg:gap-y-10 xl:gap-y-12 2xl:gap-y-14"
				data-cy={props.dataCy ?? "listing-photos"}>
				{listingPhotos}
			</div>
		</div >
	)
}
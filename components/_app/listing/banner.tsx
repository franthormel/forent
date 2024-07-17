import ListingBannerPhotos from "@/components/_app/listing/banner-photos";
import ButtonSmallOutlined from "@/components/buttons/small/outlined";
import { StringUtils } from "@/lib/commons/string_utils";
import Link from "next/link";

interface ListingBannerProps {
	imageUrls: string[]
	listingId: string
}

export default function ListingBanner(props: ListingBannerProps) {
	const btnText = StringUtils.pluralizeTextCount(props.imageUrls.length, "Photo");

	return (
		<div className="relative">
			<ListingBannerPhotos
				imageUrls={props.imageUrls}
				listingId={props.listingId} />
			<div className="absolute bottom-6 right-6">
				<Link data-cy="link-photos"
					href={`/listing/${props.listingId}/photos`}>
					<ButtonSmallOutlined dataCy="btn-photos"
						text={btnText} />
				</Link>
			</div>
		</div>
	)
}

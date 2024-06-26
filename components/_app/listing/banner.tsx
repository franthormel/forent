import ListingBannerPhotos from "@/components/_app/listing/banner-photos";
import ButtonLinkOutlined from "@/components/button-links/outlined";
import { StringUtils } from "@/lib/commons/string_utils";

interface ListingBannerProps {
	imageUrls: string[]
	listingId: string
}

export default function ListingBanner(props: ListingBannerProps) {
	return (
		<div className="relative">
			<ListingBannerPhotos
				imageUrls={props.imageUrls}
				listingId={props.listingId} />
			<div className="absolute bottom-6 right-6">
				<ButtonLinkOutlined
					dataCy="btn-photos"
					size="small"
					href={`/listing/${props.listingId}/photos`} // FUTURE: These must not be clickable if viewing in preview mode
					text={StringUtils.pluralizeTextCount(props.imageUrls.length, "Photo")} />
			</div>
		</div>
	)
}

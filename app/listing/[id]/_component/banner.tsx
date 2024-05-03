import ListingPagePhotos from "@/app/listing/[id]/_component/photos";
import ButtonLinkOutlined from "@/components/button-links/outlined";
import { StringUtils } from "@/lib/commons/string_utils";

interface ListingPageBannerProps {
	imageUrls: string[]
	listingId: string
}

export default function ListingPageBanner(props: ListingPageBannerProps) {
	return (
		<div className="relative">
			<ListingPagePhotos
				imageUrls={props.imageUrls}
				listingId={props.listingId} />
			<div className="absolute bottom-6 right-6">
				<ButtonLinkOutlined
					dataCy="btn-photos"
					size="small"
					href={`/listing/${props.listingId}/photos`}
					text={StringUtils.pluralizeTextCount(props.imageUrls.length, "Photo")} />
			</div>
		</div>
	)
}

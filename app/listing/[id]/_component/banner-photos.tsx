import { NumberUtils } from "@/lib/commons/number_utils";
import Image from "next/image";
import Link from "next/link";

interface ListingBannerPhotosProps {
    imageUrls: string[]
    listingId: string
}

export default function ListingBannerPhotos(props: ListingBannerPhotosProps) {
    const listingUrl = `/listing/${props.listingId}/photos#`
    const imageWidth = NumberUtils.toNumber(process.env.LISTING_COVER_PHOTO_WIDTH, 800)
    const imageHeight = NumberUtils.toNumber(process.env.LISTING_COVER_PHOTO_HEIGHT, 600)

    return (
        <div>
            {/* Single image (small & medium layouts) */}
            <Link href={`${listingUrl}1`}
                data-cy="listing-sm-md-photo-1-link">
                <Image alt="Listing cover photo" src={props.imageUrls[0]}
                    width={imageWidth} height={imageHeight}
                    data-cy="listing-sm-md-photo-1"
                    className="h-80 rounded-md transition-shadow hover:cursor-pointer hover:shadow-xl md:h-96 lg:hidden" />
            </Link>
            {/* Image grid (larger layouts) */}
            <div className="row-auto hidden grid-cols-2 gap-4 lg:grid">
                <Link href={`${listingUrl}1`}
                    data-cy="listing-lg-photo-1-link">
                    <Image alt="Listing cover photo #1" src={props.imageUrls[0]}
                        width={imageWidth} height={imageHeight}
                        data-cy="listing-lg-photo-1"
                        className="h-full rounded-l-md transition-shadow hover:cursor-pointer hover:shadow-xl" />
                </Link>
                <div className="grid grid-cols-2 grid-rows-2 gap-4">
                    <Link href={`${listingUrl}2`}
                        data-cy="listing-lg-photo-2-link">
                        <Image alt="Listing cover photo #2" src={props.imageUrls[1]}
                            width={imageWidth} height={imageHeight}
                            data-cy="listing-lg-photo-2"
                            className="h-full transition-shadow hover:cursor-pointer hover:shadow-xl" />
                    </Link>
                    <Link href={`${listingUrl}3`}
                        data-cy="listing-lg-photo-3-link">
                        <Image alt="Listing cover photo #3" src={props.imageUrls[2]}
                            width={imageWidth} height={imageHeight}
                            data-cy="listing-lg-photo-3"
                            className="h-full rounded-tr-md transition-shadow hover:cursor-pointer hover:shadow-xl" />
                    </Link>
                    <Link href={`${listingUrl}4`}
                        data-cy="listing-lg-photo-4-link">
                        <Image alt="Listing cover photo #4" src={props.imageUrls[3]}
                            width={imageWidth} height={imageHeight}
                            data-cy="listing-lg-photo-4"
                            className="h-full transition-shadow hover:cursor-pointer hover:shadow-xl" />
                    </Link>
                    <Link href={`${listingUrl}5`}
                        data-cy="listing-lg-photo-5-link">
                        <Image alt="Listing cover photo #5" src={props.imageUrls[4]}
                            width={imageWidth} height={imageHeight}
                            data-cy="listing-lg-photo-5"
                            className="h-full rounded-br-md transition-shadow hover:cursor-pointer hover:shadow-xl" />
                    </Link>
                </div>
            </div>
        </div >
    )
}

import Image from "next/image";
import Link from "next/link";

interface ListingPagePhotosProps {
    imageUrls: string[]
    listingId: string
    dataCy?: string
}

export default function ListingPagePhotos(props: ListingPagePhotosProps) {
    const listingUrl = `/listing/${props.listingId}/photos#`

    return (
        <div data-cy={props.dataCy ?? "listing-photos"}>
            {/* Single image (small & medium layouts) */}
            <Link href={`${listingUrl}1`}>
                <Image alt="Listing cover photo" src={props.imageUrls[0]}
                    width="800" height="600" // TODO: Use env for image dimensions
                    className="h-80 rounded-md transition-shadow hover:cursor-pointer hover:shadow-xl md:h-96 lg:hidden" />
            </Link>
            {/* Image grid (larger layouts) */}
            <div className="row-auto hidden grid-cols-2 gap-4 lg:grid">
                {/* TODO: Display photo viewer from the start when clicked */}
                <Link href={`${listingUrl}1`}>
                    <Image alt="Listing cover photo #1" src={props.imageUrls[0]}
                        width="800" height="600" // TODO: Use env for image dimensions
                        className="h-full rounded-l-md transition-shadow hover:cursor-pointer hover:shadow-xl" />
                </Link>
                {/* TODO: Display photo viewer on which index was clicked, use # ids */}
                <div className="grid grid-cols-2 grid-rows-2 gap-4">
                    <Link href={`${listingUrl}2`}>
                        <Image alt="Listing cover photo #2" src={props.imageUrls[1]}
                            width="800" height="600" // TODO: Use env for image dimensions
                            className="h-full transition-shadow hover:cursor-pointer hover:shadow-xl" />
                    </Link>
                    <Link href={`${listingUrl}3`}>
                        <Image alt="Listing cover photo #3" src={props.imageUrls[2]}
                            width="800" height="600" // TODO: Use env for image dimensions
                            className="h-full rounded-tr-md transition-shadow hover:cursor-pointer hover:shadow-xl" />
                    </Link>
                    <Link href={`${listingUrl}4`}>
                        <Image alt="Listing cover photo #4" src={props.imageUrls[3]}
                            width="800" height="600" // TODO: Use env for image dimensions
                            className="h-full transition-shadow hover:cursor-pointer hover:shadow-xl" />
                    </Link>
                    <Link href={`${listingUrl}5`}>
                        <Image alt="Listing cover photo #5" src={props.imageUrls[4]}
                            width="800" height="600" // TODO: Use env for image dimensions
                            className="h-full rounded-br-md transition-shadow hover:cursor-pointer hover:shadow-xl" />
                    </Link>
                </div>
            </div>
        </div >
    )
}

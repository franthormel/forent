import Image from "next/image";

interface ListingPagePhotosProps {
    imageUrls: string[]
    dataCy?: string
}

export default function ListingPagePhotos(props: ListingPagePhotosProps) {
    return (
        <div data-cy={props.dataCy ?? "listing-photos"}>
            {/* TODO: Display photo viewer from the start when clicked */}
            {/* Single image (small & medium layouts) */}
            <Image alt="Listing cover phot" src={props.imageUrls[0]}
                width="800" height="600"
                className="h-80 rounded-md md:h-96 lg:hidden" />
            {/* Image grid (larger layouts) */}
            <div className="row-auto hidden grid-cols-2 gap-4 lg:grid">
                {/* TODO: Display photo viewer from the start when clicked */}
                <Image alt="Listing cover phot" src={props.imageUrls[0]}
                    width="800" height="600"
                    className="h-full rounded-l-md" />
                {/* TODO: Display photo viewer on which index was clicked */}
                <div className="grid grid-rows-2 grid-cols-2 gap-4">
                    <Image alt="Listing cover phot" src={props.imageUrls[1]}
                        width="800" height="600"
                        className="h-full" />
                    <Image alt="Listing cover phot" src={props.imageUrls[2]}
                        width="800" height="600"
                        className="h-full rounded-tr-md" />
                    <Image alt="Listing cover phot" src={props.imageUrls[3]}
                        width="800" height="600"
                        className="h-full" />
                    <Image alt="Listing cover phot" src={props.imageUrls[4]}
                        width="800" height="600"
                        className="h-full rounded-br-md" />
                </div>
            </div>
        </div>
    )
}

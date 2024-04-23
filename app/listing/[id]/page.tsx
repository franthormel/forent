import prisma from "@/lib/db";
import ListingPagePhotos from "../_component/photos";

export default async function ListingPage({ params }: { params: { id: string } }) {
    const listing = await prisma.listing.findUniqueOrThrow({
        where: {
            id: params.id
        }
    })

    // TODO: Remove after all display is done
    console.log(listing)

    return (
        // TODO: Display photo viewer when clicked
        <div className="px-24 lg:px-32 xl:px-36 2xl:px-44">
            {/* Photos */}
            <ListingPagePhotos imageUrls={listing.imageUrls} />
        </div>
        // TODO: Display a button inside
        // <ButtonOutlined dataCyBtn="btn-photos" size="small"
        // text={StringUtils.pluralize(listing.imageUrls.length, "Photo")} />
    )

    // TODO: Display Main information (price, beds, baths, availability date, area, address)


    // TODO: Display Contact


    // TODO: Display Description


    // TODO: Display Map
}

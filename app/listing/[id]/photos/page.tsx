import prisma from "@/lib/db";
import ListingPhotos from "./_component/photos";

export default async function ListingPhotosPage({ params }: { params: { id: string } }) {
    const listing = await prisma.listing.findUniqueOrThrow({
        where: {
            id: params.id
        },
    })

    return <ListingPhotos listingId={listing.id} imageUrls={listing.imageUrls} />
}

import ButtonOutlined from "@/components/buttons/outlined";
import prisma from "@/lib/db"
import Image from "next/image";
import { StringUtils } from "@/lib/commons/string_utils";

export default async function ListingPage({ params }: { params: { id: string } }) {
    const listing = await prisma.listing.findUniqueOrThrow({
        where: {
            id: params.id
        }
    })
    const manyPhotos = listing.imageUrls.length > 3;

    // TODO: Remove after all display is done
    console.log(listing)

    // TODO: Display photos
    // TODO: If there are at least 3 photos, display 1 if less than 3
    return (
        <div className="px-24">
            {/* Photos */}
            <div>
                {/* TODO: adjust for lg layouts */}
                <Image alt="Listing cover phot" src={listing.imageUrls[0]}
                    width="800" height="600"
                    className="w-full" />
                {/* TODO: Position button inside */}
                {/* TODO: Make button smaller ;> */}
                <ButtonOutlined dataCyBtn="btn-photos" size="small"
                    text={StringUtils.pluralize(listing.imageUrls.length, "Photo")} />
            </div>
        </div>
    )

    // TODO: Display Main information (price, beds, baths, availability date, area, address)


    // TODO: Display Contact


    // TODO: Display Description


    // TODO: Display Map
}

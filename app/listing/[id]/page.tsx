import ButtonOutlined from "@/components/buttons/outlined";
import { StringUtils } from "@/lib/commons/string_utils";
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
        <div className="px-24 lg:px-32 xl:px-36 2xl:px-44">
            {/* Photos */}
            <div className="relative">
                <ListingPagePhotos imageUrls={listing.imageUrls} />
                <div className="absolute bottom-6 right-6">
                    {/* TODO: Display photo viewer from the start when clicked */}
                    <ButtonOutlined dataCyBtn="btn-photos" size="small"
                        text={StringUtils.pluralize(listing.imageUrls.length, "Photo")} />
                </div>
            </div>
        </div>
    )

    // TODO: Display Main information (price, beds, baths, availability date, area, address)


    // TODO: Display Contact


    // TODO: Display Description


    // TODO: Display Map
}

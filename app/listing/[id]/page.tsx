import ButtonLinkOutlined from "@/components/button-links/outlined";
import { StringUtils } from "@/lib/commons/string_utils";
import prisma from "@/lib/db";
import ListingPageContact from "../_component/contact";
import ListingPageDescription from "../_component/description";
import ListingPageMainInfo from "../_component/main-info";
import ListingPageMap from "../_component/map";
import ListingPagePhotos from "../_component/photos";

export default async function ListingPage({ params }: { params: { id: string } }) {
    const listing = await prisma.listing.findUniqueOrThrow({
        where: {
            id: params.id
        },
        include: {
            address: true,
            prices: true,
            user: true,
        }
    })
    const currentPrice = listing.prices.filter((p) => p.isCurrent).at(0)!.value;

    return (
        <div className="grid auto-rows-auto gap-y-16 px-24 lg:px-32 xl:px-36 2xl:px-44">
            {/* Photos & main information */}
            <div className="grid auto-rows-auto gap-y-11">
                <div className="relative">
                    <ListingPagePhotos imageUrls={listing.imageUrls} />
                    <div className="absolute bottom-6 right-6">
                        <ButtonLinkOutlined dataCy="btn-photos" size="small" href={`/listing/${params.id}/photos`}
                            text={StringUtils.pluralizeTextCount(listing.imageUrls.length, "Photo")} />
                    </div>
                </div>
                <ListingPageMainInfo price={currentPrice.toNumber()} beds={listing.beds} baths={listing.baths}
                    area={listing.area.toNumber()} availableDate={listing.availableDate}
                    addressLine={listing.address!.addressLine} city={listing.address!.city}
                    state={listing.address!.state} zipCode={listing.address!.zipcode} />
            </div>
            <ListingPageContact name={listing.user.name} contactNumber={listing.user.contactNumber} email={listing.user.email} />
            <ListingPageDescription description={listing.description} />
            <ListingPageMap lat={listing.address!.latitude.toNumber()} lon={listing.address!.longitude.toNumber()} />
        </div>
    )
}

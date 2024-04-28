import ButtonOutlined from "@/components/buttons/outlined";
import { StringUtils } from "@/lib/commons/string_utils";
import prisma from "@/lib/db";
import ListingPageMainInfo from "../_component/main-info";
import ListingPagePhotos from "../_component/photos";
import SectionHeaderIcon from "@/components/section/header-icon";
import ListingPageContact from "../_component/contact";

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
    // NOTE: This will fail if there is no current price
    const currentPrice = listing.prices.filter((p) => p.isCurrent).at(0)!.value;

    // TODO: Remove after all display is done
    console.log(listing)

    return (
        <div className="grid auto-rows-auto gap-y-16 px-24 lg:px-32 xl:px-36 2xl:px-44">
            {/* Photos & main information */}
            <div className="grid auto-rows-auto gap-y-11">
                <div className="relative">
                    <ListingPagePhotos imageUrls={listing.imageUrls} />
                    <div className="absolute bottom-6 right-6">
                        {/* TODO: Display photo viewer from the start when clicked */}
                        <ButtonOutlined dataCyBtn="btn-photos" size="small"
                            text={StringUtils.pluralizeTextCount(listing.imageUrls.length, "Photo")} />
                    </div>
                </div>
                <ListingPageMainInfo price={currentPrice.toNumber()} beds={listing.beds} baths={listing.baths}
                    area={listing.area.toNumber()} availableDate={listing.availableDate}
                    addressLine={listing.address!.addressLine} city={listing.address!.city}
                    state={listing.address!.state} zipCode={listing.address!.zipcode} />
            </div>
            <ListingPageContact name={listing.user.name} contactNumber={listing.user.contactNumber} email={listing.user.email} />
        </div>
    )

    // TODO: Display Description


    // TODO: Display Map
}

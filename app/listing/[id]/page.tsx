import PageLayout from "@/app/_component/page-layout";
import prisma from "@/lib/db";
import ListingPageBanner from "./_component/banner";
import ListingPageContact from "./_component/contact";
import ListingPageDescription from "./_component/description";
import ListingPageMainInfo from "./_component/main-info";
import ListingPageMap from "./_component/map";

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
        <PageLayout>
            {/* Photos & main information */}
            <div className="grid auto-rows-auto gap-y-11">
                <ListingPageBanner imageUrls={listing.imageUrls} listingId={listing.id} />
                <ListingPageMainInfo price={currentPrice.toNumber()} beds={listing.beds} baths={listing.baths}
                    area={listing.area.toNumber()} availableDate={listing.availableDate}
                    addressLine={listing.address!.addressLine} city={listing.address!.city}
                    state={listing.address!.state} zipCode={listing.address!.zipcode} />
            </div>
            <ListingPageContact name={listing.user.name} contactNumber={listing.user.contactNumber} email={listing.user.email} />
            <ListingPageDescription description={listing.description} />
            <ListingPageMap lat={listing.address!.latitude.toNumber()} lon={listing.address!.longitude.toNumber()} />
        </PageLayout>
    )
}

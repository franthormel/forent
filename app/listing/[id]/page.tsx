import PageLayout from "@/app/_component/page-layout";
import prisma from "@/lib/db";
import ListingBanner from "./_component/banner";
import ListingContact from "./_component/contact";
import ListingDescription from "./_component/description";
import ListingMainInfo from "./_component/main-info";
import ListingMap from "./_component/map";

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
                <ListingBanner imageUrls={listing.imageUrls} listingId={listing.id} />
                <ListingMainInfo price={currentPrice.toNumber()} beds={listing.beds} baths={listing.baths}
                    area={listing.area.toNumber()} availableDate={listing.availableDate}
                    addressLine={listing.address!.addressLine} city={listing.address!.city}
                    state={listing.address!.state} zipCode={listing.address!.zipcode} />
            </div>
            <ListingContact name={listing.user.name} contactNumber={listing.user.contactNumber} email={listing.user.email} />
            <ListingDescription description={listing.description} />
            <ListingMap lat={listing.address!.latitude.toNumber()} lon={listing.address!.longitude.toNumber()} />
        </PageLayout>
    )
}

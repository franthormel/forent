import ListingBanner from "@/components/_app/listing/banner";
import ListingContact from "@/components/_app/listing/contact";
import ListingDescription from "@/components/_app/listing/description";
import ListingMainInfo from "@/components/_app/listing/main-info";
import ListingMap from "@/components/_app/listing/map";
import PageLayout from "@/components/_app/page-layout";
import prisma from "@/lib/db";

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
        // TODO: Convert this into another component so it can be reused in the Preview page
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

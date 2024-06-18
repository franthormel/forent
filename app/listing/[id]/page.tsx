import Listing from "@/components/_app/listing";
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
    const currentPrice = listing.prices.filter((p) => p.isCurrent).at(0)!.value.toNumber();

    return (
        <Listing id={listing.id}
            imageUrls={listing.imageUrls}
            price={currentPrice}
            deposit={listing.deposit?.toNumber()}
            beds={listing.beds}
            baths={listing.baths}
            area={listing.area.toNumber()}
            availableDate={listing.availableDate}
            addressLine={listing.address!.addressLine}
            city={listing.address!.city}
            state={listing.address!.state}
            zipCode={listing.address!.zipcode}
            name={listing.user.name}
            contactNumber={listing.user.contactNumber}
            email={listing.user.email}
            description={listing.description}
            latitude={listing.address!.latitude.toNumber()}
            longitude={listing.address!.longitude.toNumber()}
        />
    )
}

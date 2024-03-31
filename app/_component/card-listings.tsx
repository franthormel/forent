import CardListing from "@/components/card-listing";
import prisma from "@/lib/db";

interface CardListingsProps {
    dataCy?: string
}

export default async function CardListings(props: CardListingsProps) {
    // Take four (4) listings
    const dbListings = await prisma.listing.findMany({ take: 4 })

    if (dbListings.length === 0) {
        return null;
    }

    // Transform those four (4) listings into components
    const cardListings = dbListings.map(async listing => {
        // Fetch the listing's address
        const address = await prisma.address.findUnique({
            where: {
                listingId: listing.id
            }
        })
        // Fetch the listing's current price value
        const prices = await prisma.price.findMany({
            where: {
                listingId: listing.id,
            }
        })
        const currentPrice = prices.filter(price => price.isCurrent).at(0);

        return <CardListing
            key={crypto.randomUUID()}
            addressLine1={address!.addressLine}
            addressLine2={`${address!.city}, ${address!.state}`}
            area={listing.area.toString()}
            baths={listing.baths}
            beds={listing.beds}
            imgUrl={listing.imageUrls[0]}
            price={`$ ${currentPrice!.value}`}
        />
    })

    return (
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 2xl:grid-cols-4"
            data-cy={props.dataCy}>
            {cardListings}
        </div>
    )
}

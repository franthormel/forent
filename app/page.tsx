import Button from '@/components/button'
import CardListing from '@/components/card-listing'
import Search from '@/components/search'
import prisma from '@/lib/db'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rent Property | Forent',
  description: 'Forent is a convenient platform for rental properties for you! Start exploring and find your ideal rental today!',
  keywords: ['apartment', 'forent', 'lease', 'property', 'rent',],
  authors: { name: 'franthormel', url: 'mailto:fcaboyo@gmail.com' },
  creator: 'franthormel',
  publisher: 'franthormel',
}

export default async function Home() {
  // Take four (4) listings
  const dbListings = await prisma.listing.findMany({ take: 4 })

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
    <div className='grid grid-flow-row auto-rows-auto gap-24'>
      <div className="bg-[url('/home.jpg')] bg-cover bg-center">
        <div className="grid h-96 w-full grid-flow-row auto-rows-max gap-5 bg-gray-800/30 px-20 pt-20">
          <header className='text-8xl text-slate-50'>Renting made simple</header>
          <Search placeholder='Search for an address' />
        </div>
      </div>
      <div className='grid auto-cols-min grid-flow-col justify-center gap-12'>
        {cardListings}
      </div>
      <div className='grid justify-center'>
        <Button text='View more listings' />
      </div>
    </div >
  )
}

// todo: e2e test

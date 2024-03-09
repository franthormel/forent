import Button from '@/components/button';
import CardListing, { CardListingProps } from '@/components/card-listing';
import { Metadata } from 'next';
import Image from 'next/image';
import bacgkroundImage from '../public/home.jpg';
import Search from '@/components/search';

export const metadata: Metadata = {
  title: 'Rent Property | Forent',
}

const listings: CardListingProps[] = [
  {
    addressLine1: 'Carmelray Industrial Park II, Brgy. Punto',
    addressLine2: 'Calamba, Laguna',
    area: '95',
    baths: '3',
    beds: '4',
    imgUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '₱ 96,400/mo',
  },
  {
    addressLine1: 'Carmelray Industrial Park II, Brgy. Punto',
    addressLine2: 'Calamba, Laguna',
    area: '95',
    baths: '3',
    beds: '4',
    imgUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '₱ 96,400/mo',
  },
  {
    addressLine1: 'Carmelray Industrial Park II, Brgy. Punto',
    addressLine2: 'Calamba, Laguna',
    area: '95',
    baths: '3',
    beds: '4',
    imgUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '₱ 96,400/mo',
  },
  {
    addressLine1: 'Carmelray Industrial Park II, Brgy. Punto',
    addressLine2: 'Calamba, Laguna',
    area: '95',
    baths: '3',
    beds: '4',
    imgUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '₱ 96,400/mo',
  },
]

export default function Home() {
  const cardListings = listings.map(listing => {
    return <CardListing
      key={crypto.randomUUID()}
      addressLine1={listing.addressLine1}
      addressLine2={listing.addressLine2}
      area={listing.area}
      baths={listing.baths}
      beds={listing.beds}
      imgUrl={listing.imgUrl}
      price={listing.price}
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
  );
}

// todo:
// 1. get listings from actual data
// 2. metadata do not forget
// 3. e2e

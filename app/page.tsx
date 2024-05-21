import ButtonFilled from '@/components/buttons/filled'
import Search from '@/components/search'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'

export const metadata: Metadata = {
  title: 'Rent Property | Forent',
  description: 'Forent is a convenient platform for rental properties for you! Start exploring and find your ideal rental today!',
  keywords: ['apartment', 'forent', 'lease', 'property', 'rent',],
  authors: { name: 'franthormel', url: 'mailto:fcaboyo@gmail.com' },
  creator: 'franthormel',
  publisher: 'franthormel',
}

const CardListings = dynamic(() => import('./_component/card-listings'), { ssr: false })

export default function Home() {
  return (
    <div className='grid grid-flow-row auto-rows-auto gap-24 w-full'>
      {/* Background image with searchbar & tagline */}
      <div className="bg-[url('/home.jpg')] bg-cover bg-center">
        <div className="grid gap-5 bg-gray-800/30 p-20">
          <header className='text-6xl text-slate-50 lg:text-left md:text-7xl lg:text-8xl'
            data-cy="header-main">
            Renting made simple
          </header>
        </div>
      </div>
      <div className='place-self-center'>
        <CardListings dataCy='card-listings' />
      </div>
      {/* Button */}
      <div className='grid justify-center'>
        <ButtonFilled text='View more listings' dataCy='btn-view-listings' />
      </div>
    </div >
  )
}

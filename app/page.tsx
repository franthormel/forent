import Button from '@/components/button'
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
    <div className='grid grid-flow-row auto-rows-auto gap-24'>
      <div className="bg-[url('/home.jpg')] bg-cover bg-center">
        <div className="grid h-96 w-full grid-flow-row auto-rows-max gap-5 bg-gray-800/30 px-20 pt-20">
          <header className='text-8xl text-slate-50'>Renting made simple</header>
          <Search placeholder='Search for an address' />
        </div>
      </div>
      <CardListings />
      <div className='grid justify-center'>
        {/* TODO: Make button router or link */}
        <Button text='View more listings' />
      </div>
    </div >
  )
}
// todo: e2e test

import ButtonRouter from '@/components/button-router/ButtonRouter';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rent Property | Forent',
}

export default function Home() {
  return <div className='flex flex-row gap-4'>
    <ButtonRouter route='/listings' text='View Listings' />
    <ButtonRouter route='/listings/create' text='Create a Listing' color='tertiary' />
  </div>;
}

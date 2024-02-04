import RouterButton from '@/components/ui/button/RouterButton';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rent Property | Forent',
}

export default function Home() {
  return <div className='flex flex-row gap-4'>
    <RouterButton route='/listings' text='View Listings' />
    <RouterButton route='/listings/create' text='Create a Listing' color='tertiary' />
  </div>;
}

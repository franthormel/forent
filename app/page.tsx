import NavigationMenu from '@/components/home/NavigationMenu';
import RouterButton from '@/components/ui/buttons/RouterButton';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rent Property | Forent',
}

export default function Home() {
  return (
    <main className='flex flex-col gap-5'>
      <NavigationMenu />
      <div>
        <RouterButton route='#' text='Create Post' />
      </div>
    </main>
  );
}

// TODO: Display profile when logged in

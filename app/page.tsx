import AuthenticationWrapper from '@/components/AuthenticationWrapper';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rent Property | Forent',
}

export default function Home() {
  return (
    <main className='flex flex-col space-y-4'>
      <header className='text-5xl'>Forent</header>
      <AuthenticationWrapper />
    </main>
  );
}

// TODO: Display profile when logged in

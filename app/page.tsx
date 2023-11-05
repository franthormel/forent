import { Metadata } from 'next';
import AuthenticationWrapper from '@/components/AuthenticationWrapper';

export const metadata: Metadata = {
  title: 'Homepage | Forent',
  description: 'Homepage',
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

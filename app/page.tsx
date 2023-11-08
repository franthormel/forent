import AuthenticationWrapper from '@/components/AuthenticationWrapper';
import LogoHeader from '@/components/LogoHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rent Property | Forent',
}

export default function Home() {
  return (
    <main className='flex flex-col space-y-4'>
      <LogoHeader />
      <AuthenticationWrapper />
    </main>
  );
}

// TODO: Display profile when logged in

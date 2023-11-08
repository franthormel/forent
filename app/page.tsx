import AuthenticationWrapper from '@/components/AuthenticationWrapper';
import { Metadata } from 'next';
import LogoHeader from '@/components/LogoHeader';

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

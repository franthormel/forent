import { Metadata } from 'next';
import LinkButton from '@/components/LinkButton';

export const metadata: Metadata = {
  title: 'Homepage | Forent',
  description: 'Homepage',
}

export default function Home() {
  return (
    <main className='flex flex-col space-y-4'>
      <header className='text-5xl'>Forent</header>
      <LinkButton href="/api/auth/signin" text='Sign In' />
    </main>
  );
}

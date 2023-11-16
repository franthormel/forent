import NavigationMenu from '@/components/NavigationMenu';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rent Property | Forent',
}

export default function Home() {
  return (
    <main>
      <NavigationMenu />
    </main>
  );
}

// TODO: Display profile when logged in

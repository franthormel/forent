import LinkButton from '@/components/LinkButton';

export default function Home() {

  return (
    <main className='flex flex-col space-y-4'>
      <h1 className='text-5xl font-bold'>Forent</h1>
      <LinkButton href="/sign-in" text='Sign In' />
    </main>
  );
}

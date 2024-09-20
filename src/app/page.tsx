import Header from './components/typography/Header';

export default function Home() {
  return (
    <main className='h-full w-full bg-dark-2 text-fg p-7'>
      <div>
        <Header size='h2'>Jeb Wilfred Panganiban</Header>
        <Header size='h4'>Software Engineer</Header>
      </div>
      <div>
        <Header size='h5'>About</Header>
      </div>
    </main>
  );
}

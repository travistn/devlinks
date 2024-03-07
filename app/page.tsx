import Navbar from '@/components/Navbar';
import GetStarted from '@/components/GetStarted';

export default function Home() {
  return (
    <main className='bg-very-light-gray min-h-screen'>
      <Navbar />
      <GetStarted />
    </main>
  );
}

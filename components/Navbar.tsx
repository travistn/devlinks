import Link from 'next/link';
import Image from 'next/image';

import link from '../public/assets/icon-links-header-violet.svg';
import logo from '../public/assets/logo-devlinks-small.svg';
import profile_details from '../public/assets/icon-profile-details-header.svg';
import icon_preview from '../public/assets/icon-preview-header.svg';

export default function Navbar() {
  return (
    <nav className='w-full py-4 pl-6 pr-4 rounded-xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'>
      <ul className='flex flex-row justify-between items-center'>
        <Link href='/'>
          <Image src={logo} alt='logo' />
        </Link>
        <div className='flex flex-row'>
          <Link href='/' className='bg-light-lavender py-[11px] px-[27px] rounded-lg'>
            <Image src={link} alt='link' />
          </Link>
          <Link href='/' className='py-[11px] px-[27px] rounded-lg'>
            <Image src={profile_details} alt='profile-details' />
          </Link>
        </div>
        <Link href='/' className='py-[11px] px-4 border border-violet rounded-lg'>
          <Image src={icon_preview} alt='icon-preview' />
        </Link>
      </ul>
    </nav>
  );
}

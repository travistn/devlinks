import Link from 'next/link';
import Image from 'next/image';

import link from '../public/assets/icon-links-header-violet.svg';
import logo from '../public/assets/logo-devlinks-small.svg';
import large_logo from '../public/assets/logo-devlinks-large.svg';
import profile_details from '../public/assets/icon-profile-details-header.svg';
import icon_preview from '../public/assets/icon-preview-header.svg';

export default function Navbar() {
  return (
    <nav className='w-full py-4 pl-6 pr-4 max-sm:rounded-xl max-sm:shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] md:p-6 md:bg-very-light-gray'>
      <ul className='flex flex-row justify-between items-center md:py-4 md:pl-6 md:pr-4 md:rounded-xl bg-white'>
        <Link href='/'>
          <Image src={logo} alt='logo' className='md:hidden' />
          <Image src={large_logo} alt='logo' className='max-sm:hidden w-[146px]' />
        </Link>
        <div className='flex flex-row'>
          <Link
            href='/'
            className='bg-light-lavender py-[11px] px-[27px] rounded-lg flex items-center gap-2'>
            <Image src={link} alt='link' />
            <span className='max-sm:hidden text-violet font-semibold leading-6'>Links</span>
          </Link>
          <Link href='/' className='py-[11px] px-[27px] rounded-lg flex items-center gap-2'>
            <Image src={profile_details} alt='profile-details' />
            <span className='max-sm:hidden text-gray font-semibold leading-6'>Profile Details</span>
          </Link>
        </div>
        <Link href='/' className='py-[11px] px-4 border border-violet rounded-lg md:px-[27px]'>
          <Image src={icon_preview} alt='icon-preview' className='md:hidden' />
          <span className='max-sm:hidden text-violet font-semibold leading-6'>Preview</span>
        </Link>
      </ul>
    </nav>
  );
}

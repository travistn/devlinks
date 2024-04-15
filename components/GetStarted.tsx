'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

import LinkCard from './LinkCard';
import { UserProps } from '@/types';
import illustration_image from '../public/assets/illustration-empty.svg';
import illustration_image_mockup from '../public/assets/illustration-phone-mockup.svg';

export default function GetStarted() {
  const [linkToggle, setLinkToggle] = useState(false);
  const [user, setUser] = useState<UserProps>();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/user', {
        method: 'GET',
      });
      const data = await response.json();

      setUser(data[0]);
    };
    fetchUsers();
  }, []);

  // console.log(user);

  return (
    <section className='p-4 lg:grid grid-cols-7 gap-6'>
      <div className='max-lg:hidden bg-white pt-[53.5px] pr-[24.5px] pb-[43.5px] pl-[23.5px] w-full flex items-center justify-center rounded-lg col-span-3'>
        <Image src={illustration_image_mockup} alt='illustration-image-mockup' />
      </div>
      <div className='bg-white flex flex-col p-6 rounded-xl col-span-4 md:p-10'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-[24px] font-bold text-dark-gray md:text-[32px]'>
            Customize your links
          </h2>
          <p className='text-gray'>
            Add/edit/remove links below and then share all your profiles with the world!
          </p>
        </div>
        <button
          className='rounded-lg py-[11px] px-[27px] border border-violet text-violet font-semibold mt-10 hover:bg-light-lavender'
          onClick={() => (!linkToggle ? setLinkToggle((prevState) => !prevState) : '')}>
          + Add new link
        </button>
        {user?.links.length === 0 && !linkToggle ? (
          <div className='bg-very-light-gray mt-6 px-5 py-11 flex flex-col items-center gap-6 rounded-xl'>
            <Image
              src={illustration_image}
              alt='illustration-image'
              className='w-[124.8px] md:w-[249.5px]'
            />
            <h3 className='text-[24px] text-dark-gray font-bold md:text-[32px]'>
              Let’s get you started
            </h3>
            <p className='text-gray text-center md:px-16'>
              Use the “Add new link” button to get started. Once you have more than one link, you
              can reorder and edit them. We’re here to help you share your profiles with everyone!
            </p>
          </div>
        ) : (
          user?.links.map((link) => <LinkCard link={link} key={link._id} newLinkCard={false} />)
        )}
        {linkToggle && <LinkCard user={user as UserProps} newLinkCard={true} />}
      </div>
    </section>
  );
}

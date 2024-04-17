import { useState } from 'react';
import Image from 'next/image';

import PlatformSelect from './PlatformSelect';
import drag_and_drop_icon from '../public/assets/icon-drag-and-drop.svg';
import link_icon from '../public/assets/icon-link.svg';
import data from '../data.json';
import { UserProps, LinkProps } from '@/types';

type LinkCardProps = {
  user?: UserProps;
  link?: LinkProps;
  newLinkCard: boolean;
  setLinkToggle?: (linkToggle: boolean) => void;
};

export default function LinkCard({ user, link, newLinkCard, setLinkToggle }: LinkCardProps) {
  const [selectedPlatform, setSelectedPlatform] = useState(data[0]);

  const createLink = async () => {
    try {
      await fetch('/api/link/new', {
        method: 'POST',
        body: JSON.stringify({
          platform: selectedPlatform.name,
          url: selectedPlatform.link,
          user_id: user?._id,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteLink = async () => {
    try {
      await fetch(`/api/link/${link?._id}`, {
        method: 'DELETE',
        body: JSON.stringify({
          _id: link?._id,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaveClick = () => {
    createLink();
    setLinkToggle?.(false);
  };

  return (
    <div className='flex flex-col gap-3 bg-very-light-gray rounded-xl p-5 mt-6'>
      <div className='w-full flex flex-row justify-between items-center'>
        <div className='flex flex-row items-center gap-2'>
          <Image src={drag_and_drop_icon} alt='drag-and-drop-icon' />
          <h3 className='text-gray font-bold'>Link #1</h3>
        </div>
        <p className='text-gray lg:hover:cursor-pointer lg:hover:underline' onClick={deleteLink}>
          Remove
        </p>
      </div>
      <div className='flex flex-col gap-1'>
        <h4 className='text-[12px] text-dark-gray'>Platform</h4>
        <PlatformSelect
          selectedPlatform={selectedPlatform}
          setSelectedPlatform={setSelectedPlatform}
        />
      </div>
      <div className='flex flex-col gap-1'>
        <h4 className='text-[12px] text-dark-gray'>Link</h4>
        <div className='bg-white rounded-lg border border-light-gray py-3 px-4 flex flex-row gap-3 select-none lg:px-6 hover:shadow-[0_0px_32px_0_rgba(99,60,255,0.25)] hover:border hover:border-violet hover:cursor-pointer focus-within:border focus-within:border-violet focus-within:shadow-[0_0px_32px_0_rgba(99,60,255,0.25)]'>
          <Image src={link_icon} alt='link-icon' />
          <input
            type='text'
            className='text-dark-gray outline-none w-full'
            value={newLinkCard ? selectedPlatform.link : link?.url}
            onChange={(e) => setSelectedPlatform({ ...selectedPlatform, link: e.target.value })}
          />
        </div>
      </div>
      <button
        className='mt-4 py-[11px] px-[27px] bg-violet/25 rounded-lg font-semibold text-white md:w-[91px] md:ml-auto lg:hover:bg-lavendar lg:hover:shadow-[0_4px_32px_0_rgba(99,60,250,0.25)]'
        type='submit'
        onClick={() => (newLinkCard ? handleSaveClick() : '')}>
        Save
      </button>
    </div>
  );
}

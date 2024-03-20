import { useState } from 'react';
import Image from 'next/image';

import PlatformSelect from './PlatformSelect';
import drag_and_drop_icon from '../public/assets/icon-drag-and-drop.svg';
import link_icon from '../public/assets/icon-link.svg';
import data from '../data.json';

export default function LinkCard() {
  const [selectedPlatform, setSelectedPlatform] = useState(data[0]);

  return (
    <div className='flex flex-col gap-3 bg-very-light-gray rounded-xl p-5 mt-6'>
      <div className='w-full flex flex-row justify-between items-center'>
        <div className='flex flex-row items-center gap-2'>
          <Image src={drag_and_drop_icon} alt='drag-and-drop-icon' />
          <h3 className='text-gray font-bold'>Link #1</h3>
        </div>
        <p className='text-gray'>Remove</p>
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
            value={selectedPlatform.link}
          />
        </div>
      </div>
    </div>
  );
}

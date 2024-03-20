import { useState } from 'react';
import Image from 'next/image';
import { Listbox } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

import data from '../data.json';
import { PlatformProps } from '@/types';

type PlatformSelectProps = {
  selectedPlatform: PlatformProps;
  setSelectedPlatform: (platform: PlatformProps) => void;
};

export default function PlatformSelect({
  selectedPlatform,
  setSelectedPlatform,
}: PlatformSelectProps) {
  const [selectIsOpen, setSelectIsOpen] = useState(false);

  return (
    <Listbox value={selectedPlatform} onChange={setSelectedPlatform}>
      <div className='relative'>
        <Listbox.Button className='w-full flex flex-row items-center bg-white border border-light-gray rounded-lg py-3 px-4 select-none hover:shadow-[0_0px_32px_0_rgba(99,60,255,0.25)] hover:border hover:border-violet lg:px-6'>
          <div className='flex flex-row items-center gap-3'>
            <Image src={selectedPlatform.image} alt='github-icon' width={16} height={16} />
            <span className='text-dark-gray'>{selectedPlatform.name}</span>
          </div>
          {!selectIsOpen ? (
            <ChevronDownIcon
              className='w-[18px] ml-auto fill-violet stroke-violet stroke-[1.5px]'
              onClick={() => setSelectIsOpen((prevState) => !prevState)}
            />
          ) : (
            <ChevronUpIcon
              className='w-[18px] ml-auto fill-violet stroke-violet stroke-[1.5px]'
              onClick={() => setSelectIsOpen((prevState) => !prevState)}
            />
          )}
        </Listbox.Button>
        <Listbox.Options className='absolute mt-4 bg-white rounded-lg border border-light-gray py-2 px-4 w-full shadow-[0_4px_32px_0_rgba(0,0,0,0.1)] flex flex-col select-none'>
          {data
            .filter((platform) => platform !== selectedPlatform)
            .map((platform) => (
              <Listbox.Option
                key={platform.name}
                value={platform}
                className={({ active }) =>
                  `flex flex-row items-center gap-3 border-b border-light-gray py-3 lg:px-2 ${
                    active ? 'bg-violet/25 cursor-pointer' : ''
                  }`
                }>
                <Image
                  src={platform.image}
                  alt={`${platform.name}-icon`}
                  key={platform.name}
                  width={16}
                  height={16}
                />
                <span className='text-dark-gray'>{platform.name}</span>
              </Listbox.Option>
            ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
}

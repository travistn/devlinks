import { useState } from 'react';
import Image from 'next/image';
import { Listbox } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

import data from '../data.json';

export default function PlatformSelect() {
  const [selectIsOpen, setSelectIsOpen] = useState(false);

  return (
    <Listbox>
      <div className='relative'>
        <Listbox.Button className='w-full flex flex-row items-center bg-white border border-light-gray rounded-lg py-3 px-4 hover:shadow-[0_0px_32px_0_rgba(99,60,255,0.25)] hover:border hover:border-violet'>
          <div className='flex flex-row items-center gap-3'>
            <Image src={data[0].image} alt='github-icon' width={16} height={16} />
            <span className='text-dark-gray'>{data[0].name}</span>
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
        <Listbox.Options className='absolute mt-4 bg-white rounded-lg border border-light-gray py-3 px-4 w-full shadow-[0_4px_32px_0_rgba(0,0,0,0.1)] flex flex-col gap-3'>
          {data.map((social) => (
            <Listbox.Option
              key={social.name}
              value={social.name}
              className='flex flex-row items-center gap-3 border-b border-light-gray pb-3 lg:hover:cursor-pointer'>
              <Image
                src={social.image}
                alt={`${social.name}-icon`}
                key={social.name}
                width={16}
                height={16}
              />
              <span className='text-dark-gray lg:hover:text-violet'>{social.name}</span>
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
}

import { useState } from 'react';
import Image from 'next/image';
import { Listbox } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

import data from '../data.json';

export default function PlatformSelect() {
  const [selectIsOpen, setSelectIsOpen] = useState(false);

  return (
    <div className='bg-white border border-light-gray rounded-lg py-3 px-4'>
      <Listbox>
        <Listbox.Button className='w-full flex flex-row items-center'>
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
        <Listbox.Options>
          {data.map((social) => (
            <Listbox.Option
              key={social.name}
              value={social.name}
              className='flex flex-row items-center gap-3'>
              <Image
                src={social.image}
                alt={`${social.name}-icon`}
                key={social.name}
                width={16}
                height={16}
              />
              <span className='text-dark-gray'>{social.name}</span>
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}

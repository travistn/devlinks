import { Listbox } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { LuGithub } from 'react-icons/lu';

export default function PlatformSelect() {
  return (
    <div className='bg-white border border-light-gray rounded-lg py-3 px-4'>
      <Listbox>
        <Listbox.Button className='w-full flex flex-row items-center'>
          <div className='flex flex-row items-center gap-3'>
            <LuGithub className='fill-gray stroke-gray' />
            <span className='text-dark-gray'>GitHub</span>
          </div>
          <ChevronDownIcon className='w-[18px] ml-auto fill-violet stroke-violet stroke-[1.5px]' />
        </Listbox.Button>
      </Listbox>
    </div>
  );
}

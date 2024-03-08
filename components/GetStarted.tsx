import Image from 'next/image';

import illustration_image from '../public/assets/illustration-empty.svg';

export default function GetStarted() {
  return (
    <section className='p-4'>
      <div className='bg-white flex flex-col p-6 rounded-xl md:p-10'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-[24px] font-bold text-dark-gray md:text-[32px]'>
            Customize your links
          </h2>
          <p className='text-gray'>
            Add/edit/remove links below and then share all your profiles with the world!
          </p>
        </div>
        <button className='rounded-lg py-[11px] px-[27px] border border-violet text-violet font-semibold mt-10'>
          + Add new link
        </button>
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
            Use the “Add new link” button to get started. Once you have more than one link, you can
            reorder and edit them. We’re here to help you share your profiles with everyone!
          </p>
        </div>
        <div className='border border-light-gray mt-6 -mx-6 md:-mx-10' />
        <button className='mt-4 py-[11px] px-[27px] bg-violet/25 rounded-lg font-semibold text-white md:w-[91px] md:ml-auto'>
          Save
        </button>
      </div>
    </section>
  );
}

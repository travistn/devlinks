import Image from 'next/image';

import illustration_image from '../public/assets/illustration-empty.svg';
import illustration_image_mockup from '../public/assets/illustration-phone-mockup.svg';

export default function GetStarted() {
  return (
    <section className='p-4 lg:grid grid-cols-7 gap-6'>
      <div className='max-lg:hidden bg-white p-6 w-full flex items-center justify-center rounded-lg col-span-3'>
        <Image src={illustration_image_mockup} alt='illustration-image-mockup' className='' />
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
        <button className='rounded-lg py-[11px] px-[27px] border border-violet text-violet font-semibold mt-10 hover:bg-light-lavender'>
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
        <button className='mt-4 py-[11px] px-[27px] bg-violet/25 rounded-lg font-semibold text-white md:w-[91px] md:ml-auto lg:hover:bg-lavendar lg:hover:shadow-[0_4px_32px_0_rgba(99,60,250,0.25)]'>
          Save
        </button>
      </div>
    </section>
  );
}

import Image from 'next/image';

import drag_and_drop_icon from '../public/assets/icon-drag-and-drop.svg';
import PlatformSelect from './PlatformSelect';

export default function LinkCard() {
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
        <PlatformSelect />
      </div>
    </div>
  );
}

{
  /* <Listbox.Options>
<div className='flex flex-row items-center gap-3'>
  {data.map((social) => (
    <Image
      src={social.image}
      alt={`${social.name}-icon`}
      key={social.name}
      width={16}
      height={16}
    />
  ))}
</div>
</Listbox.Options> */
}

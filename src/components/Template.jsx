import { Play } from 'phosphor-react';

/* eslint-disable react/prop-types */
const Template = ({ template }) => {
  return (
    <div className='flex flex-col justify-between gap-2 transition-all hover:-translate-y-1'>
      <div className='grow relative hover'>
        <img
          src={template?.imgUrl}
          className='block w-full h-full  rounded-[4px]'
          alt={template?.title}
          loading='lazy'
        />
        <button className='bg-white/50 hover:bg-white rounded-md p-1  absolute bottom-2 left-2'>
          <Play size={12} weight='fill' className='text-[10px]' />
        </button>
      </div>

      <div>
        <p>{template.title}</p>
        <p className='text-sm text-gray-500'>Image list</p>
      </div>
    </div>
  );
};

export default Template;

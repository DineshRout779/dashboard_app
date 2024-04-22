import { House, FilmSlate, ChartBar, GridFour } from 'phosphor-react';
import amazonLogo from '../assets/amazon.png';

const Sidebar = () => {
  return (
    <div className='bg-white sticky top-0 h-screen border-r border-gray-300'>
      <a
        href=''
        className='block font-bold text-xl text-center p-[22px] px-8 border-b border-gray-300'
      >
        P
      </a>
      <div className='p-4 md:px-6 space-y-4'>
        <a
          href=''
          className='block bg-blue-100 text-blue-700 hover:bg-blue-100 hover:text-blue-700 rounded-md p-2'
        >
          <House size={28} />
        </a>
        <a
          href=''
          className='block hover:bg-blue-100 hover:text-blue-700 rounded-md p-2'
        >
          <img src={amazonLogo} alt='' className='w-8' />
        </a>
        <a
          href=''
          className='block hover:bg-blue-100 hover:text-blue-700 rounded-md p-2'
        >
          <FilmSlate size={28} />
        </a>
        <a
          href=''
          className='block hover:bg-blue-100 hover:text-blue-700 rounded-md p-2'
        >
          <GridFour size={28} />
        </a>
        <a
          href=''
          className='block hover:bg-blue-100 hover:text-blue-700 rounded-md p-2'
        >
          <ChartBar size={28} />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;

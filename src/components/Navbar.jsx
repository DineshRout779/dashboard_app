import { User } from 'phosphor-react';

const Navbar = () => {
  return (
    <header className='w-full sticky top-0 z-10 bg-white flex gap-4 justify-end items-end p-4 border-b border-gray-300'>
      <button className='bg-blue-700 text-white p-2 px-4 rounded-md'>
        Create
      </button>
      <button className='bg-gray-300 text-white p-2 rounded-md'>
        <User size={24} weight='fill' className='text-gray-500' />
      </button>
    </header>
  );
};

export default Navbar;

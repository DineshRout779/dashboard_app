import { ArrowSquareOut, MonitorPlay } from 'phosphor-react';

const YourGallery = () => {
  return (
    <div className='flex flex-col justify-between gap-4'>
      <div className='text-xl flex items-center gap-2 font-semibold'>
        Your gallery <ArrowSquareOut />
      </div>
      <div className='border border-gray-300 grow p-4 rounded-md bg-white flex justify-center items-center'>
        <div className='text-center text-gray-400'>
          <MonitorPlay size={96} className='mx-auto' />

          <h2 className='text-lg font-medium mt-4'>
            No videos yet, <br />
            create one today
          </h2>
        </div>
      </div>
    </div>
  );
};

export default YourGallery;

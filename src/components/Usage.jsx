import { ArrowSquareOut } from 'phosphor-react';

const Usage = () => {
  return (
    <div className='flex justify-between flex-col gap-4'>
      <div className='text-xl flex items-center gap-2 font-semibold'>
        Usage <ArrowSquareOut />
      </div>
      <div className='border border-gray-300 grow p-4 rounded-md bg-white flex justify-center items-center'>
        <div>
          <div className='border-[20px] w-36 h-36 flex justify-center items-center flex-col rounded-full border-cyan-500'>
            <p>Total</p>
            <h1 className='text-xl font-bold'>2,000</h1>
          </div>

          <div className='flex items-center gap-2 my-4'>
            <div className='bg-cyan-500 w-4 h-4 rounded-md'></div>
            <p>
              Credits left: <span className='font-bold'>100%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Usage;

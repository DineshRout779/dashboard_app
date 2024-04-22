const QuickCreate = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-xl basis-2/12 font-semibold'>Quick create</h1>
      <div className='border border-gray-300 grow rounded-md bg-white'>
        <form className='block w-full p-6 border-b'>
          <label
            htmlFor='url'
            className='block mb-2 font-semibold text-gray-600 '
          >
            Generate video from any URL (Eg. amazon)
          </label>
          <input
            type='text'
            className='block w-full rounded-md p-2 border border-gray-300'
            placeholder='https://www.amazon.com'
          />
        </form>

        <div className='p-6'>
          <h1 className='text-md mb-4 font-semibold'>Or</h1>

          <div className='md:flex gap-2 items-center'>
            <button className='bg-blue-100 my-1 md:m-0 font-bold text-sm w-full text-blue-600 p-2 px-4 rounded-md border border-blue-500'>
              Create from scratch
            </button>
            <button className='bg-blue-100 my-1 md:m-0 font-bold text-sm w-full text-blue-600 p-2 px-4 rounded-md border border-blue-500'>
              Create from templates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickCreate;

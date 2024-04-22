import { ArrowSquareOut, MagnifyingGlass } from 'phosphor-react';
import Template from './Template';
import { templatesData } from '../data';

const Templates = () => {
  return (
    <div>
      <div className='text-xl flex items-center gap-2 font-semibold text-zinc-800'>
        Templates <ArrowSquareOut />
      </div>

      <div className='p-4 border border-gray-300 rounded-md bg-white my-4'>
        {/* templates actions */}
        <div className='md:flex space-y-4 w-full justify-between items-center'>
          {/* searchbar */}
          <div className='flex gap-2 items-center border rounded-md p-2'>
            <input
              type='search'
              placeholder='Search here'
              className='grow border-none outline-none'
            />
            <MagnifyingGlass className='text-gray-400 font-bold' />
          </div>

          {/* right side actions */}

          <div className='flex gap-4 items-center'>
            <select
              name='type'
              id='type'
              className='p-2 border border-gray-200 rounded-md'
            >
              <option value='all'>All use cases</option>
              <option value='personal'>Personal</option>
              <option value='institute'>Institute</option>
              <option value='professional'>Proessional</option>
            </select>

            <select
              name='shape'
              id='shape'
              className='p-2 border border-gray-200 rounded-md'
            >
              <option value='potrait'>Potrait</option>
              <option value='horizontal'>Horizontal</option>
              <option value='sqaure'>Square</option>
            </select>
          </div>
        </div>
        {/* templates */}
        <div className='grid mt-4 gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-8 auto-rows-max'>
          {templatesData.map((template, i) => (
            <Template template={template} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Templates;

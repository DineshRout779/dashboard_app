import Navbar from './Navbar';
import QuickCreate from './QuickCreate';
import Templates from './Templates';
import Usage from './Usage';
import YourGallery from './YourGallery';

const Content = () => {
  return (
    <div className='w-full'>
      <Navbar />

      <div className='p-5 md:p-8 bg-gray-100 min-h-[90vh] '>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-3 mb-8 auto-rows-max'>
          <QuickCreate />
          <YourGallery />
          <Usage />
        </div>
        <Templates />
      </div>
    </div>
  );
};

export default Content;

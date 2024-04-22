/* eslint-disable react/prop-types */
const Template = ({ template }) => {
  return (
    <div className='flex flex-col justify-between gap-2'>
      <img
        src={template?.imgUrl}
        className='block w-full grow rounded-[4px]'
        alt=''
      />

      <div>
        <p>{template.title}</p>
        <p className='text-sm text-gray-500'>Image list</p>
      </div>
    </div>
  );
};

export default Template;

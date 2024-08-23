/* eslint-disable @next/next/no-img-element */
const CartelTel = () => {
  return (
    <div className='relative max-w-[300px] min-w-[300px] flex items-center justify-center'>
      <img
        src='/cartel-tel.png'
        alt='965064366'
        className='h-auto object-cover'
      />
      <p className='absolute inset-0 w-full flex justify-center items-center text-4xl text-white'>
        965064366
      </p>
    </div>
  );
};

export default CartelTel;

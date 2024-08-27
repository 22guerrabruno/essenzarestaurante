import Image from 'next/image';
import React from 'react';

const Logo = () => {
  return (
    <Image
      src='/logo-esenza.png'
      alt='Logo'
      width={200}
      className='object-cover image-highlight'
      height={200}
    />
  );
};

export default Logo;

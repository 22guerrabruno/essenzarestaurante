'use client';
/* eslint-disable @next/next/no-img-element */
import { useLanguage } from '@/context/LangusgeContext';
import { motion } from 'framer-motion';

import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

const Hero = () => {
  const { isEnglish } = useLanguage();
  return (
    <div className='w-full relative flex flex-col justify-center items-center'>
      <img
        src='https://res.cloudinary.com/duihhp37l/image/upload/v1724739345/essenza/imagenes%20Essenza/thai/essenza_fongo_copia_fderur.jpg'
        alt='Logo'
        className='w-full h-[350px] object-cover'
      />
      <div
        className='absolute inset-0 flex flex-col font-bold justify-center items-center text-white
       font-raleway '>
        <div className='font-oswald-300 bg-black bg-opacity-35 py-5 px-8 flex flex-col items-center justify-center gap-4'>
          <Link href='/about-us'>
            <p className=' w-full'>
              <motion.span
                className=' text-3xl text-center flex items-center justify-center'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}>
                {!isEnglish
                  ? 'UNA EXPERIENCIA GASTRONOMICA DE SABORES'
                  : 'A GASTRONOMIC EXPERIENCE OF FLAVORS'}
              </motion.span>
            </p>
          </Link>

          <p className='font-raleway font-semibold'>C/ GRAN BRETAÑA. CALPE </p>
          <div className='flex items-center gap-2 justify-center'>
            <hr className='w-[60px]' />
            <FaStar /> <hr className='w-[60px]' />
          </div>
          <span className=' border-2 border-white px-6 py-3 hover:bg-gray-300 hover:text-gray-900 font-oswald'>
            {isEnglish ? 'CALL: 966 94 06 57' : 'LLAMAR: 966 94 06 57'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;

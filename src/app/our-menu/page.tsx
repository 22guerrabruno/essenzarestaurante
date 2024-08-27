'use client';
/* eslint-disable @next/next/no-img-element */
import { useLanguage } from '@/context/LangusgeContext';
import Link from 'next/link';

const OurMenuPage = () => {
  const { isEnglish } = useLanguage();
  return (
    <>
      <div className='w-full flex flex-col items-center justify-center gap-2 p-4 scroll-smooth transition-all duration-300'>
        <div className='flex flex-col justify-center items-center mt-4 px-12'>
          <Link href='#menus'>
            <img
              src='/menu-circle.png'
              alt='Galeria'
            />
          </Link>
          <div className='mb-10 w-full flex items-center justify-center flex-col'>
            <h2 className='text-[80px] font-oswald font-medium text-center'>
              {isEnglish ? ' OUR KITCHEN' : 'NUESTRA COCINA'}
            </h2>
            <p className='p-2 border-t-2 border-b-2 border-x-gray-500 text-center'>
              {isEnglish
                ? 'A DATE WITH THE SENSES. A CULINARY JOURNEY.'
                : 'UNA CITA CON LOS SENTIDOS. UN VIAJE GASTRONÓMICO'}
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[80%] gap-3 mt-4'>
              <img
                src='https://res.cloudinary.com/duihhp37l/image/upload/v1724674911/essenza/imagenes%20Essenza/costilla-de-vaca-con_cw0yw4.jpg'
                alt='Galeria'
                className='w-full h-[300px] object-cover'
              />
              <img
                src='https://res.cloudinary.com/duihhp37l/image/upload/v1724674912/essenza/imagenes%20Essenza/caption_1_bkgdm6.jpg'
                alt='Galeria'
                className='w-full h-[300px] object-cover'
              />
              <img
                src='https://res.cloudinary.com/duihhp37l/image/upload/v1724674911/essenza/imagenes%20Essenza/img-20190805-150037-largejpg_ezr9cu.jpg'
                alt='Galeria'
                className='w-full h-[300px] object-cover'
              />
              <img
                src='https://res.cloudinary.com/duihhp37l/image/upload/v1724674910/essenza/imagenes%20Essenza/photo0jpg_b3uis9.jpg'
                alt='Galeria'
                className='w-full h-[300px] object-cover'
              />
              <img
                src='https://res.cloudinary.com/duihhp37l/image/upload/v1724692506/essenza/imagenes%20Essenza/pulpo-grillado_bq6stt.jpg'
                alt='Galeria'
                className='w-full h-[300px] object-cover'
              />
              <img
                src='https://res.cloudinary.com/duihhp37l/image/upload/v1724692507/essenza/imagenes%20Essenza/ensalada-de-remolacha_n315zs.jpg'
                alt='Galeria'
                className='w-full h-[300px] object-cover'
              />
              <img
                src='https://res.cloudinary.com/duihhp37l/image/upload/v1724692437/essenza/imagenes%20Essenza/calzone_euzxec.jpg'
                alt='Galeria'
                className='w-full h-[300px] object-cover'
              />
              <img
                src='https://res.cloudinary.com/duihhp37l/image/upload/v1724674911/essenza/imagenes%20Essenza/photo0jpg_1_ra1uxy.jpg'
                alt='Galeria'
                className='w-full h-[300px] object-cover'
              />
            </div>
          </div>
        </div>
        <hr className='h-1 border-1 w-full border-gray-200 mt-4 mb-4' />
        <div className='flex flex-col items-center justify-center w-full p-4 md:flex-row flex-grow gap-4'>
          <div className='flex flex-col items-center justify-center flex-grow gap-4 mb-10 md:mb-0'>
            <h2 className='flex w-full items-center justify-center font-oswald text-4xl font-bold'>
              {isEnglish ? 'Food Menu' : 'Menu Comidas'}
            </h2>
            <Link
              href='/our-menu/food'
              className='flex items-center justify-center flex-col gap-4 font-raleway-800 font-bold'>
              <img
                src='/comida-ess.png'
                alt='comida'
                className=' w-72 h-72 rounded-full object-cover'
              />
              {isEnglish ? 'Click to show' : 'Click para ver'}
            </Link>
          </div>
          <div
            className='flex flex-col items-center justify-center flex-grow gap-4 mb-10 md:mb-0'
            id='menus'>
            <h2 className='flex w-full items-center justify-center font-oswald text-4xl font-bold'>
              {isEnglish ? 'Drinks Menu' : 'Menu de Bebidas'}
            </h2>
            <Link
              href='/our-menu/drinks'
              className='flex items-center justify-center flex-col gap-4 font-raleway-800 font-bold'>
              <img
                src='/cocktails-ess.jpg'
                alt='drinks'
                className=' w-72 h-72 rounded-full object-cover'
              />
              {isEnglish ? 'Click to show' : 'Click para ver'}
            </Link>
          </div>
        </div>
      </div>
      <div className='font-raleway-400 text-xs w-full bg-gray-900 p-2 text-center text-white flex items-center justify-between flex-wrap'>
        <p className='whitespace-nowrap w-full'>
          {' '}
          © 2018 Essenza Restaurant. All Rights Reserved.
        </p>
        <a
          href='https://www.brunoguerracode.dev/'
          target='_blank'
          className='whitespace-nowrap w-full'>
          Created by Bruno Guerra
        </a>
      </div>
    </>
  );
};

export default OurMenuPage;

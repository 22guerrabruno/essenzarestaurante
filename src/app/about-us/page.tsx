/* eslint-disable @next/next/no-img-element */
'use client';
import { useLanguage } from '@/context/LangusgeContext';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

const AboutUsPage = () => {
  const { isEnglish } = useLanguage();
  return (
    <>
      <div className='w-full relative flex flex-col justify-center items-center '>
        <img
          src='/about-us.png'
          alt='Logo'
          className='w-full h-[500px] object-cover'
        />
        <div
          className='absolute inset-0 flex flex-col font-bold justify-center items-center text-white bg-black bg-opacity-35
       font-raleway '>
          <div className='py-5 px-8 flex flex-col items-center justify-center gap-4'>
            <Link href='/about-us'>
              <p className=' w-full'>
                <motion.span
                  className=' text-6xl text-center flex items-center justify-center font-oswald-400'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 3 }}>
                  {!isEnglish ? 'NOSOTROS' : 'ABOUT US'}
                </motion.span>
              </p>
            </Link>

            <p className='font-raleway-400 font-semibold'>
              {!isEnglish
                ? 'CONOCE NUESTRA COCINA DE AUTOR'
                : 'KNOW OUR SIGNATURE CUISINE'}
            </p>
            <div className='flex items-center gap-2 justify-center'>
              <hr className='w-[70px]' />
              <FaStar size={16} /> <hr className='w-[70px]' />
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row justify-beetwen items-center mt-4 px-12'>
        <div className='flex flex-col items-center justify-center gap-6 min-w-[350px] max-w-[350px]'>
          <h2 className='text-[40px] font-oswald font-medium'>
            {!isEnglish ? 'CONÓCENOS' : 'GET TO KNOW US'}
          </h2>
          <p className='text-sm font-oswald text-center w-[300px]'>
            {!isEnglish
              ? `Essenza Restaurant se encuentra ubicado frente al peñón de Ifach en Calpe, en un entorno paradisíaco, 
              frente al Mar Mediterráneo, descubrirás la mejor cocina de autor en Calpe.`
              : `Essenza Restaurant is located in front of the Peñón de Ifach in Calpe, in a 
              paradisiacal setting by the Mediterranean Sea, where you can discover the best signature cuisine in Calpe.`}
          </p>
          <p className='text-sm font-oswald text-center w-[300px]'>
            {!isEnglish
              ? `Ofrecemos una cocina de autor donde el producto de la tierra y las recetas tradicionales se fusionan 
              con tendencias actuales y con una elegante presentación.`
              : `We offer signature cuisine where local ingredients and traditional recipes blend with current trends 
              and are presented with elegance.`}
          </p>
          <p className='text-sm font-oswald text-center w-[300px]'>
            {!isEnglish
              ? `Una cocina mediterránea italiana de calidad creativa, fresca y ligera.`
              : `A Mediterranean Italian cuisine that is creative, fresh, and light.`}
          </p>
        </div>
        <div className='flex w-full min-w-[300px] items-center justify-center mt-10 lg:mt-0 mb-10 lg:mb-0'>
          <div className='m-4 bg-black flex items-center justify-center h-[160px] w-[160px] p-4 relative rotate-45'>
            <div
              className='absolute border-2 border-white border-dashed box-border pointer-events-none z-10 h-[155px] w-[155px]'
              style={{ boxShadow: 'inset 0 0 0 -10px white' }}></div>{' '}
            <p className='text-white z-10 -rotate-45 w-full text-center text-xs font-raleway'>
              {!isEnglish
                ? 'Una nueva interpretacion del producto'
                : 'A new interpretation of the product'}
            </p>
          </div>
        </div>
        <div className='w-full flex items-center justify-center mt:20 lg:mt-0'>
          <img
            src='https://res.cloudinary.com/duihhp37l/image/upload/v1724739356/essenza/imagenes%20Essenza/thai/ed_copia_njbk4t.jpg'
            alt='quienes somos'
            className='w-[350px] lg:w-full min-w-[350px] aspect-auto object-cover '
          />
        </div>
      </div>
      <div className='w-full relative flex flex-col justify-center items-center mt-10'>
        <img
          src='/constante-ev.jpg'
          alt='Logo'
          className='w-full h-[500px] object-cover'
        />
        <div
          className='absolute inset-0 flex flex-col font-bold justify-center items-center text-white bg-black bg-opacity-35
       font-raleway '>
          <div className='py-5 px-8 flex flex-col items-center justify-center gap-4'>
            <p className=' w-full'>
              <motion.span
                className='text-3xl md:text-6xl text-center flex items-center justify-center font-oswald-400'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}>
                {!isEnglish
                  ? 'EN CONSTANTE EVOLUCIÓN'
                  : 'IN CONSTANT EVOLUTION'}
              </motion.span>
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center mt-4 px-12'>
        <img
          src='/galeria-circle.png'
          alt='Galeria'
        />
        <div className='mb-10 w-full flex items-center justify-center flex-col'>
          <h2 className='text-[80px] font-oswald font-medium text-center'>
            {isEnglish ? ' OUR KITCHEN' : 'NUESTRA COCINA'}
          </h2>
          <p className='p-2 border-t-2 border-b-2 border-x-gray-500 text-center'>
            {isEnglish
              ? 'THE AUTHENTIC SIGNATURE CUISINE'
              : 'LA AÚTENTICA COCINA DE AUTOR'}
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[80%] gap-3 mt-4'>
            <img
              src='https://res.cloudinary.com/duihhp37l/image/upload/v1724689583/essenza/imagenes%20Essenza/ready_w6c4gy.jpg'
              alt='Galeria'
              className='w-full h-[300px] object-cover'
            />
            <img
              src='https://res.cloudinary.com/duihhp37l/image/upload/v1724689583/essenza/imagenes%20Essenza/Stocksy_txpcd1dc0eemKP100_Medium_695556_ujqjbf.jpg'
              alt='Galeria'
              className='w-full h-[300px] object-cover'
            />
            <img
              src='https://res.cloudinary.com/duihhp37l/image/upload/v1724689583/essenza/imagenes%20Essenza/Stocksy_txpcd1dc0eemKP100_Medium_1000349_lqialn.jpg'
              alt='Galeria'
              className='w-full h-[300px] object-cover'
            />
            <img
              src='https://res.cloudinary.com/duihhp37l/image/upload/v1724689583/essenza/imagenes%20Essenza/Stocksy_txpcd1dc0eemKP100_Medium_1313602_fp8hre.jpg'
              alt='Galeria'
              className='w-full h-[300px] object-cover'
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center mt-4 px-12'>
        <div className='flex items-center gap-2 justify-center'>
          <hr className='w-[60px]' />
          <FaStar className='text-gray-400' /> <hr className='w-[60px]' />
        </div>

        <p className='text-sm font-oswald text-center w-[300px] mt-4'>
          {isEnglish
            ? `Our cuisine aims to convey a personal touch, understanding the qualities of each ingredient 
            to bring out its full potential. We combine tradition, technique, and innovation without setting 
            boundaries on different cultures, creating a fun and surprising experience.`
            : `Nuestra cocina busca transmitir un sello personal. Conociendo las cualidades de cada producto para 
            sacar su máximo potencial. Aunando tradición, técnica e innovación sin poner barreras a las distintas 
            culturas para crear una experiencia divertida y sorprendente.`}
        </p>
        <p className='text-sm font-oswald text-center w-[300px] mt-4'>
          {isEnglish
            ? 'Its origin instills the values of passion, dedication, and professionalism.'
            : 'Su origen impregna los valores de la pasión, dedicación y profesionalidad.'}
        </p>

        <Link href='/contact-us'>
          <button className='bg-black text-white px-4 py-2 mt-4 rounded-lg mb-4'>
            {isEnglish ? 'CONTACT US' : 'CONTACTANOS'}
          </button>
        </Link>
      </div>
      <div className='font-raleway-400 text-xs w-full bg-gray-900 p-2 text-center text-white'>
        <p> © 2018 Essenza Restaurant. All Rights Reserved.</p>
        <a
          href='https://www.brunoguerracode.dev/'
          target='_blank'>
          Created by Bruno Guerra
        </a>
      </div>
    </>
  );
};

export default AboutUsPage;

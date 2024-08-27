/* eslint-disable @next/next/no-img-element */
'use client';
import BestCocktails from '@/components/BestCocktails';
import Card from '@/components/Card';
import Carousel from '@/components/Carousel';
import CartelTel from '@/components/CartelTel';
import Cocktails from '@/components/Cocktails';
import Dessert from '@/components/Dessert';
import ExtraContent from '@/components/ExtraContent';
import Gastronomy from '@/components/Gastronomy';
import HealthyFood from '@/components/HealthyFood';
import Hero from '@/components/Hero';
import Pictures from '@/components/Pictures';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LangusgeContext';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Location from '@/components/Location';
import Logo from '@/components/Logo';
import { FaFacebookSquare, FaTripadvisor } from 'react-icons/fa';

export default function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const variants2 = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };
  const comment = [
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724674912/essenza/imagenes%20Essenza/Captura_de_pantalla_2024-08-26_a_las_14.13.17_qdgwxe.png',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724674912/essenza/imagenes%20Essenza/Captura_de_pantalla_2024-08-26_a_las_14.12.54_ycr5kz.png',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724674912/essenza/imagenes%20Essenza/Captura_de_pantalla_2024-08-26_a_las_14.11.12_njlbyn.png',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724674911/essenza/imagenes%20Essenza/Captura_de_pantalla_2024-08-26_a_las_14.12.32_ezd11o.png',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724674910/essenza/imagenes%20Essenza/Captura_de_pantalla_2024-08-26_a_las_14.11.55_m2dqp2.png',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724674908/essenza/imagenes%20Essenza/Captura_de_pantalla_2024-08-26_a_las_14.11.33_kwaf59.png',
  ];
  const { isEnglish } = useLanguage();

  return (
    <main className='flex flex-col items-center justify-center gap-2 w-full scroll-smooth transition duration-300'>
      <div className='w-full'>
        <Hero />
      </div>
      <h2 className='text-[80px] font-oswald font-medium text-center uppercase'>
        {!isEnglish ? 'Gastronomía & Cocktails' : 'Gastronomy & Cocktails'}
      </h2>
      <Card />
      <hr className='h-1 border-1 w-full border-gray-200 mt-4' />
      <div className='w-full flex flex-col lg:flex-row items-center justify-center mt-4 h-fit gap-8 p-4 '>
        <div className='flex flex-col items-center justify-center gap-6 w-full p-4'>
          <motion.div
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.5 }}
            ref={ref}>
            <HealthyFood />
          </motion.div>
          <motion.div
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 1 }}
            ref={ref}>
            <Gastronomy />
          </motion.div>
          <motion.div
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 1.5 }}
            ref={ref}>
            <BestCocktails />
          </motion.div>
        </div>
        <div className='flex justify-center items-center '>
          <CartelTel />
        </div>
      </div>{' '}
      <div className='w-full flex flex-col lg:flex-row items-center justify-between mt-20 h-fit gap-8 pb-14'>
        <ExtraContent />
      </div>
      <div className='flex items-center justify-center w-full mb-10'>
        <Link
          className='text-sky-300'
          href='/our-menu'>
          <Button className='border-[2px] border-gray-300 bg-white text-black hover:bg-gray-500 hover:font-bold hover:text-white'>
            {!isEnglish ? 'Conoce toda nuestra carta' : 'Check all our menu'}
          </Button>
        </Link>
      </div>
      <div className='w-full mb-20 p-8 h-[520px]'>
        <h2 className='w-full flex items-center justify-center font-oswald text-4xl font-bold'>
          {!isEnglish
            ? 'Lo que la gente dice de Nosotros'
            : 'What people say about us'}
        </h2>
        <hr className='h-1 border-1 w-full border-gray-200 mt-10 mb-10' />
        <Carousel
          autoPlay={true}
          imageArray={comment}
          autoPlaySpeed={5000}
          showDots={true}
        />
      </div>
      <div className='w-full'>
        <Location />
      </div>
      <div className='w-full flex flex-col justify-center items-center gap-4'>
        <hr className='h-1 border-1 w-full border-gray-200' />
        <Logo />
        <div className='flex items-center justify-center gap-3 mt-8 z-10'>
          <a
            href='https://www.facebook.com/Essenza-Restaurante-Pizza-Pasta-224160381498020/'
            original-title
            target='_blank'>
            <FaFacebookSquare
              className='text-blue-500 cursor-pointer'
              size={24}
            />
          </a>
          <a
            href='https://www.tripadvisor.es/Restaurant_Review-g187526-d14131088-Reviews-Essenza_Restaurante_Pizza-Calpe_Costa_Blanca_Province_of_Alicante_Valencian_Comm.html'
            original-title
            target='_blank'>
            <FaTripadvisor
              className='text-green-500 cursor-pointer'
              size={24}
            />
          </a>
          <a
            href='https://www.eltenedor.es/restaurante/essenza/396169'
            original-title
            target='_blank'>
            <img
              src='/fork.png'
              alt='eltenedor'
              className='rounded-full w-6 h-6 cursor-pointer'
            />
          </a>
          <a
            href='https://www.instagram.com/essenzacalpe?igsh=MWlmZjRqeGVyMWM5bQ=='
            original-title
            target='_blank'>
            <img
              src='/instagram.jpeg'
              alt='eltenedor'
              className='rounded-lg w-6 h-6 cursor-pointer'
            />
          </a>
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
      </div>
    </main>
  );
}

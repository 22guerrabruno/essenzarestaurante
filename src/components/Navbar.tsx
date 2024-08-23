'use client';
import Link from 'next/link';
import Logo from './Logo';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { cn } from '@/lib/utils';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Button } from './ui/button';
import { useLanguage } from '@/context/LangusgeContext';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isEnglish, setIsEnglish } = useLanguage();

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen((prevIsDropdownOpen) => !prevIsDropdownOpen);
  }, [setIsDropdownOpen]);

  return (
    <header className='bg-white lg:px-6 h-fit flex items-center justify-between shadow-sm text-black py-2 z-50'>
      <Link
        href='/'
        className='flex items-center justify-center'
        prefetch={false}>
        <Logo />
        <span className='sr-only'>Iguana Beach Bar & Cocktail`s</span>
      </Link>
      <div className='w-full flex items-center justify-end mr-4 gap-2'>
        <div className='flex flex-col'>
          <Image
            onClick={() => setIsEnglish(true)}
            src='/English_language.png'
            width='30'
            height='30'
            alt='Flag1'
            className='object-cover rounded-full'
          />
          <hr
            className={cn(
              'bg-gray-900 h-[2px] w-full mt-1',
              !isEnglish && 'bg-transparent'
            )}
          />
        </div>
        <div className='flex flex-col'>
          <Image
            onClick={() => setIsEnglish(false)}
            src='/spain-sign-language.png'
            width='30'
            height='30'
            alt='Flag1'
            className='object-cover rounded-full'
          />
          <hr
            className={cn(
              'bg-gray-900 h-[2px] w-full mt-1',
              isEnglish && 'bg-transparent'
            )}
          />
        </div>
      </div>
      <nav className='hidden lg:flex gap-4 sm:gap-6'>
        <Link
          href='/our-menu'
          className='text-sm font-medium hover:underline underline-offset-4 whitespace-nowrap'
          prefetch={false}>
          {isEnglish ? 'Our Menu' : 'Nuestra Carta'}
        </Link>
        <Link
          href='/about-us'
          className='text-sm font-medium hover:underline underline-offset-4 whitespace-nowrap'
          prefetch={false}>
          {isEnglish ? 'About Us' : 'Quienes Somos'}
        </Link>
        <Link
          href='/image-gallery'
          className='text-sm font-medium hover:underline underline-offset-4 whitespace-nowrap'
          prefetch={false}>
          {isEnglish ? 'Gallery' : 'Galeria'}
        </Link>
        <Link
          href='/contact-us'
          className='text-sm font-medium hover:underline underline-offset-4 whitespace-nowrap'
          prefetch={false}>
          {isEnglish ? 'Contact Us' : 'Contactar'}
        </Link>
      </nav>
      <Button
        variant='ghost'
        size='icon'
        className='lg:hidden relative mr-4'
        onClick={(e) => {
          e.stopPropagation();
          toggleDropdown();
        }}>
        <GiHamburgerMenu className='h-6 w-6' />
        <span className='sr-only'>Toggle navigation menu</span>
      </Button>
      {isDropdownOpen && (
        <ul className=' lg:hidden absolute bg-sky-300 shadow-md rounded-md mt-2 py-1 w-48 dropdown-container top-16 right-3 z-50'>
          <li className='px-4 py-2 hover:bg-gray-100 text-white hover:text-gray-700'>
            <Link
              href='#about'
              onClick={(e) => {
                e.stopPropagation();

                toggleDropdown();
              }}>
              {isEnglish ? 'About Us' : 'Quienes Somos'}
            </Link>
          </li>
          <li className='px-4 py-2 hover:bg-gray-100 text-white hover:text-gray-700'>
            <Link
              href='/our-menu'
              onClick={(e) => {
                e.stopPropagation();

                toggleDropdown();
              }}>
              {isEnglish ? 'Our Menu' : 'Nuestra Carta'}
            </Link>
          </li>
          <li className='px-4 py-2 hover:bg-gray-100 text-white hover:text-gray-700'>
            <Link
              href='/image-gallery'
              onClick={(e) => {
                e.stopPropagation();

                toggleDropdown();
              }}>
              {isEnglish ? 'Gallery' : 'Galeria'}
            </Link>
          </li>
          <li className='px-4 py-2 hover:bg-gray-100 text-white hover:text-gray-700'>
            <Link
              href='/contact-us'
              onClick={(e) => {
                e.stopPropagation();

                toggleDropdown();
              }}>
              {isEnglish ? 'Contact Us' : 'Contactar'}
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;

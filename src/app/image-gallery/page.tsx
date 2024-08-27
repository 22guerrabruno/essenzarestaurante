'use client';
/* eslint-disable @next/next/no-img-element */
import { useLanguage } from '@/context/LangusgeContext';
import clsx from 'clsx';
import { useState } from 'react';

const ImageGallery = () => {
  const { isEnglish } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const pictures = [
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724739358/essenza/imagenes%20Essenza/thai/foto_salon_copia_vmttdf.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724739355/essenza/imagenes%20Essenza/thai/entrecote_copia_qhcxuk.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724739354/essenza/imagenes%20Essenza/thai/foto_guitarrista_1_copia_yc5ump.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724739353/essenza/imagenes%20Essenza/thai/barry_papardelle_copia_t8sokf.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724739352/essenza/imagenes%20Essenza/thai/spaguetti2_copia_m20woy.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724739351/essenza/imagenes%20Essenza/thai/camilo_vino_perfil_copia_ot5wng.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724739350/essenza/imagenes%20Essenza/thai/jose_copia_ytivym.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/t_calamares/v1724739349/essenza/imagenes%20Essenza/thai/calamares_copia_j0b6mj.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724739348/essenza/imagenes%20Essenza/thai/foto_cartel_con_gon_copia_s5dmfl.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724739347/essenza/imagenes%20Essenza/thai/and_copia_e6t6lj.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724739345/essenza/imagenes%20Essenza/thai/essenza_fongo_copia_fderur.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724739344/essenza/imagenes%20Essenza/thai/pizza_peperonnni_copia_mmhfmt.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724739343/essenza/imagenes%20Essenza/thai/lemon_pie_copia_gxi7b7.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724739342/essenza/imagenes%20Essenza/thai/ravioli_copia_xcbbrb.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/t_burrata/v1724739341/essenza/imagenes%20Essenza/thai/burrata_copia_sulx0f.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724739340/essenza/imagenes%20Essenza/thai/cartel_chouffe_2_copia_fh9eql.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724739340/essenza/imagenes%20Essenza/thai/pulpo_copia_ucsjtl.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/t_ensaladilla/v1724739338/essenza/imagenes%20Essenza/thai/ensaladilla_rusa_copia_w8kmoe.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724739336/essenza/imagenes%20Essenza/thai/camilo_frente_barra_copia_at5wxj.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724739336/essenza/imagenes%20Essenza/thai/provoletta_copia_ge7kx3.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/t_ensalada/v1724739335/essenza/imagenes%20Essenza/thai/ensalada_quinoa_copia_f7bzer.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724692507/essenza/imagenes%20Essenza/ensalada-de-gambon-y_t16oyi.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724692507/essenza/imagenes%20Essenza/ensalada-de-remolacha_n315zs.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724692437/essenza/imagenes%20Essenza/calzone_euzxec.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724674913/essenza/imagenes%20Essenza/img-20190806-151854-largejpg_csmkn4.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724674913/essenza/imagenes%20Essenza/caption_lyarcy.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724674912/essenza/imagenes%20Essenza/codillo-de-cerdo-confitado_qq3uvc.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724674912/essenza/imagenes%20Essenza/lubina-salvaje-con-micro_hxfxoy.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724674912/essenza/imagenes%20Essenza/fachada-del-restaurante_jfabxt.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724674912/essenza/imagenes%20Essenza/caption_1_bkgdm6.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724674911/essenza/imagenes%20Essenza/photo0jpg_1_ra1uxy.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724674911/essenza/imagenes%20Essenza/img-20190805-150037-largejpg_ezr9cu.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724674911/essenza/imagenes%20Essenza/caption_6_bygp8f.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724674910/essenza/imagenes%20Essenza/essenza-restaurante-pizza_jfvqr8.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724674909/essenza/imagenes%20Essenza/caption_3_uittl4.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724674908/essenza/imagenes%20Essenza/20190830-222507-largejpg_e6ufzw.jpg',
    'https://res.cloudinary.com/duihhp37l/image/upload/v1724674908/essenza/imagenes%20Essenza/20190121-152259-largejpg_yhwda0.jpg',
  ];

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };
  const handleCloseClick = () => {
    setSelectedImage(null);
  };

  const handleHoverIn = (src: string) => {
    setHoveredImage(src);
  };
  const handleHoverOut = () => {
    setHoveredImage(null);
  };

  return (
    <>
      <div className='w-full flex flex-col items-center justify-center gap-2 p-4'>
        {selectedImage && (
          <div
            className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40'
            onClick={handleCloseClick}>
            <div className='w-full flex items-center justify-center h-full'>
              <img
                src={selectedImage}
                alt=''
                className={clsx(
                  'w-[80%] max-h-[80%]  rounded-lg cursor-pointer'
                )}
              />
            </div>
          </div>
        )}
        <img
          src='/menu-circle.png'
          alt='Galeria'
        />
        <h2 className='text-[80px] font-oswald font-medium text-center'>
          {isEnglish ? ' IMAGE GALLERY' : 'GALERIA DE IMAGENES'}
        </h2>
        <p className='p-2 border-t-2 border-b-2 border-x-gray-500 text-center'>
          {isEnglish ? 'A BIT OF OUR ESSENCE.' : 'UN POCO DE NUESTRA ESENCIA.'}
        </p>

        <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-2'>
          {pictures.map((src) => (
            <div
              key={src}
              className={clsx(
                `flex items-center justify-center h-[250px] border-4 border-black border-collapse rounded-lg `,
                hoveredImage === src && 'animate-pulse'
              )}
              onMouseEnter={() => handleHoverIn(src)}
              onMouseLeave={handleHoverOut}>
              <img
                src={src}
                alt=''
                className={clsx(
                  'w-full h-full object-cover cursor-pointer',
                  hoveredImage === src && 'zoom-out-150'
                )}
                onClick={() => handleImageClick(src)}
              />
              {selectedImage === src && (
                <button
                  onClick={handleCloseClick}
                  className='absolute top-2 right-2 bg-white text-black p-2 rounded-full'>
                  X
                </button>
              )}
            </div>
          ))}
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

export default ImageGallery;

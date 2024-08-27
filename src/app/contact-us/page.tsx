'use client';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LangusgeContext';
import { sendNewContact } from '@/utils/send-email';
import { Link, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { set } from 'react-hook-form';
import { FaFacebookSquare } from 'react-icons/fa';
import { SiTripadvisor } from 'react-icons/si';

const ContactUs = () => {
  const { isEnglish } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    setLoading(true);
    try {
      const res = sendNewContact(name, email, message);
      setName('');
      setEmail('');
      setMessage('');
      console.log(res);
    } catch (error: unknown) {
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <div className='w-full flex flex-col items-center justify-center gap-2 mt-10'>
      <h1 className='text-5xl font-bold font-oswald'>
        {isEnglish ? 'Contact Us' : 'Contacto'}
      </h1>
      <p className='text-sm text-center font-raleway-400 max-w-[80%]'>
        We are here to help you. If you have any questions or need help, please
        contact us.
      </p>
      <div className='w-full flex flex-col md:flex-row items-center justify-center gap-2 mt-2 px-4'>
        <div className='flex flex-col items-center justify-center w-full gap-4 mb-4'>
          <form
            onSubmit={onSubmit}
            className='w-full flex flex-col items-center gap-4 mb-3'>
            <div className='flex flex-col leading-6 items-start justify-center gap-2'>
              <label
                htmlFor='name'
                className='w-full text-start font-raleway-400 text-sm'>
                {isEnglish ? 'Full name:' : 'Nombre y Apellido:'}
              </label>
              <input
                type='text'
                placeholder={isEnglish ? 'John Doe' : 'Juan Perez'}
                name='name'
                className='w-96 h-10 border-2 border-gray-300 rounded-md px-2 focus:outline-gray-600'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='flex flex-col leading-6 items-start justify-center gap-2'>
              <label
                htmlFor='email'
                className='w-full text-start font-raleway-400 text-sm'>
                Email:
              </label>
              <input
                type='email'
                name='email'
                placeholder='example@email.com'
                className='w-96 h-10 border-2 border-gray-300 rounded-md px-2 focus:outline-gray-600'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='flex flex-col leading-6 items-start justify-center gap-2'>
              <label
                htmlFor='message'
                className='w-full text-start font-raleway-400 text-sm'>
                {isEnglish ? 'Message:' : 'Mensaje:'}
              </label>
              <textarea
                placeholder={
                  isEnglish
                    ? 'Please enter your message'
                    : 'Por favor ingrese su mensaje'
                }
                rows={5}
                name='message'
                className='w-96 h-40 border-2 border-gray-300 rounded-md px-2 focus:outline-gray-600 resize-none'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              type='submit'
              className='w-96 h-10 hover:bg-gray-300 bg-transparent hover:text-white rounded-md border-2 border-gray-300 text-black'>
              {loading ? (
                <Loader2 className='animate-spin text-gray-300 items-center justify-center w-full' />
              ) : isEnglish ? (
                'Send'
              ) : (
                'Enviar'
              )}
            </button>
          </form>
        </div>
        <div className='flex flex-col items-start justify-center gap-6 w-full px-4 max-w-[300px]'>
          <h2 className='text-2xl font-semibold text-center sm:text-start font-raleway-800'>
            {!isEnglish ? 'Encuéntranos en:' : 'Find us at:'}
          </h2>
          <p className='font-raleway-400 text-sm'>
            Calle Gran Bretaña, Calpe (Alicante) <br />
            Teléfono: 96 694 06 57
          </p>
          <p className='font-raleway-400 text-sm '>
            {!isEnglish
              ? `Ofrecemos una cocina de autor donde el producto de la tierra y las recetas tradicionales se fusionan 
     con tendencias actuales y con una elegante presentación.`
              : 'We offer a signature cuisine where local products and traditional recipes merge with current trends and an elegant presentation.'}
          </p>
          <a
            href='https://www.facebook.com/Essenza-Restaurante-Pizza-Pasta-224160381498020/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-2 font-raleway-400 text-sm'>
            <FaFacebookSquare
              className='text-4xl text-blue-800'
              size={24}
            />
            {isEnglish
              ? 'Connect us on Facebook'
              : 'Conecta con nosotros en Facebook'}
          </a>
          <a
            href='https://www.tripadvisor.es/Restaurant_Review-g187526-d14131088-Reviews-Essenza_Restaurante_Pizza-Calpe_Costa_Blanca_Province_of_Alicante_Valencian_Comm.html'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-2 font-raleway-400 text-sm'>
            <SiTripadvisor
              className='text-4xl text-green-800'
              size={24}
            />
            {isEnglish
              ? 'Rate us on TripAdvisor'
              : 'TripAdvisor, danos tu opinión'}
          </a>
          <a
            href='https://www.instagram.com/essenzacalpe?igsh=MWlmZjRqeGVyMWM5bQ=='
            original-title
            target='_blank'
            className='flex items-center justify-center gap-2 font-raleway-400 text-sm'>
            <img
              src='/instagram.jpeg'
              alt='eltenedor'
              className='rounded-lg w-6 h-6 cursor-pointer'
            />
            {isEnglish ? 'Comment on instagram' : 'Comenta en instagram'}
          </a>
        </div>
      </div>
      <hr className='h-1 border-1 w-full border-gray-200 mt-10 mb-10' />
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19401.703801432217!2d0.06848990686037705!3d38.64476487982951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129dff1b32e06883%3A0x8cd8ba494633d10e!2sESSENZA%20RESTAURANT.!5e0!3m2!1ses!2ses!4v1724673803179!5m2!1ses!2ses'
        style={{ border: 0 }}
        loading='lazy'
        className='w-[350px] h-[500px] sm:w-[500px] sm:h-[450px] md:w-[600px] md:h-[450px] lg:w-[750px] mb-10'></iframe>
      <div className='w-full flex flex-col justify-center items-center gap-4 mb-4'>
        <hr className='h-1 border-1 w-full border-gray-200' />
        <Logo />
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
  );
};

export default ContactUs;

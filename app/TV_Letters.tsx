import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function TV_Letters({
  windowWidth,
  arrowTimer,
  showAnimations,
}: TV_LettersProps) {
  const [showClassFlicker1, setShowClassFlicker1] = useState('');
  const [showClassFlicker2, setShowClassFlicker2] = useState('');
  const [showClassFlicker3, setShowClassFlicker3] = useState('');

  useEffect(() => {
    // 2초뒤 flicker 효과
    let timer = setTimeout(() => {
      setShowClassFlicker1('flicker-1');
      setShowClassFlicker2('flicker-2');
      setShowClassFlicker3('flicker-3');
      return () => clearTimeout(timer);
    }, 2000);
  }, []);

  return (
    <>
      {/* TV */}
      <Image
        src='https://user-images.githubusercontent.com/106279616/210290508-89f41ac4-8049-44c1-9758-ca705e19776d.png'
        height={500}
        width={1000}
        quality={100}
        alt='TV'
        className={`absolute top-[130px] z-0 transition-all duration-1000 ease-in-out rounded-3xl
        ${showAnimations ? '-translate-y-6 opacity-100' : 'opacity-0'}`}
      />
      <div
        className={`absolute top-[155px] left-[15px] ml-[12vw] lg:ml-[130px] w-4/5`}
      >
        {/* Welcome */}
        <h1
          className={` z-10 text-[7vw] mt-[8vw] lg:text-[70px] lg:mt-[90px]
          ${
            arrowTimer < 5 &&
            'transition-all duration-1000 delay-1000 ease-in-out'
          } ${
            showAnimations ? '-translate-y-6 opacity-100' : 'opacity-0'
          } ${showClassFlicker1}`}
        >
          WELCOME TO
        </h1>
        <div className='flex items-center mt-[2vw] lg:mt-[45px]'>
          {/* MyTube 로고  */}
          <Image
            src='https://user-images.githubusercontent.com/106279616/209161034-33287953-5b8f-40b3-ac12-a63010849fbf.png'
            height={55}
            width={75}
            quality={100}
            alt='MyTube-Logo'
            className={`z-10
        ${
          arrowTimer < 5 &&
          'transition-all duration-1000 delay-1300 ease-in-out'
        }
        ${
          showAnimations ? '-translate-y-6 opacity-100' : 'opacity-0'
        } ${showClassFlicker3}`}
          />
          {/* MyTube 문구 */}
          <h1
            className={`z-10 text-[6vw] lg:text-[65px]
      ${arrowTimer < 5 && 'transition-all duration-1000 delay-1300 ease-in-out'}
      ${
        showAnimations ? '-translate-y-6 opacity-100' : 'opacity-0'
      } ${showClassFlicker3}`}
          >
            MyTube
          </h1>
        </div>
        {/* Let's Go 버튼 */}
        <Link
          href='/video'
          className={`relative -top-[5px] sm:top-8 font-medium text-[5vw] px-3 py-1.5 sm:text-[6vw] sm:px-5 sm:py-2.5 lg:text-[60px] text-center
       text-white bg-gradient-to-r
       from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br 
       focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 
       shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80  
       rounded-lg z-10
      ${arrowTimer < 5 && 'transition-all duration-1000 delay-1600 ease-in-out'}
      ${
        showAnimations ? '-translate-y-6 opacity-100' : 'opacity-0'
      } ${showClassFlicker2}`}
        >
          Let's Go
        </Link>
      </div>
    </>
  );
}

export default TV_Letters;

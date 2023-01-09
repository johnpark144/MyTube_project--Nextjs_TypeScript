import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function TV_Letters({ arrowTimer, showAnimations }:TV_LettersProps) {
    const [showClassFlicker1, setShowClassFlicker1] = useState("");
    const [showClassFlicker2, setShowClassFlicker2] = useState("");
    const [showClassFlicker3, setShowClassFlicker3] = useState("");

    useEffect(() => {
      // 2초뒤 flicker 효과
      let timer = setTimeout(() => {
        setShowClassFlicker1("flicker-1");
        setShowClassFlicker2("flicker-2");
        setShowClassFlicker3("flicker-3");
        return () => {
          clearTimeout(timer);
        };
      }, 2000);
    }, []);

  return (
    <>
    {/* TV */}
    <Image
        src="https://user-images.githubusercontent.com/106279616/210290508-89f41ac4-8049-44c1-9758-ca705e19776d.png"
        height={500}
        width={1000}
        quality={100}
        alt="TV"
        className={`absolute top-[130px] z-0 transition-all duration-1000 ease-in-out rounded-3xl
        ${showAnimations ? "-translate-y-6 opacity-100" : "opacity-0"}`}
      />
      {/* Welcome */}
      <h1 className={`absolute
      top-[190px] left-[55px] text-2xl
      sm:top-[200px] sm:left-[80px] sm:text-3xl
      md:top-[270px] md:left-1/5 md:text-5xl
      lg:top-[300px] lg:left-[120px] lg:text-7xl z-10
      ${arrowTimer < 5 ? "transition-all duration-1000 delay-1000 ease-in-out" : ""}
      ${showAnimations ? "-translate-y-6 opacity-100" : "opacity-0"}
      ${showClassFlicker1}`}>
        WELCOME TO
      </h1>
      {/* Let's Go 버튼 */}
      <Link href="/video" className={`jello-horizontal absolute
      top-[220px] left-[230px] text-2xl
      sm:top-[250px] sm:left-[305px] sm:text-3xl
      md:top-[350px] md:left-2/4 md:text-4xl
       lg:top-[400px] lg:left-[465px] lg:text-5xl
       text-white bg-gradient-to-r
       from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br 
       focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 
       shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium 
       rounded-lg px-5 py-2.5 text-center mr-2 mb-2 z-10
      ${arrowTimer < 5 ? "transition-all duration-1000 delay-1300 ease-in-out" : ""}
      ${showAnimations ? "-translate-y-6 opacity-100" : "opacity-0"} ${showClassFlicker2}`}>
        Let's Go
      </Link>
      {/* MyTube 로고  */}
      <Image
        src="https://user-images.githubusercontent.com/106279616/209161034-33287953-5b8f-40b3-ac12-a63010849fbf.png"
        height={55}
        width={200}
        quality={100}
        alt="MyTube-Logo"
        className={`absolute
        top-[260px] left-[60px]
        sm:top-[300px] sm:left-[80px]
        md:top-[400px] md:left-1/5
        lg:top-[470px] lg:left-[110px] z-10
        ${arrowTimer < 5 ? "transition-all duration-1000 delay-1600 ease-in-out" : ""}
        ${showAnimations ? "-translate-y-6 opacity-100" : "opacity-0"} ${showClassFlicker3}`}
      />
      {/* MyTube 문구 */}
      <h1 className={`absolute
      top-[320px] left-[270px] text-2xl 
      sm:top-[360px] sm:left-[290px]
      md:top-[460px] md:left-1/5 md:text-3xl 
      lg:top-[520px] lg:left-[370px] lg:text-5xl z-10
      ${arrowTimer < 5 ? "transition-all duration-1000 delay-1600 ease-in-out" : ""}
      ${showAnimations ? "-translate-y-6 opacity-100" : "opacity-0"} ${showClassFlicker3}`}>MyTube</h1>
    </>
  )
}

export default TV_Letters

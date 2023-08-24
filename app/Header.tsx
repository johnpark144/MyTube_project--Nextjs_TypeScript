'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Provider from './../provider/Provider';
import DarkModeIcon from './DarkModeIcon';
import { FcSearch } from 'react-icons/fc';

function Header() {
  const router = useRouter();
  const [searchWord, setSearchWord] = useState('');

  const refOne = useRef<HTMLInputElement>(null);
  const [seeMyTubeLogo, setSeeMyTubeLogo] = useState(true);

  // refOne의 바깥 돔을 클릭한경우 실행
  const hideOnClickOutside = (e: Event) => {
    if (refOne.current && !refOne.current.contains(e.target as Node)) {
      setSeeMyTubeLogo(true);
    }
  };
  useEffect(() => {
    document.addEventListener('click', hideOnClickOutside, true);
  }, []);

  // 검색
  const doSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/video/search?q=${searchWord}`);
    setSearchWord('');
  };

  return (
    <>
      <header className='z-40 h-16 w-full rounded-xl bg-white shadow-md dark:bg-gray-700'>
        <div className='text-lg pl-2 sm:px-4 py-2 sm:text-2xl flex h-full justify-between items-center'>
          <Link
            href='/'
            className={`mx-1 sm:mx-2 items-center ${
              seeMyTubeLogo ? 'flex' : 'hidden sm:flex'
            }`}
          >
            {/* 로고와 MyTube */}
            <div className='relative w-[5rem] h-[3rem] mr-2 sm:w-24 sm:h-14'>
              <Image
                src='https://user-images.githubusercontent.com/106279616/209161034-33287953-5b8f-40b3-ac12-a63010849fbf.png'
                fill
                alt='MyTube-Logo'
              />
            </div>
            <div>MyTube</div>
          </Link>
          {/* 검색 */}
          <form
            onSubmit={doSearch}
            className='flex-1 flex items-center relative left-6 sm:left-0'
          >
            <input
              type='text'
              className='w-full rounded-2xl bg-gray-100 
                py-1.5 pl-10 pr-4 leading-normal text-gray-400 ring-opacity-90 
                focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500
                 dark:bg-gray-800'
              placeholder='Search...'
              onChange={(e) => setSearchWord(e.target.value)}
              onFocus={() => setSeeMyTubeLogo(false)}
              value={searchWord}
              ref={refOne}
            />
            <button
              type='submit'
              className='w-8 h-8 sm:w-10 sm:h-10 p-1 rounded-full bg-white relative -left-10'
            >
              <FcSearch className='text-2xl sm:text-3xl' />
            </button>
          </form>
          <div className='flex lg:w-1/4 lg:min-w-[430px] justify-around items-center gap-x-7'>
            {/* 다크모드 */}
            <Provider>
              <DarkModeIcon />
            </Provider>
            {/* 메뉴, Lg사이즈일때만 hidden */}
            <Link className='hidden lg:flex' href='/video'>
              Video
            </Link>
            <Link className='hidden lg:flex' href='/watchlater'>
              Watch later
            </Link>
            <Link className='hidden lg:flex' href='/history'>
              History
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

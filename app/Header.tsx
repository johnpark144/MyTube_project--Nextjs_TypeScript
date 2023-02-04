"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import Provider from './../provider/Provider';
import DarkModeIcon from "./DarkModeIcon";
import { FcSearch } from "react-icons/fc";

function Header() {
  const router = useRouter()
  const [searchWord, setSearchWord] = useState("");

  // 검색
  const doSearch = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/video/search?q=${searchWord}`)
    setSearchWord("");
  };

  return (
    <>
      <header className="z-40 h-16 w-full items-center rounded-2xl bg-white shadow-lg dark:bg-gray-700">
        <div className="flex-center relative z-20 flex h-full flex-col justify-center px-1 sm:px-3">
          <div className="text-lg sm:text-2xl left-0 z-50 flex h-full w-full justify-between">
            <Link href="/" className="flex">
              {/* 로고와 MyTube */}
              <div className="relative top-2 w-[5rem] h-[3rem] sm:top-0 sm:w-24 sm:h-14">
              <Image
                src="https://user-images.githubusercontent.com/106279616/209161034-33287953-5b8f-40b3-ac12-a63010849fbf.png"
                fill
                alt="MyTube-Logo"
              />
              </div>
              <div className="mt-4 mx-3">MyTube</div>
            </Link>
            {/* 검색 */}
            <form
              onSubmit={doSearch}
              className="group absolute top-0 left-[170px] sm:left-[199px] sm:ml-2 lg:ml-0 flex items-center h-full w-[240px] sm:w-[277px]
              sm:w-[343px] md:w-[479px] lg:relative lg:left-0 lg:w-1/2"
            >
              <input
                type="text"
                className="aa-input block w-full rounded-2xl bg-gray-100 
                py-1.5 pl-10 pr-4 leading-normal text-gray-400 ring-opacity-90 
                focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500
                 dark:bg-gray-800"
                placeholder="Search..."
                onChange={(e) => setSearchWord(e.target.value)}
                value={searchWord}
              />
              <button
                type="submit"
                className="relative right-12 w-10 h-10 p-1 rounded-full bg-white"
              >
                <FcSearch className="text-3xl" />
              </button>
            </form>
            {/* 다크모드 */}
            <div className="absolute right-1 sm:right-12 lg:relative lg:top-0 lg:left-0">
            <Provider>
              <DarkModeIcon />
            </Provider>
          </div>
            {/* 메뉴, Lg사이즈일때만 visible */}
            <ol className="invisible flex flex-none justify-evenly text-center lg:visible lg:flex-row lg:mt-4 lg:ml-0 ">
              <Link  href="/video">Video</Link>
              <Link className="ml-8" href="/watchlater">Watch later</Link>
              <Link className="ml-8" href="/history">History</Link>
            </ol>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

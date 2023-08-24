// 화면이 작아질때만 등장
import Link from 'next/link';
import { BsCameraVideo, BsSave } from 'react-icons/bs';
import { BiHistory } from 'react-icons/bi';

function Footer() {
  return (
    <>
      <footer
        className='flex fixed bottom-0 left-0 z-40 h-16 w-full
      border-t-2 border-gray-100 border-solid
      rounded-2xl bg-white dark:bg-gray-700 dark:border-gray-800 lg:hidden'
      >
        <Link className='flex-1 flex justify-center items-center' href='/video'>
          <div className='w-4/5 flex flex-col items-center'>
            <BsCameraVideo />
            <h1>Video</h1>
          </div>
        </Link>
        <Link
          className='flex-1 flex justify-center items-center '
          href='/watchlater'
        >
          <div className='w-4/5 flex flex-col items-center'>
            <BsSave />
            <h1>Watch later</h1>
          </div>
        </Link>
        <Link
          className='flex-1 flex justify-center items-center '
          href='/history'
        >
          <div className='w-4/5 flex flex-col items-center'>
            <BiHistory />
            <h1>History</h1>
          </div>
        </Link>
      </footer>
    </>
  );
}

export default Footer;

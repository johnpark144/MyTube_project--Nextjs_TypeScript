import Link from "next/link";
import { BsCameraVideo, BsSave } from "react-icons/Bs";
import { BiHistory } from "react-icons/Bi";

function Footer() {
  return (
    <>
      <footer
        className="visible fixed bottom-0 left-0 z-40 h-16 w-full 
      border-t-2 border-gray-100 border-solid
      items-center rounded-2xl bg-white dark:bg-gray-700 lg:invisible"
      >
        <ol className="flex justify-evenly text-center mt-4">
          <Link className="w-1/4" href="/video">
            <h1 className="relative left-1/3 w-12 px-4">
              <BsCameraVideo />
            </h1>
            <h1>Video</h1>
          </Link>
          <Link className="w-1/4" href="/watchlater">
            <h1 className="relative left-1/3 w-12 px-4">
              <BsSave />
            </h1>
            <h1>Watch later</h1>
          </Link>
          <Link className="w-1/4" href="/history">
            <h1 className="relative left-1/3 w-12 px-4">
              <BiHistory />
            </h1>
            <h1>History</h1>
          </Link>
        </ol>
      </footer>
    </>
  );
}

export default Footer;

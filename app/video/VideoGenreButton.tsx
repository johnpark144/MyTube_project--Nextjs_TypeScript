"use client";
import { useRouter } from "next/navigation";
import { SiDjango, SiReact, SiYoutubegaming } from "react-icons/si";
import { BsFillMusicPlayerFill, BsNewspaper } from "react-icons/bs";
import { MdLocalMovies, MdSportsCricket, MdLiveTv } from "react-icons/md";
import { GiClothes, GiAerialSignal } from "react-icons/gi";
import { TbBrandNextjs } from "react-icons/tb";

function VideoGenreButton({ genre }: VideoGenreButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={(e) => router.push(`/video/${genre.genre}`)}
      className="flex w-56 text-xl px-4 my-1 lg:my-4 hover:rounded-xl hover:bg-gray-200"
      key={genre.id}
    >
      {/* 장르 아이콘 */}
      <div className="relative top-2">
        {genre.genre === "Python Django" ? (
          <SiDjango />
        ) : genre.genre === "React Js" ? (
          <SiReact />
        ) : genre.genre === "Next Js" ? (
          <TbBrandNextjs />
        ) : genre.genre === "Movies" ? (
          <MdLocalMovies />
        ) : genre.genre === "Music" ? (
          <BsFillMusicPlayerFill />
        ) : genre.genre === "Gaming" ? (
          <SiYoutubegaming />
        ) : genre.genre === "News" ? (
          <BsNewspaper />
        ) : genre.genre === "Learning" ? (
          <MdSportsCricket />
        ) : genre.genre === "Beauty" ? (
          <GiClothes />
        ) : genre.genre === "Live" ? (
          <MdLiveTv />
        ) : (
          <GiAerialSignal />
        )}
      </div>
      {/* 장르명 */}
      <div className="my-2 ml-3">{genre.genre}</div>
    </button>
  );
}

export default VideoGenreButton;

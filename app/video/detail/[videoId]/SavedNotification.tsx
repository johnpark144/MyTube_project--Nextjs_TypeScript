import { AiOutlineCloseSquare } from "react-icons/ai";
import { useEffect, useState } from "react";

function SavedNotification({ saved }: SavedNotificationProps) {
  const [savedAnimation, setSavedAnimation] = useState("");

  // 나타나고 사라지는 애니메이션 효과
  useEffect(() => {
    if (saved) {
      let timer = setTimeout(() => {
        setSavedAnimation("opacity-0 translate-y-0");
      }, 4000);
      let timer2 = setTimeout(() => {
        setSavedAnimation(
          "opacity-100 translate-y-[-160px] lg:translate-y-[-120px]"
        );
      }, 500);

      return () => {
        clearTimeout(timer);
        clearTimeout(timer2);
      };
    }
  }, [saved]);
  
  // 중복되는 Path
  const DuplicatedPath = ({d}:any) =>{
    return<path
    d={d}
    stroke="#21ce8f"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  }

  return (
    <div
      className={`transition duration-[1500ms] ease-in-out fixed bottom-[-80px] right-10 ${
        !saved ? "opacity-0" : savedAnimation
      }`}
    >
      <div className="bg-black border border-slate-600 w-max h-20 shadow-lg rounded-md gap-4 p-4 flex flex-row items-center justify-center">
        <section className="w-6 h-full flex flex-col items-center justify-start">
          <svg
            width="100%"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <DuplicatedPath d={"M7.5 13.25C10.9518 13.25 13.75 10.4518 13.75 7C13.75 3.54822 10.9518 0.75 7.5 0.75C4.04822 0.75 1.25 3.54822 1.25 7C1.25 10.4518 4.04822 13.25 7.5 13.25Z"} />
            <DuplicatedPath d={"M4.3269 7.96143C4.80767 9.69219 6.73075 10.7499 8.46152 10.2691C9.51921 9.8845 10.3846 9.01912 10.6731 7.96143"} />
            <DuplicatedPath d={"M10.0481 5.55767C9.91536 5.55767 9.80774 5.45005 9.80774 5.31729C9.80774 5.18453 9.91536 5.0769 10.0481 5.0769"} />
            <DuplicatedPath d={"M10.0481 5.5577C10.1809 5.5577 10.2885 5.45008 10.2885 5.31732C10.2885 5.18456 10.1809 5.07693 10.0481 5.07693"} />
            <DuplicatedPath d={"M4.95193 5.55767C4.81917 5.55767 4.71155 5.45005 4.71155 5.31729C4.71155 5.18453 4.81917 5.0769 4.95193 5.0769"} />
            <DuplicatedPath d={"M4.95197 5.5577C5.08473 5.5577 5.19235 5.45008 5.19235 5.31732C5.19235 5.18456 5.08473 5.07693 4.95197 5.07693"} />
          </svg>
        </section>
        <section className="h-full flex flex-col items-start justify-end gap-1">
          <h1 className="text-base font-semibold text-white antialiased">
            Successfully saved!
          </h1>
          <p className="text-sm font-medium text-zinc-400 antialiased">
            Check your 'Watch Later'
          </p>
        </section>
        <section className="w-5 h-full flex flex-col items-center justify-start">
          <button
            onClick={() => setSavedAnimation("invisible")}
            className="text-xl text-white font-semibold antialiased"
          >
            <AiOutlineCloseSquare />
          </button>
        </section>
      </div>
    </div>
  );
}

export default SavedNotification;

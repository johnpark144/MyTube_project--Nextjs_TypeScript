import { MdArrowUpward } from "react-icons/md";

function ExpArrowSearch({ showAnimations, arrowTimer }: ExpArrowProps) {
  // 중복된 클래스이름
  const classNameFunction = (
    w: string,
    h: string,
    toWhere: "r" | "t",
    timerNum1: number,
    timerNum2: number,
    timerNum3: number
  ) => {
    return `absolute w-${w} h-${h} rounded-2xl bg-gradient-to-${toWhere}
 from-gray-300 via-gray-500 to-gray-900 transition-all duration-1000
 ${
   showAnimations &&
   arrowTimer > 6 &&
   (arrowTimer % 6 === timerNum1 ||
     arrowTimer % 6 === timerNum2 ||
     arrowTimer % 6 === timerNum3)
     ? "opacity-100 blur-none"
     : "opacity-0 blur-md"
 }`;
  };

  return (
    <div className="hidden lg:block">
      {/* 설명 box */}
      <h1
        className={`absolute top-0 left-0 lg:top-44 lg:left-96 lg:text-2xl
        ${
          arrowTimer < 5
            ? "transition-all duration-1000 delay-2000 ease-in-out"
            : ""
        }
        ${
          showAnimations
            ? "p-2 opacity-100 blur-none bg-gray-200 bg-opacity-25 rounded-2xl animate-bounce z-20"
            : "opacity-0 blur-2xl"
        }`}
      >
        Search any videos here
      </h1>
      {/* 위로 향하는 점선 */}
      <span
        style={{ top: "160px", left: "480px" }}
        className={classNameFunction("2", "4", "r", 0, 1, 2)}
      >
        &nbsp;
      </span>
      <span
        style={{ top: "128px", left: "480px" }}
        className={classNameFunction("2", "4", "r", 1, 2, 3)}
      >
        &nbsp;
      </span>
      <span
        style={{ top: "96px", left: "480px" }}
        className={classNameFunction("2", "4", "r", 2, 3, 4)}
      >
        &nbsp;
      </span>

      {/* 화살표 */}
      <span
        style={{ top: "48px", left: "458px" }}
        className={`text-5xl z-50 ${classNameFunction("0", "0", "t", 3, 4, 5)}`}
      >
        <MdArrowUpward />
      </span>
    </div>
  );
}

export default ExpArrowSearch;

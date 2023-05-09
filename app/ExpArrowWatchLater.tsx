import { MdArrowUpward } from "react-icons/md";

function ExpArrowWatchLater({
  windowWidth,
  showAnimations,
  arrowTimer,
}: ExpArrowProps) {
  if (!windowWidth) {
    windowWidth = 0;
  }

  // 중복된 클래스이름
  const classNameFunction = (
    w: string,
    h: string,
    toWhere: "r" | "t",
    windowWidthLimit: number,
    timerNum1: number,
    timerNum2: number,
    timerNum3: number,
    timerNum4: number
  ) => {
    return `absolute w-${w} h-${h} rounded-2xl bg-gradient-to-${toWhere}
  from-gray-300 via-gray-500 to-gray-900 transition-all duration-1000
  ${
    showAnimations &&
    (windowWidth || 0) > windowWidthLimit &&
    arrowTimer > 6 &&
    (arrowTimer % 10 === timerNum1 ||
      arrowTimer % 10 === timerNum2 ||
      arrowTimer % 10 === timerNum3 ||
      arrowTimer % 10 === timerNum4)
      ? "opacity-100 blur-none"
      : "opacity-0 blur-md"
  }`;
  };

  return (
    <div className="hidden lg:block">
      {/* 설명 box */}
      <div
        className={`absolute top-0 left-0 lg:top-56 lg:left-[800px] lg:text-2xl
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
        <h1>Save any videos that</h1>
        <h1>you want to watch again here</h1>
      </div>
      {/* 오른쪽으로 향하는 점선 */}
      <span
        style={{
          top: "255px",
          left: "99%",
          marginLeft: "-600px",
          fontSize: "3px",
        }}
        className={classNameFunction("10", "1", "r", 1770, 4, 5, 6, 7)}
      >
        &nbsp;
      </span>
      <span
        style={{
          top: "255px",
          left: "99%",
          marginLeft: "-500px",
          fontSize: "3px",
        }}
        className={classNameFunction("10", "1", "r", 1660, 5, 6, 7, 8)}
      >
        &nbsp;
      </span>
      <span
        style={{
          top: "255px",
          left: "99%",
          marginLeft: "-400px",
          fontSize: "3px",
        }}
        className={classNameFunction("10", "1", "r", 1555, 6, 7, 8, 9)}
      >
        &nbsp;
      </span>
      <span
        style={{
          top: "255px",
          left: "99%",
          marginLeft: "-300px",
          fontSize: "3px",
        }}
        className={classNameFunction("10", "1", "r", 1455, 7, 8, 9, 0)}
      >
        &nbsp;
      </span>
      <span
        style={{
          top: "255px",
          left: "99%",
          marginLeft: "-200px",
          fontSize: "3px",
        }}
        className={classNameFunction("10", "1", "r", 1275, 8, 9, 0, 1)}
      >
        &nbsp;
      </span>

      {/* 위로 향하는 점선 */}
      <span
        style={{ top: "215px", left: "99%", marginLeft: "-165px" }}
        className={classNameFunction("2", "8", "r", 0, 9, 0, 1, 2)}
      >
        &nbsp;
      </span>
      <span
        style={{ top: "155px", left: "99%", marginLeft: "-165px" }}
        className={classNameFunction("2", "8", "r", 0, 0, 1, 2, 3)}
      >
        &nbsp;
      </span>
      <span
        style={{ top: "95px", left: "99%", marginLeft: "-165px" }}
        className={classNameFunction("2", "8", "r", 0, 1, 2, 3, 4)}
      >
        &nbsp;
      </span>

      {/* 화살표 */}
      <span
        style={{ top: "50px", left: "99%", marginLeft: "-188px" }}
        className={`text-5xl ${classNameFunction(
          "0",
          "0",
          "t",
          0,
          2,
          3,
          4,
          5
        )}`}
      >
        <MdArrowUpward />
      </span>
    </div>
  );
}

export default ExpArrowWatchLater;

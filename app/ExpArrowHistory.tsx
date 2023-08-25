import { MdArrowUpward } from 'react-icons/md';

function ExpArrowHistory({
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
    toWhere: 'r' | 't',
    windowWidthLimit: number,
    timerNum1: number,
    timerNum2: number,
    timerNum3: number,
    timerNum4: number,
    timerNum5: number
  ) => {
    return `absolute w-${w} h-${h} rounded-2xl bg-gradient-to-${toWhere}
    from-gray-300 via-gray-500 to-gray-900 z-10 transition-all duration-1000
    ${
      showAnimations &&
      (windowWidth || 0) > windowWidthLimit &&
      arrowTimer > 6 &&
      (arrowTimer % 14 === timerNum1 ||
        arrowTimer % 14 === timerNum2 ||
        arrowTimer % 14 === timerNum3 ||
        arrowTimer % 14 === timerNum4 ||
        arrowTimer % 14 === timerNum5)
        ? 'opacity-100 blur-none'
        : 'opacity-0 blur-md'
    }`;
  };

  return (
    <div className='hidden lg:block'>
      {/* 설명 box */}
      <div
        className={`absolute top-0 left-0 lg:top-[450px] lg:left-[800px] lg:text-2xl
          ${
            arrowTimer < 5
              ? 'transition-all duration-1000 delay-2000 ease-in-out'
              : ''
          }
      ${
        showAnimations
          ? 'p-2 opacity-100 blur-none bg-gray-400 bg-opacity-25 rounded-2xl animate-bounce z-20'
          : 'opacity-0 blur-2xl'
      }`}
      >
        <h1>All videos you watched</h1>
        <h1>are saved here</h1>
      </div>
      {/* 오른쪽으로 향하는 점선 */}
      <span
        style={{
          top: '470px',
          left: '95%',
          marginLeft: '-700px',
          width: '30px',
          height: '3px',
        }}
        className={classNameFunction('10', '1', 'r', 1770, 3, 4, 5, 6, 7)}
      >
        &nbsp;
      </span>
      <span
        style={{
          top: '470px',
          left: '95%',
          marginLeft: '-590px',
          width: '30px',
          height: '3px',
        }}
        className={classNameFunction('10', '1', 'r', 1660, 4, 5, 6, 7, 8)}
      >
        &nbsp;
      </span>
      <span
        style={{
          top: '470px',
          left: '95%',
          marginLeft: '-480px',
          width: '30px',
          height: '3px',
        }}
        className={classNameFunction('10', '1', 'r', 1555, 5, 6, 7, 8, 9)}
      >
        &nbsp;
      </span>
      <span
        style={{
          top: '470px',
          left: '95%',
          marginLeft: '-370px',
          width: '30px',
          height: '3px',
        }}
        className={classNameFunction('10', '1', 'r', 1455, 6, 7, 8, 9, 10)}
      >
        &nbsp;
      </span>
      <span
        style={{
          top: '470px',
          left: '95%',
          marginLeft: '-260px',
          width: '30px',
          height: '3px',
        }}
        className={classNameFunction('10', '1', 'r', 1355, 7, 8, 9, 10, 11)}
      >
        &nbsp;
      </span>
      <span
        style={{
          top: '470px',
          left: '95%',
          marginLeft: '-150px',
          width: '30px',
          height: '3px',
        }}
        className={classNameFunction('10', '1', 'r', 1255, 8, 9, 10, 11, 12)}
      >
        &nbsp;
      </span>
      <span
        style={{
          top: '470px',
          left: '95%',
          marginLeft: '-40px',
          width: '30px',
          height: '3px',
        }}
        className={classNameFunction('10', '1', 'r', 1155, 9, 10, 11, 12, 13)}
      >
        &nbsp;
      </span>

      {/* 위로 향하는 점선 */}
      <span
        style={{ top: '395px', left: '99%', marginLeft: '-45px' }}
        className={classNameFunction('2', '10', 'r', 0, 10, 11, 12, 13, 0)}
      >
        &nbsp;
      </span>
      <span
        style={{ top: '320px', left: '99%', marginLeft: '-45px' }}
        className={classNameFunction('2', '10', 'r', 0, 11, 12, 13, 0, 1)}
      >
        &nbsp;
      </span>
      <span
        style={{ top: '245px', left: '99%', marginLeft: '-45px' }}
        className={classNameFunction('2', '10', 'r', 0, 12, 13, 0, 1, 2)}
      >
        &nbsp;
      </span>
      <span
        style={{ top: '170px', left: '99%', marginLeft: '-45px' }}
        className={classNameFunction('2', '10', 'r', 0, 13, 0, 1, 2, 3)}
      >
        &nbsp;
      </span>
      <span
        style={{ top: '95px', left: '99%', marginLeft: '-45px' }}
        className={classNameFunction('2', '10', 'r', 0, 0, 1, 2, 3, 4)}
      >
        &nbsp;
      </span>

      {/* 화살표 */}
      <span
        style={{ top: '50px', left: '99%', marginLeft: '-68px' }}
        className={`text-5xl ${classNameFunction(
          '0',
          '0',
          't',
          0,
          1,
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

export default ExpArrowHistory;

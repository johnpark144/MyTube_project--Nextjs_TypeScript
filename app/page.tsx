'use client';
import { useState, useEffect, useRef } from 'react';
import TV_Letters from './TV_Letters';
import ExpArrowHome from './ExpArrowHome';
import ExpArrowSearch from './ExpArrowSearch';
import ExpArrowVideo from './ExpArrowVideo';
import ExpArrowWatchLater from './ExpArrowWatchLater';
import ExpArrowHistory from './ExpArrowHistory';
import ExpForSmallSize from './ExpForSmallSize';

function HomePage() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [showAnimations, setShowAnimations] = useState(false);

  const arrowTimerRef = useRef(0);
  const [arrowTimer, setArrowTimer] = useState(0);

  // width 초기값
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setShowAnimations(true);

    const timer2 = setInterval(() => {
      arrowTimerRef.current += 1;
      setArrowTimer(arrowTimerRef.current);
    }, 500);

    return () => clearInterval(timer2);
  }, []);

  // width값 실시간 변경
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
  }

  return (
    <div className='w-full'>
      {/* TV, Welcome, Let's go, Logo */}
      <TV_Letters
        windowWidth={windowWidth}
        arrowTimer={arrowTimer}
        showAnimations={showAnimations}
      />

      {/* 설명과 화살표 */}
      <ExpArrowHome
        windowWidth={windowWidth}
        showAnimations={showAnimations}
        arrowTimer={arrowTimer}
      />
      <ExpArrowSearch
        windowWidth={windowWidth}
        showAnimations={showAnimations}
        arrowTimer={arrowTimer}
      />
      <ExpArrowVideo
        windowWidth={windowWidth}
        showAnimations={showAnimations}
        arrowTimer={arrowTimer}
      />
      <ExpArrowWatchLater
        windowWidth={windowWidth}
        showAnimations={showAnimations}
        arrowTimer={arrowTimer}
      />
      <ExpArrowHistory
        windowWidth={windowWidth}
        showAnimations={showAnimations}
        arrowTimer={arrowTimer}
      />
      {/* 작은화면용 설명 */}
      <ExpForSmallSize
        showAnimations={showAnimations}
        arrowTimer={arrowTimer}
      />
    </div>
  );
}

export default HomePage;

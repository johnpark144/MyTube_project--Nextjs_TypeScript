'use client';
import { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import DroppableOfVideo from './DroppableOfVideo';
import DroppableOfWatchLater from './DroppableOfWatchLater';

function Video({ genreOrSearch, data }: VideoProps) {
  const [showWatchLater, setShowWatchLater] = useState(false);

  const watchLater = JSON.parse(localStorage.getItem('watchLater') || '[]');
  const [watchLaterData, setWatchLaterData] = useState(watchLater);

  // 드래그앤 드롭 로직
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    // 드롭 로직을 위한 변수들
    let add, // 이동할 내용 복사용
      dataClone = data, // data 복사본
      watchLaterDataClone = watchLaterData; // watchLaterData 복사본

    // 재대로된 드롭 (source부분)
    if (source.droppableId === 'videos') {
      add = dataClone[source.index];
    } else {
      add = watchLaterDataClone[source.index];
      watchLaterDataClone.splice(source.index, 1);
    }

    // 재대로된 드롭 (destination부분)
    if (destination?.droppableId === 'watchLater') {
      watchLaterDataClone
        ? watchLaterDataClone.splice(destination.index, 0, add)
        : (watchLaterDataClone = [add]);
    }

    // 복사본을 원본에 삽입후 localStorage에 저장
    setWatchLaterData(watchLaterDataClone);
    localStorage.setItem(
      'watchLater',
      JSON.stringify([...watchLaterDataClone])
    );
  };

  return (
    <>
      <div className='flex mt-4 sm:mb-16'>
        <div className='flex h-[45px] text-2xl sm:text-4xl mx-16'>
          <h1 className='italic border-b-2 border-amber-500 border-double dark:text-amber-500'>
            {genreOrSearch ? genreOrSearch.replace(/%20/g, ' ') : 'All'}&nbsp;
          </h1>
          <h1>Videos</h1>
        </div>
        {/* SeeWatchLater 버튼 */}
        <button
          type='button'
          onClick={() => setShowWatchLater(!showWatchLater)}
          className='invisible py-2 px-4 w-40 bg-gradient-to-r from-green-400 to-blue-500
          text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md
          focus:outline-none focus:ring-2 focus:ring-offset-2 lg:visible'
        >
          {showWatchLater ? 'Close' : 'See'} Watch later
        </button>
      </div>

      {/* DragDrop범위 */}
      <DragDropContext onDragEnd={onDragEnd}>
        {/* 비디오들 */}
        <div className='flex mt-4'>
          <DroppableOfVideo
            data={data}
            showWatchLater={showWatchLater}
            watchLaterData={watchLaterData}
          />
          {/* WatchLater */}
          {showWatchLater && (
            <DroppableOfWatchLater watchLaterData={watchLaterData} />
          )}
        </div>
      </DragDropContext>
    </>
  );
}

export default Video;

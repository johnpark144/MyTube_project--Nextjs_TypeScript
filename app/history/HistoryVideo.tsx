'use client';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import TimeAgoCreator from '../video/TimeAgoCreator';
import { getVideoForDetail } from '../../store/store';
import { RiCloseLine } from 'react-icons/ri';
import { BsDot } from 'react-icons/bs';

function HistoryVideo({ data }: HistoryVideoProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [delData, setDelData] = useState<Array<DataArr>>();

  // Single Hisory 삭제
  const deleteVideo = (idx: number) => {
    const dataClone = delData ? [...delData] : [...data]; // 삭제한적 있는경우 delData를 가져옴
    dataClone.splice(idx, 1);
    localStorage.setItem('history', JSON.stringify([...dataClone]));
    setDelData(dataClone);
  };

  // All Hisory 삭제
  const deleteAllVideo = () => {
    const deleteConfirm = confirm('You wanna delete all history?');
    if (deleteConfirm) {
      localStorage.setItem('history', JSON.stringify([]));
      setDelData([]);
    }
  };

  return (
    <>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl sm:text-4xl sm:my-8 ml-16'>History</h1>
        <button
          onClick={deleteAllVideo}
          className='w-28 h-14 text-xl sm:w-44 sm:h-20 sm:text-2xl my-2 mr-16 border-solid border-2 border-gray-300 
        rounded-2xl hover:border-red-400 hover:bg-gray-200 hover:dark:bg-gray-500'
        >
          Delete All History
        </button>
      </div>
      {/* 비디오들 */}
      <div className='flex'>
        <div className='flex justify-evenly flex-wrap'>
          {(delData ? delData : data)?.map((arr: DataArr, idx: number) => {
            const tempThumbnailUrl = arr.snippet.thumbnails.default?.url;
            const thumbnailUrl =
              tempThumbnailUrl?.charAt(5) === ' '
                ? tempThumbnailUrl?.slice(0, 5) +
                  ':' +
                  tempThumbnailUrl?.slice(8)
                : tempThumbnailUrl;
            return (
              <div key={arr.id.videoId || arr.etag} className='flex relative'>
                <div
                  onClick={() => {
                    dispatch(getVideoForDetail(arr));
                    router.push(`/video/detail/${arr.id.videoId}`);
                  }}
                  className='w-[330px] h-[330px] m-2 px-1 sm:w-[384px] sm:h-[490px] sm:m-4 cursor-pointer flex flex-col justify-center hover:md:scale-110'
                >
                  {/* 썸네일 */}
                  <div className='relative w-[320px] h-[180px] sm:w-[383px] sm:h-[330px]'>
                    <Image
                      src={thumbnailUrl}
                      fill
                      alt={`LOGO_${arr.snippet.title}`}
                      className='rounded-2xl'
                    />
                  </div>
                  <div className='sm:p-3 mt-3'>
                    {/* 동영상 타이틀 */}
                    <h1 className='text-xl sm:text-2xl'>
                      {arr.snippet.title
                        .replace(/&quot;/g, '"')
                        .replace(/&#39;/g, "'")}
                    </h1>{' '}
                    {/* 채널명, TimeAgo */}
                    <h3 className='flex text-gray-500 mt-2'>
                      {arr.snippet.channelTitle}&nbsp;{<BsDot />}&nbsp;
                      {<TimeAgoCreator time={arr.snippet.publishedAt} />}
                    </h3>
                  </div>
                </div>
                {/* 삭제 버튼 */}
                <div
                  className='flex justify-center absolute right-[28px] top-[47px] sm:static p-2 w-10 h-10 rounded-full text-2xl sm:w-12 sm:h-12 sm:text-3xl cursor-pointer
                    bg-gray-100 sm:bg-white hover:bg-gray-200'
                  onClick={() => deleteVideo(idx)}
                >
                  <RiCloseLine />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HistoryVideo;

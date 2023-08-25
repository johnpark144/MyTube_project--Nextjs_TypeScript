'use client';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import TimeAgoCreator from '../video/TimeAgoCreator';
import { getVideoForDetail } from '../../store/store';
import { RiCloseLine } from 'react-icons/ri';
import { BsDot } from 'react-icons/bs';

function WatchLaterVideo({ data }: WatchLaterVideoProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [delData, setDelData] = useState<Array<DataArr>>();

  // WatchLater 삭제
  const deleteVideo = (idx: number) => {
    const dataClone = delData ? [...delData] : [...data]; // 삭제한적 있는경우 delData를 가져옴
    dataClone.splice(idx, 1);
    localStorage.setItem('watchLater', JSON.stringify([...dataClone])); // 삭제하고 남은 watchLater 데이터를 localStorage에 다시저장
    setDelData(dataClone); // 실시간으로 적용
  };

  return (
    <>
      <h1 className='text-2xl sm:text-4xl my-4 sm:my-8 ml-16'>Warch Later</h1>
      {/* 비디오들 */}
      <div className='flex'>
        <div className='flex justify-evenly flex-wrap'>
          {(delData ? delData : data)?.map(
            // 삭제한 데이터가 있는경우 그 array를 실시간으로 적용
            (arr: DataArr, idx: number) => {
              const tempThumbnailUrl =
                arr.snippet.thumbnails.high?.url ||
                arr.snippet.thumbnails.default?.url;
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
            }
          )}
        </div>
      </div>
    </>
  );
}

export default WatchLaterVideo;

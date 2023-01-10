import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import TimeAgoCreator from './../../TimeAgoCreator';
import { getVideoForDetail } from '../../../../store/store';
import { BsDot } from 'react-icons/bs';

function RecommendedVideoComponent({ data, videoId }:RecommendedVideoComponentProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <>
      {data?.map(
        (
          arr: DataArr // 현재 동영상과 중복되는 것 제거
        ) =>
          arr.id.videoId !== videoId ? (
            <div
              key={arr.id.videoId}
              onClick={() => {
                dispatch(getVideoForDetail(arr));
                router.push(`/video/detail/${arr.id.videoId}`);
              }}
              className={`flex w-full 2xl:w-96 h-[120px] my-2 cursor-pointer
              border-solid border-2 rounded-2xl border-gray-100 items-center
                     hover:bg-gray-100 hover:dark:text-black`}
            >
              {/* 썸네일 */}
              <div className="flex w-28 h-28 items-center">
                <Image
                  src={arr.snippet.thumbnails.high.url}
                  height={75}
                  width={180}
                  alt={`LOGO_${arr.snippet.title}`}
                  className="rounded-2xl"
                />
              </div>
              <div className="p-3 w-64">
                {/* 동영상 타이틀 */}
                <h1 className="text-base">
                  {(arr.snippet.title.length > 40
                    ? arr.snippet.title.slice(0, 40) + "..."
                    : arr.snippet.title)
                        .replace(/&amp;/g, "&")
                        .replace(/&quot;/g, '"')
                        .replace(/&#39;/g, "'")}
                </h1>{" "}
                {/* 채널명, TimeAgo */}
                <h3 className="flex text-gray-500 mt-1">
                  {arr.snippet.channelTitle.length > 11
                    ? arr.snippet.channelTitle.slice(1, 11) + "..."
                    : arr.snippet.channelTitle}
                  {<BsDot />}
                  {<TimeAgoCreator time={arr.snippet.publishedAt} />}
                </h3>
              </div>
            </div>
          ) : (
            ""
          )
      )}
    </>
  )
}

export default RecommendedVideoComponent

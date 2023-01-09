"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Image from "next/image";
import TimeAgoCreator from "../video/TimeAgoCreator";
import { getVideoForDetail } from "../../store/store";
import { RiCloseLine } from "react-icons/Ri";
import { BsDot } from "react-icons/Bs";

function HistoryVideo({ data }: HistoryVideoProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [delData, setDelData] = useState<Array<DataArr>>();

  // Single Hisory 삭제
  const deleteVideo = (idx: number) => {
    const dataClone = delData ? [...delData] : [...data]; // 삭제한적 있는경우 delData를 가져옴
    dataClone.splice(idx, 1);
    localStorage.setItem("history", JSON.stringify([...dataClone])); // 삭제하고 남은 history 데이터를 localStorage에 다시저장
    setDelData(dataClone); // 실시간으로 적용
  };

  // All Hisory 삭제
  const deleteAllVideo = () => {
    const deleteConfirm = confirm("You wanna delete all history?");
    if (deleteConfirm) {
      localStorage.setItem("history", JSON.stringify([]));
      setDelData([]);
    }
  };

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-4xl my-8 ml-16">History</h1>
        <button
          onClick={deleteAllVideo}
          className="w-44 h-20 text-2xl my-2 mr-16 border-solid border-2 border-gray-300 
        rounded-2xl hover:border-red-400 hover:bg-gray-200 hover:dark:bg-gray-500"
        >
          Delete All History
        </button>
      </div>
      {/* 비디오들 */}
      <div className="flex">
        <div className="flex justify-evenly flex-wrap">
          {(delData ? delData : data)?.map(
            // 삭제한 데이터가 있는경우 그 array를 실시간으로 적용
            (
              arr: DataArr,
              idx: number
            ) => {
              return (
                <div key={arr.id.videoId || arr.etag} className="flex">
                  <div
                    onClick={() => {
                      dispatch(getVideoForDetail(arr));
                      router.push(`/video/detail/${arr.id.videoId}`);
                    }}
                    className="w-96 h-[480px] m-4 cursor-pointer hover:scale-110"
                  >
                    {/* 썸네일 */}
                    <div>
                      <Image
                        src={arr.snippet.thumbnails.high.url}
                        height={230}
                        width={383}
                        alt={`LOGO_${arr.snippet.title}`}
                        className="rounded-2xl"
                      />
                    </div>
                    <div className="p-3 mt-3">
                      {/* 동영상 타이틀 */}
                      <h1 className="text-2xl">
                        {arr.snippet.title
                          .replace(/&quot;/g, '"')
                          .replace(/&#39;/g, "'")}
                        {/* 가끔씩 "대신 &quot;나 &#39;가 출력되는경우가 있음 */}
                      </h1>{" "}
                      {/* 채널명, TimeAgo */}
                      <h3 className="flex text-gray-500 mt-2">
                        {arr.snippet.channelTitle}&nbsp;{<BsDot />}&nbsp;
                        {<TimeAgoCreator time={arr.snippet.publishedAt} />}
                      </h3>
                    </div>
                  </div>
                  {/* 삭제버튼 */}
                  <div
                    className="flex justify-center p-2 w-12 h-12 rounded-full text-3xl cursor-pointer hover:bg-gray-200"
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

export default HistoryVideo;

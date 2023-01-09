import { useState } from "react";
import { debounce } from "lodash";
import { Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { getVideoForDetail, getArrDataForDetail } from "../../store/store";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { BsDot } from "react-icons/Bs";
import TimeAgoCreator from "./TimeAgoCreator";

function DraggableInDroppableOfVideo({
  arr,
  idx,
  showWatchLater,
  watchLaterData,
  data,
}: DraggableInDroppableOfVideoProps) {
  const dispatch = useDispatch();
  const router = useRouter();

  const [videoOn, setVideoOn] = useState(false);
  // 마우스오버되면 2초 타이머 후 비디오 재생하는 함수
  const debouncedHandleMouseEnter = debounce(() => {
    setVideoOn(true);
  }, 2000);
  // 마우스떠나면 타이머 취소 하고 비디오 정지하는 함수
  const handlOnMouseLeave = () => {
    debouncedHandleMouseEnter.cancel();
    setVideoOn(false);
  };
  return (
    <Draggable
      draggableId={arr?.id.videoId?.toString()}
      key={arr.id.videoId || arr.etag}
      index={idx}
      isDragDisabled={!showWatchLater}
    >
      {(provided, snapshot) => (
        <div
          onMouseLeave={handlOnMouseLeave}
          className={`w-[367px] h-[400px] mb-24 cursor-pointer hover:scale-110 rounded-2xl 
                            ${
                              Boolean(
                                (watchLaterData?.filter(
                                  (watchLaterArr: { id: { videoId: any } }) =>
                                    watchLaterArr.id.videoId === arr.id.videoId
                                ))[0]
                              )
                                ? "hidden"
                                : ""
                            }
                              ${
                                snapshot.isDragging
                                  ? "border-solid border-2 border-gray-100 shadow-2xl"
                                  : ""
                              }`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {/* 미리보기와 썸네일 */}
          <div
            onClick={() => {
              dispatch(getVideoForDetail(arr)); // 비디오
              dispatch(getArrDataForDetail(data)); // 관련 여러 동영상
              router.push(`/video/detail/${arr.id.videoId}`);
            }}
          >
            <div>
              {videoOn && !showWatchLater ? (
                <iframe
                  id="ytplayer"
                  data-type="text/html"
                  width="383"
                  height="230"
                  src={`https://www.youtube.com/embed/${arr.id.videoId}?autoplay=1&disablekb=1&mute=1&controls=0&showinfo=0&rel=0&fs=0&autohide=1`}
                  frameBorder="0"
                  allowFullScreen={false}
                  style={{ pointerEvents: "none" }}
                  className="rounded-2xl"
                ></iframe>
              ) : (
                <div className="relative w-[383px] h-[230px]">
                  <Image
                    src={arr.snippet.thumbnails.high.url}
                    fill
                    quality={100}
                    alt={`LOGO_${arr.snippet.title}`}
                    className="rounded-2xl"
                    onMouseEnter={debouncedHandleMouseEnter}
                  />
                </div>
              )}
            </div>
          </div>
          <div
            onClick={() => {
              dispatch(getVideoForDetail(arr)); // 비디오
              dispatch(getArrDataForDetail(data)); // 관련 여러 동영상
              router.push(`/video/detail/${arr.id.videoId}`);
            }}
            className="p-3 mt-3"
          >
            {/* 동영상 타이틀 */}
            <h1 className="text-2xl">
              {arr.snippet.title
                .replace(/&amp;/g, "&")
                .replace(/&quot;/g, '"')
                .replace(/&#39;/g, "'")}
              {/* 가끔씩 "대신 &quot;나 &#39;가 출력되는경우가 있음 */}
            </h1>{" "}
          </div>
          {/* 채널명, TimeAgo */}
          <div
            onClick={() => router.push(`channel/${arr.snippet.channelId}`)}
            className="p-3"
          >
            <h3 className="flex text-gray-500 mt-2">
              {arr.snippet.channelTitle}&nbsp;{<BsDot />}&nbsp;
              {<TimeAgoCreator time={arr.snippet.publishedAt} />}
            </h3>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default DraggableInDroppableOfVideo;

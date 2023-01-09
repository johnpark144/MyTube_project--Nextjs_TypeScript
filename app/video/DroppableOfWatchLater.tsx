"use client";
import { useDispatch } from "react-redux";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { useRouter } from "next/navigation";
import Image from "next/image";
import TimeAgoCreator from "./TimeAgoCreator";
import { getVideoForDetail } from "../../store/store";
import { BsDot } from "react-icons/Bs";

function DroppableOfWatchLater({ watchLaterData }: DroppableOfWatchLaterProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <Droppable droppableId="watchLater">
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={`hidden ${
            !watchLaterData[0] ? "h-96 w-[390px]" : ""
          } mr-5 p-2 rounded-lg border-4 bg-gray-50 dark:bg-gray-500 lg:block ${
            snapshot.isDraggingOver
              ? "border-dashed border-red-500 bg-red-100 dark:bg-red-300"
              : "border-solid border-gray-100"
          }`}
        >
          <h1 className="text-2xl w-96">WatchLater</h1>
          <h1 className="text-2xl w-96 text-gray-400">
            (Drop any videos into this zone)
          </h1>
          {watchLaterData?.map(
            (
              arr: DataArr,
              idx: number
            ) => (
              <Draggable
                draggableId={arr?.id.videoId.toString()}
                key={arr.id.videoId || arr.etag}
                index={idx}
              >
                {(provided, snapshot) => (
                  <div
                    onClick={() => {
                      dispatch(getVideoForDetail(arr));
                      router.push(`/video/detail/${arr.id.videoId}`);
                    }}
                    className={`flex w-96 h-[120px] my-2 cursor-pointer border-solid border-2 rounded-2xl border-gray-100 items-center
                     hover:bg-gray-100 hover:dark:text-black ${
                       snapshot.isDragging ? "bg-gray-200 shadow-2xl" : ""
                     }`}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
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
                        {(arr.snippet.title.length > 70
                          ? arr.snippet.title.slice(1, 70) + "..."
                          : arr.snippet.title
                        )
                          .replace(/&amp;/g, "&")
                          .replace(/&quot;/g, '"')
                          .replace(/&#39;/g, "'")}
                      </h1>{" "}
                      {/* 채널명, TimeAgo */}
                      <h3 className="flex text-gray-500 mt-1 dark:text-gray-600">
                        {arr.snippet.channelTitle.length > 27
                          ? arr.snippet.channelTitle.slice(1, 13) + "..."
                          : arr.snippet.channelTitle}
                        {<BsDot />}
                        {<TimeAgoCreator time={arr.snippet.publishedAt} />}
                      </h3>
                    </div>
                  </div>
                )}
              </Draggable>
            )
          )}
          {provided.placeholder}{" "}
          {/* 드래그해도 draggable한 영역을 그대로 유지하게함 */}
        </div>
      )}
    </Droppable>
  );
}

export default DroppableOfWatchLater;

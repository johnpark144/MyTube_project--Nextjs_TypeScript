import { useRouter } from "next/navigation";
import { MdPlaylistAdd } from "react-icons/Md";
import TimeAgoCreator from "./../../TimeAgoCreator";

function VideoDetail({ title, channel, channelId, video, saved, setSaved, videoId, time, publishedAt, description }: VideoDetailProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center p-1 sm:p-6 lg:inline ">
      {/*  동영상  */}
      <iframe
        id="ytplayer"
        data-type="text/html"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allowFullScreen={true}
        className={
          "w-[455px] h-[320px] sm:w-[570px] sm:h-[430px] md:w-[700px] md:h-[500px] xl:w-[800px] xl:h-[530px] 2xl:w-[980px] 2xl:h-[630px]"
        }
      ></iframe>
      {/* 타이틀, 타이틀 로딩중*/}
      {title ? (
        <div className=" font-bold text-3xl md:text-4xl my-2 xl:w-[700px] 2xl:w-[1000px]">
          {title
            ?.replace(/&amp;/g, "&")
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")}
        </div>
      ) : (
        <div className="animate-pulse flex space-x-4">
          <div
            className="my-2 h-6 w-[400px] bg-slate-700 rounded-2xl
              sm:h-8 sm:w-[550px] md:w-[650px] lg:w-[700px] xl:w-[800px] "
          />
        </div>
      )}
      <div className="flex flex-col sm:flex-row sm:justify-between">
        {/* 채널명, 채널명 로딩중 */}
        {channel ? (
          <button
            onClick={() => router.push(`channel/${channelId}`)}
            className=" text-left text-xl md:text-2xl"
          >
            {channel}
          </button>
        ) : (
          <div className="animate-pulse flex space-x-4">
            <div className="h-6 my-2 w-32 bg-slate-700 rounded-2xl" />
          </div>
        )}
        {/* Save버튼, Save버튼 로딩중 */}
        {video ? (
          <button
            disabled={saved}
            onClick={() => {
              setSaved(true);
              let watchLaterStorage = JSON.parse(
                localStorage.getItem("watchLater") || "[]"
              );
              watchLaterStorage = watchLaterStorage.filter(
                (arr: DataArr) => arr.id.videoId !== videoId
              );
              localStorage.setItem(
                "watchLater",
                JSON.stringify([video, ...watchLaterStorage])
              );
            }}
            className={`static flex text-2xl sm:ml-2 rounded-2xl bg-gray-200 w-28 justify-center dark:bg-gray-500 ${
              saved ? "text-gray-300" : ""
            }`}
          >
            <MdPlaylistAdd /> {saved ? "Saved" : "Save"}
          </button>
        ) : (
          <div className="animate-pulse flex space-x-4">
            <div className="h-8 my-2 w-28 bg-slate-700 rounded-2xl" />
          </div>
        )}
      </div>
      {/* 시간, 설명, Show more, 로딩중 */}
      <div className="text-base my-6 p-4 bg-gray-200 rounded-2xl w-full lg:w-[700px] xl:w-[1000px] dark:bg-gray-500">
        {time ? (
          <>
            <div className="text-lg lg:text-xl">
              {time}(<TimeAgoCreator time={publishedAt} />)
            </div>
            <h3 className="text-lg">{description}</h3>
            <a
              href={`https://www.youtube.com/watch?v=${videoId}`}
              className="text-xl text-bold text-gray-600"
              target="_blank"
            >
              Show more
            </a>
          </>
        ) : (
          <div className="animate-pulse">
            <div className="h-4 my-2 w-64 lg:w-[300px] bg-slate-700 rounded-2xl" />
            <div className="h-4 my-2 w-80 lg:w-[640px] bg-slate-700 rounded-2xl" />
          </div>
        )}
      </div>
    </div>
  );
}

export default VideoDetail;

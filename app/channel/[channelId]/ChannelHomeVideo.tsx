import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Image from "next/image";
import useFetchData from './../../../utils/useFetchData';
import TimeAgoCreator from "./../../video/TimeAgoCreator";
import { BsDot } from "react-icons/Bs";
import { getVideoForDetail } from "../../../store/store";

function ChannelHomeVideo({ data, isHomeMenu, channelId }: ChannelData) {
  const dispatch = useDispatch();
  const router = useRouter();

  // 채널정보
  const description = data?.items[0]?.brandingSettings?.channel?.description;
  const videoCount = data?.items[0]?.statistics?.videoCount;
  const viewCount = data?.items[0]?.statistics?.viewCount;
  let publishedAt = data?.items[0]?.snippet?.publishedAt;
  publishedAt = new Date(Date.parse(publishedAt)).toLocaleString() 

  // Custom Hook(with useQuery)
  const q = useFetchData("channelVideos",
  `https://youtube-v31.p.rapidapi.com/search?channelId=${channelId}&part=snippet%2Cid&order=date&maxResults=50`, channelId, "rapidApi")

  if (q.isLoading) {
    return (
    <div className="flex justify-center pt-6">
    <div className="w-6/12 animate-pulse">
      <div className="h-2 w-32 m-3 bg-slate-700 rounded"/>
      <div className="h-2 w-44 m-3 bg-slate-700 rounded"/>
      <br />
      <div className="h-2 w-16 m-3 bg-slate-700 rounded"/>
      <div className="h-2 w-16 m-3 bg-slate-700 rounded"/>
      <br />
      <div className="h-2 w-16 m-3 bg-slate-700 rounded"/>
      <div className="h-2 w-32 m-3 bg-slate-700 rounded"/>
      <br />
      <div className="h-2 w-32 m-3 bg-slate-700 rounded"/>
      <div className="h-2 w-96 m-3 bg-slate-700 rounded"/>
      <div className="h-2 w-48 m-3 bg-slate-700 rounded"/>
      <br />
  </div>
  </div>
  )}

  const ChannelVideoDatas = q?.data?.items;

  return (
    <div className="flex justify-center pt-6">
      {/* ########## Home ########## */}
      {isHomeMenu ? (
        <div className="w-6/12">
          <div>
            <b>Joined-Date :</b>
            <h1>{publishedAt}</h1>
            <br />
          </div>
          <div>
            <b>Videos :</b>
            <h1>{videoCount}</h1>
            <br />
          </div>
          <div>
            <b>Views :</b>
            <h1>{viewCount}</h1>
            <br />
          </div>
          <div>
            <b>Description :</b>
            <h1>{description}</h1>
            <br />
          </div>
        </div>
      ) : (
        <div>
          {/* ########## Videos ########## */}
          {/* 비디오들 */}
          <div className="flex">
            <div className="flex justify-evenly flex-wrap">
              {ChannelVideoDatas?.map((arr: DataArr) => {
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
                        </h1>{" "}
                        {/* 채널명, TimeAgo */}
                        <h3 className="flex text-gray-500 mt-2">
                          {arr.snippet.channelTitle}&nbsp;{<BsDot />}&nbsp;
                          {<TimeAgoCreator time={arr.snippet.publishedAt} />}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChannelHomeVideo;

import { useSelector } from "react-redux";
import RecommendedVideoComponent from "./RecommendedVideoComponent";
import LoadingForDataFetching from "./LoadingForDataFetching";
import useFetchData from "./../../../../utils/useFetchData";

function RecommendedVideo({ otherDatas, videoId }: RecommendedVideoProps) {
  const fromWhereState =
    useSelector((state: stateProps) => state?.arrData[1]?.fromWhere)?.replace(/%20/g," ") || null;

  // Custom Hook(with useQuery)
  const { data, isLoading } = useFetchData(
    "recommendedVideos",
    `https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${videoId}&part=id%2Csnippet&type=video&maxResults=10`,
    videoId,
    "rapidApi"
  );

  if (isLoading) {
    return (
      <div className="w-full 2xl:w-[27rem] h-[830px] p-2 border-2 border-solid border-gray-200 rounded-2xl">
        <br />
        <LoadingForDataFetching />
        <LoadingForDataFetching />
        <LoadingForDataFetching />
        <LoadingForDataFetching />
        <LoadingForDataFetching />
        <LoadingForDataFetching />
      </div>
    );
  }

  return (
    <div className="self-center w-full 2xl:w-[27rem] h-[830px] overflow-y-scroll p-2 border-2 border-solid border-gray-200 rounded-2xl">
      {/* Other Videos */}
      {fromWhereState ? (
        <>
          <h1 className="flex justify-center text-2xl text-gray-400">
            Other {fromWhereState} Videos
          </h1>
          <RecommendedVideoComponent data={otherDatas} videoId={videoId} />
        </>
      ) : (
        ""
      )}

      {/*  Related Videos*/}
      <h1 className="flex justify-center text-2xl text-gray-400">
        Related Videos
      </h1>
      <RecommendedVideoComponent
        data={data?.items.slice(0, 10)}
        videoId={videoId}
      />
    </div>
  );
}

export default RecommendedVideo;

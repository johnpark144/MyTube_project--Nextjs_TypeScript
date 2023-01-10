"use client";
import { useDispatch } from "react-redux";
import { getFromWhere } from "../../../store/store";
import useFetchData from "./../../../utils/useFetchData";
import Video from "../Video";

function Genre({ params: { genre } }: GenreProps) {
  const dispatch = useDispatch();
  dispatch(getFromWhere(genre)); // from genre

  // Custom Hook(with useQuery)
  const { data, isLoading } = useFetchData("videos", `/api/videos?q=${genre}`, genre);

  if (isLoading) {
    return <span className="loader"></span>;
  }

  // 채널 정보는 비디오 목록에서 삭제
  const dataWithoutChannelInfo = data?.items?.filter(
    (arr: noChannelInfoDataArrProps) => "videoId" in arr.id
  );
  
  return <Video genreOrSearch={genre} data={dataWithoutChannelInfo} />;
}

export default Genre;

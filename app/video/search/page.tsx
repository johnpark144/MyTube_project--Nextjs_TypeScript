"use client";
import { useDispatch } from "react-redux";
import { useSearchParams } from "next/navigation";
import { getFromWhere } from "../../../store/store";
import useFetchData from "./../../../utils/useFetchData";
import Video from "../Video";

function searchPage() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  const dispatch = useDispatch();
  dispatch(getFromWhere(q)); // from searchParams Query

  // Custom Hook(with useQuery)
  const { data, isLoading } = useFetchData("videos", `/api/videos?q=${q}`, q);

  if (isLoading) {
    return <span className="loader"></span>;
  }

  // 채널 정보는 비디오 목록에서 삭제
  const dataWithoutChannelInfo = data.items.filter(
    (arr: searchedDataArrProps) => "videoId" in arr.id
  );

  return <Video genreOrSearch={q} data={dataWithoutChannelInfo} />;
}

export default searchPage;

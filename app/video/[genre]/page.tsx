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

  return <Video genreOrSearch={genre} data={data.items} />;
}

export default Genre;

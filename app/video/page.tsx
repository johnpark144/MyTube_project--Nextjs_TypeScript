'use client'
import Video from "./Video";
import { useDispatch } from 'react-redux';
import { getFromWhere } from "../../store/store";
import useFetchData from './../../utils/useFetchData'

// 디폴트 함수
function videoPage() {
  const dispatch = useDispatch();
  dispatch(getFromWhere("New")); // from New

  // Custom Hook(with useQuery)
  const { data, isLoading } = useFetchData("videos", "/api/videos")
  
  if (isLoading) {
    return (
      <span className="loader"></span>
    );
  }

  return(
    <Video data={data.items} />
)}

export default videoPage;

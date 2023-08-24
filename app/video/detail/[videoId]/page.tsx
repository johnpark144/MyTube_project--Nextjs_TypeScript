"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import RecommendedVideo from "./RecommendedVideo";
import SavedNotification from "./SavedNotification";
import VideoDetail from './VideoDetail';
import useFiveRandomData from './../../../../utils/useFiveRandomData';
import { IoIosArrowBack } from "react-icons/io";

function videoDetailPage({ params: { videoId } }: videoDetailPageProps) {
  const router = useRouter();

  const [time, setTime] = useState("");
  const [history, setHistory] = useState([]);
  const [saved, setSaved] = useState(false);

  // Redux store에서 state가져옴
  const videoState = useSelector((state: stateProps) => state.video);
  const arrDataState = useSelector((state: stateProps) => state.arrData[0].data); // 전 동영상들 데이터
  if (!videoState.length) return <div>no datas</div>;

  // 동영상정보
  const video = videoState[0].arr || history[0];
  const title = video?.snippet?.title;
  const channel = video?.snippet?.channelTitle;
  const channelId = video?.snippet?.channelId;
  const publishedAt = video?.snippet?.publishedAt;
  const description = video?.snippet?.description;

  const [otherDatas, setOtherDatas] = useState([]);

  // ##### 접속할경우 로컬스토리지 history에 현재 동영상 데이터 저장
  useEffect(() => {
    setTime(new Date(publishedAt).toLocaleString()); // 서버 클라이언트 (시간, 로컬스토리지)차이 오류 방지
    
    let historyStorage = JSON.parse(localStorage.getItem("history") || "[]"); 
    let videoInStorage = historyStorage.filter(
      (arr: { id: { videoId: any } }) => video?.id.videoId !== arr.id.videoId
    ); // 중복되면 기존꺼 제거
    if (video) {
      localStorage.setItem(
        "history",
        JSON.stringify([video, ...videoInStorage])
      );
      historyStorage = JSON.parse(localStorage.getItem("history") || "[]");
    }
    setHistory(historyStorage);

    // 랜덤 추천 동영상 5개 (customHooks)
    const fiveOtherDatas = useFiveRandomData(arrDataState)
    setOtherDatas(fiveOtherDatas);
  }, [publishedAt]);

  return (
    <>
      {/* 뒤로가기 */}
      <button
        className="text-2xl invisible sm:visible"
        onClick={() => router.back()}
      >
        <IoIosArrowBack />
      </button>
      <div className="flex flex-col 2xl:flex-row">
        {/* 비디오 디테일 */}
        <VideoDetail title={title} channel={channel} channelId={channelId} video={video} saved={saved}
        setSaved={setSaved} videoId={videoId} time={time} publishedAt={publishedAt} description={description}/>
        <div>
          {/*  추천동영상  */}
          <RecommendedVideo otherDatas={otherDatas} videoId={videoId} />

          {/* Saved 알림 */}
          <SavedNotification saved={saved} />
        </div>
      </div>
    </>
  );
}

export default videoDetailPage;

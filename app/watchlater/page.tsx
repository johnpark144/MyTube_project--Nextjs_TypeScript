"use client";
import { useState, useEffect } from "react";
import Provider from "../../provider/Provider";
import WatchLaterVideo from "./WatchLaterVideo";

function watchlaterPage() {
  const [watchLaterData, setWatchLaterData] = useState([]);

  useEffect(() => {
    let watchLaterStorage = JSON.parse(
      localStorage.getItem("watchLater") || "[]"
    ); // JSON.parse에 타입 null 들어가는 오류 방지
    setWatchLaterData(watchLaterStorage);
  }, []);

  return (
    <Provider>
      <WatchLaterVideo data={watchLaterData} />
    </Provider>
  );
}

export default watchlaterPage;

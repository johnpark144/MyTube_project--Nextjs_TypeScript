'use client';
import { useState, useEffect } from 'react';
import Provider from '../../provider/Provider';
import HistoryVideo from './HistoryVideo';

function historyPage() {
    const [historyData, setHistoryData] = useState([]);
    
    useEffect(() => {
      let historyStorage = JSON.parse(localStorage.getItem("history") || "[]"); // JSON.parse에 타입 null 들어가는 오류 방지
        setHistoryData(historyStorage)
    }, []);

  return (
    <Provider>
      <HistoryVideo data={historyData} />
    </Provider>
  );
}

export default historyPage

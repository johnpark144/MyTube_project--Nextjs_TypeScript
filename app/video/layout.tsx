"use client";
import "../../styles/globals.css"; // globals.css에있는 TailwindCSS 전역 적용
import VideoGenre from "./VideoGenre";
import Provider from '../../provider/Provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <div className="flex flex-col lg:flex-row">
      {/* 장르별로 */}
      <div className="no-scroll h-24 w-full py-1 px-2 lg:py-2 lg:h-full lg:w-56">
        <VideoGenre /> 
      </div>
      {/* 비디오들 */}
      <div className="h-full p-2">
        <Provider>
            {children}
        </Provider>
      </div>
    </div>
  );
}

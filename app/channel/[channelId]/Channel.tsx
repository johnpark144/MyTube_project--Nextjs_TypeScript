import { useState } from "react";
import ChannelHeader from "./ChannelHeader";
import ChannelHomeVideo from "./ChannelHomeVideo";
import useFetchData from "./../../../utils/useFetchData";

// 디폴트 함수
function Channel({ channelId }: ChannelProps) {
  const [isHomeMenu, setIsHomeMenu] = useState(true);

  // Custom Hook(with useQuery)
  const { data, isLoading } = useFetchData(
    "channel",
    `https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=${channelId}`,
    channelId,
    "rapidApi"
  );

  if (isLoading) {
    return <span className="loader"></span>;
  }

  return (
    <>
      {data ? (
        <>
          <ChannelHeader
            data={data}
            isHomeMenu={isHomeMenu}
            setIsHomeMenu={setIsHomeMenu}
          />
          <ChannelHomeVideo
            data={data}
            isHomeMenu={isHomeMenu}
            channelId={channelId}
          />
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default Channel;

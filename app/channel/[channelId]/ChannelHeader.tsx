import Image from "next/image";

function ChannelHeader({ data, isHomeMenu, setIsHomeMenu }: ChannelData) {
  const title = data?.items[0]?.brandingSettings?.channel?.title;
  const bannerUrl = data?.items[0]?.brandingSettings?.image?.bannerExternalUrl;
  const thumbnails = data?.items[0]?.snippet?.thumbnails.high.url;
  const subscriberCount = data?.items[0]?.statistics?.subscriberCount;

  // 구독자 수 단위 변환기
  const numConverter = (num: number) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num;
  };

  return (
    <div className="w-full h-[360px] sm:h-[380px] px-11 bg-gray-200 dark:bg-gray-500">
      <div className="flex justify-center">
        <div
          className="relative h-44 w-[445px]
        sm:h-52 sm:w-[650px]
        xl:h-60 xl:w-[700px]"
        >
          {/* 배너이미지 // 부모: relative, 이미지: fill */}
          <Image
            src={bannerUrl}
            alt="Channel-bannerLogo"
            quality={100}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="flex flex-col xl:flex-row justify-center items-center mt-4">
        {/* 프로필 이미지 */}
        <div className="relative w-[70px] h-[70px] xl:w-[100px] xl:h-[100px] xl:mx-5">
          <Image src={thumbnails} fill alt="Channel-Logo" />
        </div>
        {/* 채널명, 구독수 */}
        <div className="flex flex-row text-xl xl:flex-col xl:text-2xl xl:mr-10">
          <h1>
            {title}
            <span className="visible m-4 xl:invisible">/</span>
          </h1>
          <h1 className="xl:ml-0">{numConverter(subscriberCount)}</h1>
        </div>
        {/* 홈, 비디오 */}
        <ul
          className={`flex mx-10 justify-center text-center text-2xl xl:text-3xl`}
        >
          <li
            onClick={() => {
              setIsHomeMenu(true);
            }}
            className={`w-48 h-10 sm:w-64 xl:w-96 xl:h-12 border-solid pt-2 cursor-pointer ${
              isHomeMenu
                ? "border-b-4 border-gray-500 dark:border-gray-700"
                : ""
            }`}
          >
            Home
          </li>
          <li
            onClick={() => {
              setIsHomeMenu(false);
            }}
            className={`w-48 h-10 sm:w-64 xl:w-96 xl:h-12 border-solid pt-2 cursor-pointer ${
              !isHomeMenu
                ? "border-b-4 border-gray-500 dark:border-gray-700"
                : ""
            }`}
          >
            Videos
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ChannelHeader;

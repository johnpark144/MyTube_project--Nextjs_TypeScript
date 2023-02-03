/** @type {import('next').NextConfig} */
const youtube_api_key = process.env.YOUTUBE_API_KEY;

module.exports = {
  compiler: {
    styledComponents: true
  },
  reactStrictMode: false,
  images:{
    domains: ['user-images.githubusercontent.com', 'i.ytimg.com', 'www.googleapis.com', 'yt3.ggpht.com', 'yt3.googleusercontent.com', 'lh3.googleusercontent.com']
  },
  experimental:{
    appDir: true, // app 폴더를 사용가능하게(nextjs13)
  },
  env: {
    YOUTUBE_XRAPID_API_KEY: process.env.YOUTUBE_XRAPID_API_KEY,
  },  // 클라이언트 사이드에서 환경변수(.env)사용할수있도록
  async rewrites(){
    return [
      {
        source: "/api/videos",    // destination 주소에 접근할 새 주소 지정
        destination: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&videoDefinition=any&key=${youtube_api_key}` // api 불러올 원래 주소
      },
    ]
  }
};

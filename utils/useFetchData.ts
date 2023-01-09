import { useQuery } from "react-query";

const xRapid_api_key = process.env.YOUTUBE_XRAPID_API_KEY;

// 데이터 불러오는 함수
async function fetchData(url: string, api?: string) {
  let res;
  // xRapid api
  if (api === "rapidApi" && xRapid_api_key) {
    res = await fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": xRapid_api_key,
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    });
    // regular api
  } else {
    res = await fetch(url);
  }
  return res.json();
}

// 디폴트 함수 (useQuery)
function useFetchData(queryKey:string, url:string, id?:string|number|null, api?:string|undefined) {
const outcome = useQuery([`${queryKey}`, id], ()=>fetchData(url, api), {
  staleTime: 3600000,
  cacheTime: 21600000,
  keepPreviousData: true,
});
return outcome;
}

export default useFetchData


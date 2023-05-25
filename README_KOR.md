# MyTube_project--Nextjs_TypeScript
- 웹사이트 링크 : https://port-0-mytube-1jx7m2gldonqeix.gksl1.cloudtype.app/
- 만든이 : 박영환(John Park)
- 주요 도구 : Next JS (13 버전), TypeScript
- CSS : Tailwind CSS
- 보조 도구 : Reactquery, Redux(toolkit), React-beautiful-dnd, Lodash debounce, React-timeago, Next-themes, YouTube Data API, YouTube rapidApi, PhotoShop
- 아이디어 여부 : 아이디어 45%, 클론 55% (튜토리얼 코드를 따라친것이 아닌, UI, UX를 많이 참고함)
- 번들러 도구 : Webpack
- YouTube Data API (https://developers.google.com/youtube/v3/)
- YouTube rapidApi(https://rapidapi.com/ytdlfree/api/youtube-v31/)
- 설명 : 저는 Next JS, Redux, Reactquery, Darkmode, TypeScript 등과 같은 웹 사이트를 개발하는 데 유용한 기술들을 배우게 되었고, 그래서 이 웹 사이트를 만들면서 앞서 배운 모든 것들을 연습하고 싶었습니다.
제가 기술에 집중하여 구현했기 때문에, 기존 유튜브 사이트와는 매우 다를 것이고, 그래서인지 이름도 MyTube라고도 단순히 짓게 되었습니다,
그리고 사실 이 사이트를 만들면서 느낀게, 이런 종류의 사이트는 사실 SSR를 쓰지않고 일반 리액트로도 충분하다는 걸 느꼈습니다.
그래도 이 웹사이트를 만든 것은 단순히 배운 스킬들을 써먹었을 뿐만 아니라 SSR와 CSR 그리고 심지어 SSG의 차이를 배울 수 있어서 유익한 시간이 되었다고 생각합니다.

- 어려웠던점 및 해결책 :
1. 저는 처음으로 Next js를 이용하여 웹사이트를 만들려 하였고 Vercel이 터보팩을 엄청 홍보하고 있다는 것을 보았습니다. 그래서 사용해 보았지만 너무나 많은 오류에 에러를 발견하였습니다.
그런데 오류를 고치기위한 터보팩에 대한 정보가 아직 충분하지 않았고, 이것저것 보며 해메다가 결국 터보팩을 사용하지 않고 웹팩을 사용하기로 결론을 내렸습니다.
2. 리액트 훅이나, Link 컴포넌트를 사용할 때 마다, "call is undefined" 이라는 에러가 계속해서 발생하였습니다. 이틀 정도 고치려고 노력해봐도 어떠한 정보도 나오지 않았습니다. 겨우겨우 알아낸게 알고보니 그때 당시 Next JS 13의 최신버전에 문제가 있었고 그래서 오류가 고쳐질때까지 이전버전을 사용하는 것이 유일한 해결책이었습니다. (현재 버전은 괜찮네요, 다행히도 고쳐진것 같아요)
3. 이 웹 사이트를 Vercel로 처음에 배포할 때, 계속 실패하였고, 그래서 그것을 고치려고 구글에 열심히 검색해 보았지만, 해결책을 찾기엔 애매한 답들만 있었습니다. 하지만 그 후 한 폴더 이름의 첫 글자가 소문자로 되어있어야 하지만 대문자로 적힌 것을 발견 했습니다. 희안하게도 로컬 환경에서는 작동하는데 전혀 문제가 되지 않았는데, 배포시에만 문제가 되었습니다. 그래서 그런지 오류를 발견하기가 어려웠던것 같습니다.
4. 시간이 지나며 잦은 API 호출과 그에 대해 결제를 하지 않았다는 이유로 Vercel에서 제 사이트를 차단하였습니다, 해결책을 찾다가 "Cloudtype"이라는 좋은 플랫폼을 찾았고 그래서 그것을 사용하기로 했습니다.

- 고쳐야 하거나 개선이 필요한 점 : 클린코드로 바꾸기, "Home" 페이지 부분 UI 개선 (유용한 애니메이션 및 CSS 라이브러리를 배우기 이전이었음)
- 로그인 필수 ? : No
- 프로젝트 이름 이유 : 이름을 "MyTube"라고 지은 이유는 처음에 이 사이트는 "Watch later"에 유튜브의 영상을 저장하는 데에 초점을 맞췄고, 그것들을 저장함으로써 "나의 영상"이 되는것을 강조하려고 그랬습니다. 그뿐 아니라 이 웹사이트를 만들면서 로고에 대한 좋은 아이디어가 생각나서 그렇게 지었습니다.

- 주석 언어 : 한국어
- 만든 기간 : 2022년 12월 20일 ~ 2023년 1월 6일
- 디버깅 기간 : 2023년 1월 6일 ~ 1월 10일 (클린코드, 오류 점검, 커스텀 훅, 주석)
- 처음 깃허브 올린날: 2023년 1월 9일
- 배포한 날 : <strike>2023년 1월 10일</strike> -> 2023년 2월 3일
- 배포 도구 : <strike>Vercel</strike> -> Cloudtype

# Ps, 참고
- 이 프로젝트를 구축하는 도중에, NextJS가 아닌 리액트만 사용하여 유튜브 클론하는 어떤 튜토리얼 강의를 발견하였습니다.
저는 그 튜토리얼에 어떠한 코드도 보지 조차 않았고, 그냥 튜토리얼 동영상 후반에 등장하는 결과물의 UI만 조금 참고하긴 하였습니다, 
그래서 코드와 구현 방법이 전혀 다를 것입니다.
- 제한된 API 호출 때문에, 호출 횟수를 분산시키기 위해 2개의 비슷한 유튜브 API를 사용하기로 결정했습니다.

# 기능
- 반응형 웹 사이트
- 네비게이션 바(헤더부분), 네비게이션 푸터(모바일용)
- 홈 애니메이션(설명)
- 검색과 장르별 비디오
- 마우스가 썸네일에 2초동안 올려져 있을때 비디오 미리보기
- History (보기, 삭제, 모두삭제)
- Watch later (보기, 삭제)
- 드래그 앤 드롭을 이용하여 Watch later에 비디오 저장 및 삭제
- 비디오 디테일 페이지에서 저장 및 알림
- 비디오 디테일
- 관련있는 비디오(API에서 추천), 다른 비디오(비디오 클릭전에 데이터들)
- 채널 디테일
- 날짜(시간)을 Timgago형식으로
- 다크모드
- 스피너 로딩중, Animate-pulse 로딩

# 샘플 사진

- 비디오
![Video](https://user-images.githubusercontent.com/106279616/211402776-a675d6b3-8554-456e-862b-cc34736cedd4.png)

- 드래그 앤 드롭으로 비디오 저장
![Drag Drop](https://user-images.githubusercontent.com/106279616/211402791-629cc471-f6f6-4f1f-bd8b-f3ff08eb8d8e.png)

- 비디오 디테일
![Video_Detail](https://user-images.githubusercontent.com/106279616/211402796-834f0282-800e-40c9-8ec9-ac5211d840a6.png)

- 채널 디테일
![Channel_Detail](https://user-images.githubusercontent.com/106279616/211402817-64ddf0bf-9412-45c2-b5b4-a0364ef313a0.png)


# 샘플 비디오

<h3> 1. 비디오 검색, 장르, 디테일, 미리보기 </h3>
<video src="https://user-images.githubusercontent.com/106279616/211602339-52195ac2-f394-4dbc-a580-43dd969bf1d9.mp4"></video>

<h3> 2. 드래그 앤 드롭으로 저장 및 삭제 </h3>
<video src="https://user-images.githubusercontent.com/106279616/211602667-b20aa794-0bc1-4716-83e5-b3196ba941a0.mp4"></video>

<h3> 3. 디테일에서 저장 및 알림 </h3>
<video src="https://user-images.githubusercontent.com/106279616/211602900-b0603fec-c099-46d5-aa20-95e25a484ee4.mp4"></video>

<h3> 4. History, 비디오 디테일, 채널 디테일 </h3>
<video src="https://user-images.githubusercontent.com/106279616/211603068-a73f4560-e8c5-4447-8494-607ec6fa323a.mp4"></video>

<h3> 5. 다크모드, 반응형, Home </h3>
<video src="https://user-images.githubusercontent.com/106279616/211603120-7519249f-aa55-4e89-99c3-9bb1067c14d5.mp4"></video>


---------- <a href="README_KOR.md">한글로 보기(KOR)</a> ----------

# MyTube_project--Nextjs_TypeScript
- Website Link : https://port-0-mytube-1jx7m2gldonqeix.gksl1.cloudtype.app/
- Creater : Yeonghwan Park (John Park)
- Main Tools : Next JS (ver 13), TypeScript
- CSS : Tailwind CSS
- Sub Tools : Reactquery, Redux(toolkit), React-beautiful-dnd, Lodash debounce, React-timeago, Next-themes,
YouTube Data API, YouTube rapidApi, PhotoShop
- Idea or Not : Idea 45%, Clone 55% (not the tutorial code at all, but only UI, UX)
- Bundler : Webpack
- YouTube Data API (https://developers.google.com/youtube/v3/)
- YouTube rapidApi(https://rapidapi.com/ytdlfree/api/youtube-v31/)
- Explantion : I have learned some useful skills to develop web sites such as Next JS, Redux, Reactquery, Darkmode, TypeScript, etc. 
I just wanted to practice all I learned by building this website, since I focused on skills, It would be way different from regular YouTube website so I want to say it is MyTube, and also by building that, I actually realized that some website like this doesn't fit with Server-Side-Renderling(SSR) but good enough with just React, so Building this website was the very instructive time to learn about deference between SSR, CSR, and even SSG, as well as skills that I learn 

- Hard Part and Solution :
1. I tried to build a website with Next js for the first time, and I saw Vercel is promoting "Turbopack" a lot. so I used it but there are a lot of bug and error
but not enough datas or informations about that. so I was wandering here and there and came to conclusion not to use Turbopack yet but Webpack.
2. Whenever I used any react hook or Link, the error "call is undefined" was happening continually, I struggled for about 2 days to fix it but no information had been found, but it turned out that it was error of latest version of that time of Next JS 13, so using the previous version was only solution until the error was corrected.
(now the current version is ok, those are firxed thankfully)
3. When I deploy this web site in vercel, It continually failed, so I tried my best to fix it and googled it, but It was so vague search Results that are hard to find the solution. but I found that I typed the first letter of a directory's name as the uppercase letter that is supposed to be lowercase. It was not problem whatsoever in localhost but problem in deployment in vercel.
so it was more hard time to dicover the problem
4. overtime, due to frequent API call, Vercel blocked me out for no payment, so I moved it to "Cloudtype" that is Korean deployment platform.

- Things To Fix or Improve : need to get this clean code, better design of "Home"page (It was before I learn about usefull animation or css libraries)
- Login Must ? : No
- Name why : the reason why I named this site "MyTube" is because I focused to save viedos of youtube into "watch later" of this site then those become my videos saved, on top of that, by this I came to figure out good idea of its logo.

- Comment language : Korean
- Date of creation : Dec 20th 2022 ~ Jan 6th 2023
- Date of debugging : Jan 6th ~ Jan 10th 2023 (clean code, fix error, custom hook, comment)
- Date of upload : Jan 9th 2023
- Date of deployment : <strike>Jan 10th 2023</strike> -> Feb 3rd 2023
- Deployment Tool : <strike>Vercel</strike> -> Cloudtype

# Ps, FYI
- In the middle of building this project, I found some similar tutorial lecture from Youtube building Youtube clone only using React not even NextJS.
It's true that I refer to how the outcome of this tutorial looks like in the end of that video,
but I didn't even watch that lecture at all other than ending part. so the code and the way to implement will be totally deferent.
- Due to limited call of API, I decided to use 2 of similar Youtube APIs so the number of calling API has been distributed.

# Functions
- Responsive Website
- Navigation bar(Header), Footer(for little width)
- Home Animation(Explanation)
- Search and Genre Video
- Preview video When Mouse is over the thumbnail for 2 secs
- History (Watch, Delete, Delete All)
- Watch later (Watch, Delete)
- Save and delete videos into Watch later with Drag & Drop
- Save videos from video detail into Watch later and the Notification
- Video Detail
- Related Videos(from API), Other Videos(from the data before you click the video)
- Channel Detail
- Date(time) to Timeageo
- Dark Mode
- Spinner Loading, Animate-pulse Loading

# Sample pictures

- Video
![Video](https://user-images.githubusercontent.com/106279616/211402776-a675d6b3-8554-456e-862b-cc34736cedd4.png)

- Save Video in Drag & Drop
![Drag Drop](https://user-images.githubusercontent.com/106279616/211402791-629cc471-f6f6-4f1f-bd8b-f3ff08eb8d8e.png)

- Video Detail
![Video_Detail](https://user-images.githubusercontent.com/106279616/211402796-834f0282-800e-40c9-8ec9-ac5211d840a6.png)

- Channel Detail
![Channel_Detail](https://user-images.githubusercontent.com/106279616/211402817-64ddf0bf-9412-45c2-b5b4-a0364ef313a0.png)


# Sample videos

<h3> 1. Search, Genre, detail, Preview </h3>
<video src="https://user-images.githubusercontent.com/106279616/211602339-52195ac2-f394-4dbc-a580-43dd969bf1d9.mp4"></video>

<h3> 2. Save and delete with Drag & Drop </h3>
<video src="https://user-images.githubusercontent.com/106279616/211602667-b20aa794-0bc1-4716-83e5-b3196ba941a0.mp4"></video>

<h3> 3. Save videos in detail and Notification </h3>
<video src="https://user-images.githubusercontent.com/106279616/211602900-b0603fec-c099-46d5-aa20-95e25a484ee4.mp4"></video>

<h3> 4. History, Video Detail, Channel Detail </h3>
<video src="https://user-images.githubusercontent.com/106279616/211603068-a73f4560-e8c5-4447-8494-607ec6fa323a.mp4"></video>

<h3> 5. Dark Mode, Responsive, Home </h3>
<video src="https://user-images.githubusercontent.com/106279616/211603120-7519249f-aa55-4e89-99c3-9bb1067c14d5.mp4"></video>


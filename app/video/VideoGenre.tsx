import VideoGenreButton from './VideoGenreButton';

const genreList = [
  {
    id: 0,
    genre: 'Python Django',
  },
  {
    id: 1,
    genre: 'React Js',
  },
  {
    id: 2,
    genre: 'Next Js',
  },
  {
    id: 3,
    genre: 'Movies',
  },
  {
    id: 4,
    genre: 'Music',
  },
  {
    id: 5,
    genre: 'Gaming',
  },
  {
    id: 6,
    genre: 'News',
  },
  {
    id: 7,
    genre: 'Sports',
  },
  {
    id: 8,
    genre: 'Learning',
  },
  {
    id: 9,
    genre: 'Beauty',
  },
  {
    id: 10,
    genre: 'Live',
  },
  {
    id: 11,
    genre: 'Potcast',
  },
];

function VideoGenre() {
  return (<>
      {genreList.map((genre) => {
        return (
        <VideoGenreButton key={genre.id} genre={genre}/>
        );
      })}
  </>);
}

export default VideoGenre;

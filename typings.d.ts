type DataArr = {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: any;
    medium: any;
    high: any;
    channelTitle: string;
    liveBroadcastContent: any;
    publishTime: string;
  };
};

type VideoGenreButtonProps = {
  genre: {
    id: number;
    genre: string;
  };
};

type GenreProps = {
  params: {
    genre: string;
  };
};

type videoDetailPageProps = {
  params: {
    videoId: string | undefined;
  };
};

type ChannelpageProps = {
  params: {
    channelId: string;
  };
};

type stateProps = {
  video?: Array;
  arrData?: Array;
};

type RecommendedVideoProps = {
  otherDatas: Array<DataArr>;
  videoId: string | undefined;
};

type RecommendedVideoComponentProps = {
  data: Array<DataArr>;
  videoId: string | undefined;
};

type SavedNotificationProps = {
  saved: Boolean;
};

type HistoryVideoProps = {
  data: Array<DataArr>;
};

type ChannelProps = {
  channelId: string;
};

type ChannelData = {
  data: {
    items: Array;
  };
  isHomeMenu: Boolean;
  setIsHomeMenu?: Dispatch<SetStateAction<boolean>>;
  channelId?: string;
};

type TV_LettersProps = {
  windowWidth: number;
  arrowTimer: number;
  showAnimations: boolean;
};

type ExpArrowProps = {
  windowWidth?: number;
  showAnimations: boolean;
  arrowTimer: number;
};

type VideoProps = {
  genreOrSearch?: string | null;
  data: Array;
};

type DroppableOfVideoProps = {
  data: Array;
  showWatchLater: boolean;
  watchLaterData: Array;
};

type noChannelInfoDataArrProps = {
  etag: string;
  id: object;
  kind: string;
  snippet: object;
};

type VideoDetailProps = {
  title?: string;
  channel?: string;
  channelId?: string;
  video?: Array;
  saved?: boolean;
  setSaved: React.Dispatch<React.SetStateAction<boolean>>;
  videoId?: string;
  time?: string;
  publishedAt?: string;
  description?: string;
};

type DroppableOfWatchLaterProps = {
  watchLaterData: Array<DataArr>;
};

type WatchLaterVideoProps = {
  data: Array<DataArr>;
};

type ProviderProps = {
  children: React.ReactNode;
};

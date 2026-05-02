export type NewsItem = {
  id: string;
  title: string;
  image?: string;
  content: string;
};

export type DiscographyItem = {
  id: string;
  title: string;
  image?: string;
  musics: string[];
  applemusic_link: string;
  spotify_link: string;
  youtubemusic_link: string;
  linemusic_link: string;
  amazonmusic_link: string;
};

export type LiveItem = {
  id: string;
  title: string;
  image?: string;
  where: string;
  with: string[];
  ticket: string;
  time: string;
  link: string;
};

export type VideoItem = {
  id: string;
  title: string;
  link: string;
};

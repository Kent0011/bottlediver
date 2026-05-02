import { useEffect, useState } from "react";
import { fetchItems } from "./client";
import type {
  DiscographyItem,
  LiveItem,
  NewsItem,
  VideoItem,
} from "./types";

const useResource = <T>(path: string) => {
  const [items, setItems] = useState<T[]>([]);

  useEffect(() => {
    let cancelled = false;
    fetchItems<T>(path)
      .then((next) => {
        if (!cancelled) {
          setItems(next);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setItems([]);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [path]);

  return items;
};

export const useNews = () => useResource<NewsItem>("/news");
export const useDiscography = () =>
  useResource<DiscographyItem>("/discography");
export const useLive = () => useResource<LiveItem>("/live");
export const useVideos = () => useResource<VideoItem>("/video");

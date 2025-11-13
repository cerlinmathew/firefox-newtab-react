import { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";

type NewsItem = {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
};

export default function NewsList({ search }: { search: string }) {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    async function fetchNews() {
      const response = await axios.get("https://newsapi.org/v2/top-headlines", {
        params: {
          country: "us",
          apiKey: "781a0dae634949d6bd7d310309652636",
        },
      });

      setNews(response.data.articles);
    }

    fetchNews();
  }, []);

  const cleaned = search.trim().toLowerCase();

const filteredNews = news.filter((item) =>
  cleaned === "" ? true : item.title.toLowerCase().includes(cleaned)
);

  return <NewsCard news={filteredNews} />;
}

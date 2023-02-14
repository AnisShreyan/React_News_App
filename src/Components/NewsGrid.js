import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/context";
import NewsCard from "./NewsCard";

function NewsGrid() {
  const [news, setNews] = useState([]);

  const myNews = useContext(AppContext);

  useEffect(() => {
    axios.get(myNews.newsApi).then((data) => {
      setNews([...data.data.articles]);
    });
  }, []);

  useEffect(() => {
    axios.get(myNews.newsApi).then((data) => {
      setNews([...data.data.articles]);
    });
  }, [myNews.newsApi]);

  return (
    <>
      <div className="news-grid">
        {news.map((x, y) => (
          <NewsCard
            img={x.urlToImage}
            title={x.title}
            url={x.url}
            publishedAt={x.publishedAt}
            key={y}
          />
        ))}
      </div>
    </>
  );
}

export default NewsGrid;

import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

function NewsGrid() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=apple&from=2023-02-12&to=2023-02-12&sortBy=popularity&apiKey=bd0e8817e8d24bac8a1430910931bbd4"
      )
      .then((data) => {
        setNews([...data.data.articles]);
      });
  }, []);

  return (
    <>
      <div className="news-grid">
        {news.map((x, y) => (
          <NewsCard img={x.urlToImage} title={x.title} key={y} />
        ))}
      </div>
    </>
  );
}

export default NewsGrid;

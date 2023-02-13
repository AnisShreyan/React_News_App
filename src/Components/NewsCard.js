import React from "react";

function NewsCard({ img, title }) {
  return (
    <>
      <div className="news-card">
        <img src={img} />
        <h3>{title}</h3>
      </div>
    </>
  );
}

export default NewsCard;

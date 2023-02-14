import React from "react";

function NewsCard({ img, title, author, url, publishedAt }) {
  const date = publishedAt.split("").splice(0, 10).join(""); //date
  const hours = publishedAt.split("").splice(11, 2).join("");

  const hoursInt = parseInt(hours);

  const mints = publishedAt.split("").splice(13, 3).join("");

  let time;

  if (hoursInt > 12) {
    time = hours -12 + mints + "pm";
  } else {
    time = hours + mints + "am";
  }

  return (
    <>
      <div className="news-card" title={title}>
        <img src={img} />
        <h3>{title}</h3>
        <p>
          Published:&nbsp;
          <span>
            {date}/{time}
          </span>
        </p>
        <a href={url} target="_blank">
          Read it
        </a>
      </div>
    </>
  );
}

export default NewsCard;

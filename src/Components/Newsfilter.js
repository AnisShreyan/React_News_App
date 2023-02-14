import React, { useContext, useState } from "react";
import { AppContext } from "../Context/context";

function Newsfilter() {
  const [actvCls, setActvCls] = useState("all");

  const myNews = useContext(AppContext);

  const setNewsApi = myNews.setNewsApi;

  const NewsFilters = {
    all: "https://newsapi.org/v2/everything?q=apple&from=2023-02-13&to=2023-02-13&sortBy=popularity&apiKey=bd0e8817e8d24bac8a1430910931bbd4",
    tesla:
      "https://newsapi.org/v2/everything?q=tesla&from=2023-01-14&sortBy=publishedAt&apiKey=bd0e8817e8d24bac8a1430910931bbd4",
    unitedStates:
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bd0e8817e8d24bac8a1430910931bbd4",
    resent:
      "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=bd0e8817e8d24bac8a1430910931bbd4",
    tech: "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=bd0e8817e8d24bac8a1430910931bbd4",
  };

  const ClickHandler = (filter) => {
    setActvCls(filter);

    switch (filter) {
      case "all":
        setNewsApi(NewsFilters.all);
        break;

      case "tesla":
        setNewsApi(NewsFilters.tesla);
        break;

      case "unitedStates":
        setNewsApi(NewsFilters.unitedStates);
        break;

      case "tech":
        setNewsApi(NewsFilters.tech);
        break;
      case "resent":
        setNewsApi(NewsFilters.resent);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div className="filter">
        <ul>
          <li
            className={actvCls === "all" ? "active" : ""}
            onClick={() => ClickHandler("all")}
          >
            All
          </li>
          <li
            className={actvCls === "tesla" ? "active" : ""}
            onClick={() => ClickHandler("tesla")}
          >
            Tesla
          </li>
          <li
            className={actvCls === "unitedStates" ? "active" : ""}
            onClick={() => ClickHandler("unitedStates")}
          >
            United States
          </li>
          <li
            className={actvCls === "tech" ? "active" : ""}
            onClick={() => ClickHandler("tech")}
          >
            Tech
          </li>
          <li
            className={actvCls === "resent" ? "active" : ""}
            onClick={() => ClickHandler("resent")}
          >
            Resent
          </li>
        </ul>
      </div>
    </>
  );
}

export default Newsfilter;

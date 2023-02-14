import React, { useState } from "react";

function Newsfilter() {
  const [actvCls, setActvCls] = useState("all");

  const ClickHandler = (filter) => {
    setActvCls(filter);
  };

  console.log(actvCls);

  return (
    <>
      <div className="filter">
        <ul>
          <li
            className={actvCls == "all" ? "active" : ""}
            onClick={() => ClickHandler("all")}
          >
            All
          </li>
          <li
            className={actvCls == "tesla" ? "active" : ""}
            onClick={() => ClickHandler("tesla")}
          >
            Tesla
          </li>
          <li
            className={actvCls == "unitedStates" ? "active" : ""}
            onClick={() => ClickHandler("unitedStates")}
          >
            United States
          </li>
          <li
            className={actvCls == "resent" ? "active" : ""}
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

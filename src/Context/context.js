import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [newsApi, setNewsApi] = useState(
    "https://newsapi.org/v2/everything?q=apple&from=2023-02-12&to=2023-02-12&sortBy=popularity&apiKey=bd0e8817e8d24bac8a1430910931bbd4"
  );

  return (
    <AppContext.Provider value={{ newsApi, setNewsApi }}>
      {props.children}
    </AppContext.Provider>
  );
};

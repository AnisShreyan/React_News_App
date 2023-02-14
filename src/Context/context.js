import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
    
  const [newsApi, setNewsApi] = useState("");

  return (
    <AppContext.Provider value={{ newsApi, setNewsApi }}>
      {props.children}
    </AppContext.Provider>
  );
};

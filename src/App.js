import "./App.css";
import Header from "./Components/Header";
import Newsfilter from "./Components/Newsfilter";
import NewsGrid from "./Components/NewsGrid";
import { AppProvider } from "./Context/context";

function App() {
  return (
    <>
      <AppProvider>
        <Header />
        <Newsfilter />
        <NewsGrid />
      </AppProvider>
    </>
  );
}

export default App;

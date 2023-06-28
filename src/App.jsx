import "./assets/css/App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Guide from "./components/Guide/Guide";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Article from "./components/Article/Article";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route exact key={"/"} path={"/"} element={<Main />} />
        <Route key={"guide"} path="guide" element={<Guide />} />
        <Route
          key={"privacy-policy"}
          path="privacy-policy"
          element={<PrivacyPolicy />}
        />
        <Route key={"article "} path="article" element={<Article />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

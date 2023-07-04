import "./assets/css/App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Guide from "./components/Guide/Guide";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Article from "./components/Article/Article";
import Template from "./components/Article/Template/Template";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import Loader from "./components/Loader/Loader";
import { useEffect, useState } from "react";

function App({
  state,
  setNewData,
  generateLink,
  setNewButton,
  setButtonsData,
  deleteButton,
  checkAdmin
}) {

  let buttonsData = state?.buttonsData;
  const [isLoading, setIsLoading] = useState(true);

  generateLink();

  useEffect(() => {
    fetch("http://127.0.0.1:3001/get-buttons-data")
      .then((response) => response.json())
      .then((data) => {
        setButtonsData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error to fetch get-buttons-data", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

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
        <Route
          key={"article"}
          path="article"
          element={<Article buttonsData={buttonsData} />}
        />
        <Route
          key={"admin"}
          path="/article/admin"
          element={
            <AdminPanel
              buttonsData={buttonsData}
              setNewButton={setNewButton}
              deleteButton={deleteButton}
              setNewData={setNewData}
              checkAdmin={checkAdmin}
            />
          }
        />
        <Route
          key={"template"}
          path="/article/:id"
          element={<Template buttonsData={buttonsData} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

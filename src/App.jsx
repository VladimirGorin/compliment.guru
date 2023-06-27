import "./assets/css/App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route exact key={"/"} path={"/"} element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

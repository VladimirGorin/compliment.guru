import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <p>---</p>
      <Link to={"https://t.me/mskomp"}>Служба поддержки</Link>
      <Link to={"/privacy-policy/"}>Политика конфиденциальности</Link>
      <Link to={"/article/"}>© 2023 compliment.guru</Link>
    </div>
  );
}

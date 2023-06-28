import React from "react";
import { Link } from "react-router-dom";

export default function ButtonRender({ buttonData }) {
  return (
    <Link className="article-button__blue" to={buttonData?.link} key={buttonData?.title}>
      {buttonData.title}
    </Link>
  );
}

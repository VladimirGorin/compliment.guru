import React from "react";
import "./article.css";
import ButtonRender from "./ButtonRender/ButtonRender";

export default function Article({ buttonsData }) {
  const renderButtons = buttonsData?.map((bD) => (
    <ButtonRender buttonData={bD} />
  ));

  return (
    <div className="article">
      <div className="section sec1">
        <h2>Статьи</h2>
        {renderButtons.length === 0 ? <p><br />Тут пока нечего нету</p>: renderButtons}
      </div>
    </div>
  );
}

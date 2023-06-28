import React from "react";
import "./article.css";
import ButtonRender from "./ButtonRender/ButtonRender";

export default function Article() {
  const buttonsData = [
    {
      title: "Мастер Комплиментов",
      link: "link",
      id: 0,
    },
    {
      title: "Комплименты девушке",
      link: "link",
      id: 0,
    },
    {
      title: `Комплимент на букву "А"`,
      link: "link",
      id: 0,
    },
    {
      title: "Комплименты жене",
      link: "link",
      id: 0,
    },
    {
      title: `Комплимент на букву "Е"`,
      link: "link",
      id: 0,
    },
    {
      title: "Комплименты парню",
      link: "link",
      id: 0,
    },
    {
      title: `Комплимент на букву "Н"`,
      link: "link",
      id: 0,
    },

    {
      title: `Комплимент на букву "Р"`,
      link: "link",
      id: 0,
    },
    {
      title: `Комплименты на букву "Л"`,
      link: "link",
      id: 0,
    },
    {
      title: `Комплименты коллеге`,
      link: "link",
      id: 0,
    },
  ];

  const renderButtons = buttonsData.map((bD) => (
    <ButtonRender buttonData={bD} />
  ));

  return (
    <div className="article">
      <div className="section sec1">
        <h2>Статьи</h2>
        {renderButtons}
      </div>
    </div>
  );
}

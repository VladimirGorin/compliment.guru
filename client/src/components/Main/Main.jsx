import React from "react";
import "./main.css";
import comp from "../../assets/img/comp.png";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div className="main">
      <div className="section sec1">
        <img src={comp} alt="img" />
        <h2>Искусство Комплимента</h2>
        <h3>или как научиться располагать к себе людей</h3>
        <p>бесплатный мини практикум</p>
        <Link className="telegram-style__blue">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="telegram"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
            className="fa-telegram"
          >
            <path
              fill="currentColor"
              d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"
              className=""
            ></path>
          </svg>
          Перейти в мини практикум
        </Link>
      </div>
      <div className="section sec2">
        <ul className="unique-list">
          <b>А ты умеешь делать комплименты?</b>
          <li>
            У тебя красивые глаза( грудь, попа, ноги....) - комплимент не в
            <br />
            кассу. Это комплимент родителям и Богу.
          </li>
          <b>А ты умеешь отвечать на комплименты?</b>
          <li>Пасиб, так вышло, ты тоже ничо - опять уныло, мимо...</li>
          <b>Хочешь научиться делать яркие, сочные комплименты?</b>
          <li>От которых хочется летать и прыгать выше неба?</li>
          <b>Хочешь научиться отвечать на комплименты?</b>
          <li>
            Да так, чтобы после них тебе смотрели в рот и кормили с<br />
            рук.
          </li>
          <b>👇&nbsp; &nbsp; &nbsp; 👇&nbsp; &nbsp; &nbsp; 👇</b>
        </ul>
      </div>
      <div className="section sec3">
        <div className="left-side">
          <b>
            🎯 Секрет успеха прост - ИЗЯЩНАЯ ТЕХНИКА + ЧУТОК
            <br />
            ПРАКТИКИ и ... ты обладатель секретного ОРУЖИЯ
            <br />
            МАССОВОГО ОБАЯНИЯ.
          </b>
          <Link className="telegram-style__red">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="telegram"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
              className="fa-telegram"
            >
              <path
                fill="currentColor"
                d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"
                className=""
              ></path>
            </svg>
            Получить секретное оружие
          </Link>
          <span>
            Заходи в чат-тренажер Мастер Комплимента - получай
            <br />
            знания, тренируйся, становись Мастером Влияния и<br />
            Обаяния.
          </span>
          <span>
            Чат-тренажер Мастер Комплимента - пространство для
            <br />
            отработки речевых навыков, в комфортном окружении
            <br />
            наставников и друзей.
          </span>
        </div>
      </div>
    </div>
  );
}

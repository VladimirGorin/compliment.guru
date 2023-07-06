import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import templateImg from "../../../assets/img/template.png"
import TriggerComponent from "./TriggerComponent/TriggerComponent";
import "./template.css";

export default function Template({ buttonsData }) {
  const { id } = useParams();

  const product = buttonsData?.find((p) => p?.link === id);

  if (!product) {
    return <Navigate to={"/article/"} />;
  }

  return (
    <div className="template">
      <div className="section sec1">
        <img
          src={templateImg}
          alt="img"
        />
        <h2>{product?.title}</h2>
      </div>
      <div className="section sec2">
        <ul className="list-info">
          <li className="normal-li">
            <TriggerComponent text={product.template?.paragraph1} />
          </li>
          <li className="bold-li normal-li">
            <TriggerComponent text={product.template?.paragraph2} />
          </li>
          <li className="normal-li">
            <TriggerComponent text={product.template?.paragraph3} />
          </li>
          <li className="danger-li normal-li">
            <TriggerComponent text={product.template?.paragraph4} />
          </li>
          <li className="normal-li">
            <TriggerComponent text={product.template?.paragraph5} />
          </li>
          <li className="bold-li normal-li">
            <TriggerComponent text={product.template?.paragraph6} />
          </li>
          <li className="normal-li">
            <TriggerComponent text={product.template?.paragraph7} />
          </li>
          <li className="bold-li normal-li"><TriggerComponent text={product.template?.paragraph8}/></li>
          <li className="normal-li"><TriggerComponent text={product.template?.paragraph9}/></li>
          <li className="bold-li normal-li"><TriggerComponent text={product.template?.paragraph10}/></li>
          <li className="normal-li"><TriggerComponent text={product.template?.paragraph11}/></li>
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
            Тренажер Мастер Комплимента
          </Link>
          <span className="button-caption">
            Проведите по кнопке вправо, чтобы перейти в чат
          </span>
          <li className="normal-li"><TriggerComponent text={product.template?.paragraph12}/></li>
          <li className="bold-li normal-li"><TriggerComponent text={product.template?.paragraph13}/></li>
          <li className="normal-li">
          <TriggerComponent text={product.template?.paragraph14}/>
          </li>
          <li className="bold-li normal-li"><TriggerComponent text={product.template?.paragraph15}/></li>
          <li className="normal-li">
          <TriggerComponent text={product.template?.paragraph16}/>
          </li>
          <li className="bold-li normal-li"><TriggerComponent text={product.template?.paragraph17}/></li>
          <li className="normal-li">
          <TriggerComponent text={product.template?.paragraph18}/>
          </li>
          <li className="bold-li normal-li"><TriggerComponent text={product.template?.paragraph19}/></li>
          <li className="normal-li">
          <TriggerComponent text={product.template?.paragraph20}/>
          </li>
          <li className="normal-li">
          <TriggerComponent text={product.template?.paragraph21}/>
          </li>
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
            Чат-тренажер Мастер Комплимента
          </Link>
          <span className="button-caption">
            Проведите по кнопке вправо, чтобы перейти в чат
          </span>
        </ul>
      </div>
    </div>
  );
}

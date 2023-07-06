import React from "react";
import guideImg from "../../assets/img/guideImg.png";
import { Link } from "react-router-dom";
import "./guide.css";

export default function Guide() {
  return (
    <div className="guide">
      <div className="section sec1">
        <img src={guideImg} alt="img" />
        <h2>
          Техника работы с<br />
          Валентностью
        </h2>
      </div>
      <div className="section sec2">
        <ul className="list-info">
          <li className="normal-li">
            В психологии есть термин Валентность и определяется он как функция
            <br />
            напряжения потребности личности, в переводе с умняка,
            <b>
              {" "}
              Валентность —<br />
              программа того, кем хочет стать человек.
            </b>
          </li>
          <li className="normal-li italic-li">
            Замечательная жена, успешный бизнесмен, лучший врач, прикольный
            <br />
            собеседник, заботливый муж - все это базовые валентности, и вы не
            раз
            <br />
            их встречали.
          </li>
          <li className="normal-li">
            В обычной жизни мы постоянно с ними сталкиваемся, и интуитивно
            <br />
            понимаем, что прямое воздействие на них - это, пожалуй, один из
            самых
            <br />
            мощных приемов влияния и убеждения.
          </li>
          <li className="normal-li">
            Идем дальше, один из законов Тонкой Механики гласит "
            <b>
              Ваша энергия
              <br />
              там, где ваше внимание
            </b>
            ". А ваше внимание направлено куда?
            <br />
            Правильно - все туда же.
          </li>
          <li className="normal-li">
            Получается, что{" "}
            <b>
              ваша энергия находится в вашей валентности, там, куда
              <br />
              вы думаете.
            </b>
          </li>
          <li className="normal-li">
            А это значит, что для человека важнее то, кем он <b>хочет </b>стать,
            а не тем,
            <br />
            кем является.
          </li>
          <li className="normal-li">Склеиваем все это и получаем Технику:</li>
        </ul>
      </div>
      <div className="section sec3">
        <ul className="list-info">
          <li className="danger-li normal-li">
            Мастер Комплимента – делает комплимент не самой
            <br />
            Личности, а её Валентности, тому кем она ХОЧЕТ стать.
          </li>
          <li className="normal-li">Давайте рассмотрим примеры</li>
          <li className="normal-li italic-li">
            Какой у тебя воспитанный ребенок, каждый раз первым здоровается –
            <br />
            комплимент валентности хорошая мать
          </li>
          <li className="normal-li italic-li">
            Какой у тебя красивый почерк, долго тренировался? – комплимент
            <br />
            валентности прилежный ученик.
          </li>
          <li className="normal-li italic-li">
            Какой у тебя шикарный котяра, вальяжный, наглый как танк, –<br />
            комплимент валентности любителя майкунов.
          </li>
          <li className="normal-li">И так далее</li>
          <li className="normal-li italic-li">
            Что мы делаем? Мы хвалим, не хваля. Одобряем, не одобряя.
            <br />
            Подтверждаем, не подтверждая.
          </li>
          <li className="normal-li">
            Спецы называют это – нижерадарный комплимент, воздействие тонкое
            <br />и незаметное.
          </li>
          <li className="normal-li">
            А на Востоке этот принцип называется У ВЭЙ – достижение
            <br />
            максимального результата, с минимальными усилиями.
          </li>
          <li className="normal-li">
            Надеюсь, принцип понятен, тонкости и нюансы обсудим на практике в
            <br />
            чате.
          </li>
        </ul>
      </div>
      <div className="section sec4">
        <ul className="list-info">
          <li className="bold-li normal-li">
            А теперь пробуем на вкус эту технику - делаем экспресс комплимент
            <br />
            этой красотуле...
          </li>
          <div className="image-block">
            <img
              src="https://eva.botsister.ru/ee4d4614-a251-4f4b-bc3d-6e35d1b67637/22.png"
              alt="img"
            />
          </div>
          <li className="normal-li">
            Исходные данные: Матильда Захер – 35 лет, разведена, кандидат
            <br />
            мотологических наук, мастер спорта по толканию кнаков, любит
            <br />
            разводить квачей.
          </li>
          <li className="normal-li italic-li">
            Подсказка: вначале выясняем: А КЕМ хочет стать Матильда? Доктором
            <br />
            наук? Заслуженным мастером спорта? Или может быть просто замуж
            <br />
            хочет. И уже туда посылаем наш огненный коммент.
          </li>
          <li className="bold-li normal-li">Резюмируем:</li>
          <li className="danger-li normal-li">
            Мастер Комплимента – делает комплимент не Личности, а<br />
            её Валентности, тому, кем она ХОЧЕТ стать.
          </li>
          <li className="normal-li">
            Для облегчения работы с этой техникой чаще спрашивай себя: кто твой
            <br />
            собеседник? Кем он себя считает? Кем он хочет стать? Где живут его
            <br />
            мысли?
          </li>
          <li className="normal-li">И уже ТУДА направляй комплименты.</li>
        </ul>
      </div>
      <div className="section sec5">
        <ul className="list-info">
          <li className="normal-li">
            Приглашаю тебя потренить эту технику в чате Мастер Комплимента.
          </li>
          <li className="normal-li">
            В ней много нюансов и расширений, скучно точно не будет!
          </li>
          <Link className="telegram-style__green">
            Чат-тренажер Мастер Комплимента
          </Link>
        </ul>
      </div>
    </div>
  );
}

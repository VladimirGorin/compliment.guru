import React from "react";

export default function SecurityButton() {
  return (
    <div className="swiper">
      <div className="btn-text t-text">Перейти в Telegram-канал</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="270px"
        height="45px"
      >
        <g id="dotted-line" className="dotted-line">
          <circle cx={40} cy={22} r={3} />
          <circle cx={60} cy={22} r={3} />
          <circle cx={80} cy={22} r={3} />
          <circle cx={100} cy={22} r={3} />
          <circle cx={120} cy={22} r={3} />
          <circle cx={140} cy={22} r={3} />
          <circle cx={160} cy={22} r={3} />
          <circle cx={180} cy={22} r={3} />
          <circle cx={200} cy={22} r={3} />
          <circle cx={220} cy={22} r={3} />
        </g>
        <path
          id="swipe-end"
          className="swipe-end"
          d="M9.000,1.000 C13.418,1.000 17.000,4.582 17.000,9.000 C17.000,13.418 13.418,16.999 9.000,16.999 C4.582,16.999 1.000,13.418 1.000,9.000 C1.000,4.582 4.582,1.000 9.000,1.000 Z"
        />
        <a
          id="swipe-btn"
          className="swipe-btn"
          xlinkHref="http://example.com/link/"
        >
          <g>
            <path
              fillRule="evenodd"
              fill="#fff"
              d="M22.000,0.001 C34.150,0.001 44.000,9.850 44.000,22.000 C44.000,34.150 34.150,44.000 22.000,44.000 C9.850,44.000 0.000,34.150 0.000,22.000 C0.000,9.850 9.850,0.001 22.000,0.001 Z"
            />
            <path
              id="swipe-arrow"
              className="arrow"
              fillRule="#32b2f7"
              d="M12.551,8.707 L5.256,1.412 C4.270,0.426 2.672,0.426 1.686,1.412 C0.701,2.398 0.701,3.996 1.686,4.981 L7.197,10.492 L1.686,16.003 C0.701,16.988 0.701,18.587 1.686,19.572 C2.672,20.558 4.270,20.558 5.256,19.572 L12.551,12.276 C13.537,11.292 13.537,9.693 12.551,8.707 Z"
            />
          </g>
        </a>
      </svg>
    </div>
  );
}

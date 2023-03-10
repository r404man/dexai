import React from "react";
import "./card.scss";

import icon from "./../../../../../assets/eth.png";
import { Link } from "react-router-dom";

function Card({ isUp }: any) {
  return (
    <Link
      to={""}
      className={
        isUp ? "card-item plus" : "card-item minus"
      }
    >
      <div className="card-title">
        <div className="card-icon">
          <svg
            width="40"
            height="40"
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M59.6548 59.9167C56.3971 63.1807 52.5169 65.7549 48.2451 67.4861C43.9734 69.2173 39.3974 70.0701 34.7897 69.9937C30.2086 70.0823 25.6575 69.2343 21.4148 67.5017C17.1721 65.769 13.3268 63.1881 10.1141 59.9167C6.82633 56.7112 4.23246 52.8626 2.49381 48.6102C0.755157 44.3578 -0.0910737 39.7926 0.00775939 35.1987C0.00775939 25.1389 3.37653 16.7587 10.1141 10.0579C13.329 6.79118 17.1753 4.21506 21.4179 2.48691C25.6605 0.758762 30.2104 -0.0851326 34.7897 0.00677614C39.3956 -0.0729818 43.9704 0.775745 48.2421 2.50246C52.5138 4.22918 56.395 6.79862 59.6548 10.0579C66.5475 16.7587 69.9938 25.1389 69.9938 35.1987C70.0831 39.8124 69.2096 44.394 67.4293 48.6503C65.649 52.9066 63.0011 56.7439 59.6548 59.9167Z"
              fill="#fff"
            />
            <path
              d="M35 11L21 34.8575L35 28.3195V11Z"
              fill="#8B8B8B"
            />
            <path
              d="M35 28.3195L21 34.8574L35 43.3513V28.3195Z"
              fill="#393939"
            />
            <path
              d="M35 11V28.3195L48.9866 34.8575L35 11Z"
              fill="#343434"
            />
            <path
              d="M35 28.3195V43.3513L48.9866 34.8574L35 28.3195Z"
              fill="#161616"
            />
            <path
              d="M21 37.5803L35 57.844V46.0811L21 37.5803Z"
              fill="#8B8B8B"
            />
            <path
              d="M49 37.5803L35 46.0811V57.844L49 37.5803Z"
              fill="#343434"
            />
          </svg>
        </div>
        <div className="card-text">Bitcoin (24h)</div>
        <div className="card-info">
          <div className="card-info-icon">
            <svg
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0.5H0L5 5.5L10 10.5V0.5Z"
                fill="#60F5C2"
              />
            </svg>
          </div>
          <div className="card-info-text">+2,3%</div>
        </div>
      </div>
      <div className="card-number">
        <span>$</span>32,482.44
      </div>
    </Link>
  );
}

export default Card;

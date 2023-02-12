import React from "react";
import "./card.scss";

import icon from "./../../../../../assets/eth.png";

function Card({ isUp }: any) {
  return (
    <div
      className={
        isUp ? "card-item plus" : "card-item minus"
      }
    >
      <div className="card-title">
        <div className="card-icon">
          <img width="40" height="40" src={icon} alt="" />
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
    </div>
  );
}

export default Card;

import React from "react";
import "./swap.scss";
import icon from "./../../../assets/eth.png";

function Swap() {
  return (
    <div className="swap">
      <div className="swap-form">
        <div className="swap-form-top">
          <div className="swap-form-selector">
            <div className="form-selector-icon">
              <img src={icon} alt="" />
            </div>
            <div className="form-selector-text">
              Ethereum
            </div>
            <div className="form-selector-control">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 12L6 8L10 4"
                  stroke="#374160"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="swap-balance">
            Balance: <span>1 504.26</span>
          </div>
        </div>
        <div className="swap-form-input">
          <input type="text" />
          <div className="max-btn">
            <div className="swap-max-btn">Max</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Swap;

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

        <div className="swap-switch">
          <div className="swap-switch-icon">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.2706 17.1907C26.9002 20.6706 24.9285 23.9316 21.6659 25.8152C16.2452 28.9449 9.31386 27.0876 6.18424 21.667L5.85091 21.0896M4.72817 14.8093C5.09858 11.3295 7.0703 8.06851 10.3329 6.18482C15.7536 3.05521 22.685 4.91246 25.8146 10.3331L26.1479 10.9105M4.65755 24.0881L5.63362 20.4453L9.27635 21.4214M22.7232 10.5787L26.3659 11.5547L27.342 7.91201"
                stroke="#374160"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

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

        <div className="swap-form-input second">
          <input type="text" />
        </div>

        <div className="max-btn">
          <div className="swap-max-btn sbmt-btn">
            <div className="sbmt-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 9.5V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.7157 19.2843 4.40974 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H5.2C4.0799 4 3.51984 4 3.09202 4.21799C2.7157 4.40973 2.40973 4.71569 2.21799 5.09202C2 5.51984 2 6.0799 2 7.2V16.8C2 17.9201 2 18.4802 2.21799 18.908C2.40973 19.2843 2.71569 19.5903 3.09202 19.782C3.51984 20 4.07989 20 5.2 20L16.8 20C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V14.5M15 12C15 11.5353 15 11.303 15.0384 11.1098C15.1962 10.3164 15.8164 9.69624 16.6098 9.53843C16.803 9.5 17.0353 9.5 17.5 9.5H19.5C19.9647 9.5 20.197 9.5 20.3902 9.53843C21.1836 9.69624 21.8038 10.3164 21.9616 11.1098C22 11.303 22 11.5353 22 12C22 12.4647 22 12.697 21.9616 12.8902C21.8038 13.6836 21.1836 14.3038 20.3902 14.4616C20.197 14.5 19.9647 14.5 19.5 14.5H17.5C17.0353 14.5 16.803 14.5 16.6098 14.4616C15.8164 14.3038 15.1962 13.6836 15.0384 12.8902C15 12.697 15 12.4647 15 12Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="sbmt-text">Connect Wallet</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Swap;

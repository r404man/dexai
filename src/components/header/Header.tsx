import React, { useState } from "react";
import "./header.scss";
import headerSelector from "../../assets/header-selector.png";
// import headerSelector from "../../assets/header-selector.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentCurrency, setCurrentCurrency] =
    useState("BNB Chain");

  function handleClick(e: any) {
    setIsOpen(!isOpen);
  }

  function handleSelector(currency: string) {
    setCurrentCurrency(currency);
  }

  return (
    <header>
      <div
        className="selector"
        onClick={(e) => handleClick(e)}
      >
        <div
          className={
            isOpen
              ? "selector-list active"
              : "selector-list"
          }
        >
          <div
            className="list-item"
            onClick={() => handleSelector("Etherium")}
          >
            <div className="selector-item-icon">
              <img src={headerSelector} alt="" />
            </div>
            <div className="selector-item-text">
              Etherium
            </div>
          </div>
          <div className="list-item">
            <div className="selector-item-icon">
              <img src={headerSelector} alt="" />
            </div>
            <div className="selector-item-text">
              Etherium
            </div>
          </div>
          <div className="list-item">
            <div className="selector-item-icon">
              <img src={headerSelector} alt="" />
            </div>
            <div className="selector-item-text">
              Etherium
            </div>
          </div>
        </div>
        <div className="selector-left">
          <div className="selector-icon">
            <img src={headerSelector} alt="" />
          </div>
          <div className="selector-title">
            {currentCurrency}
          </div>
        </div>
        <div
          className={
            isOpen
              ? "selector-control active"
              : "selector-control"
          }
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="#18FFF0"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="header-info">BNB: $311.45</div>
      <div className="header-input">
        <input
          type="text"
          placeholder="Search network, dex or tokens"
        />
        <div className="input-icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
              stroke="#374160"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="header-connect">
        <a href="" className="connect">
          <div className="connect-icon">
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
          <div className="connect-title">
            Connect Wallet
          </div>
        </a>
      </div>
    </header>
  );
}

export default Header;

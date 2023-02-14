import React, { useState } from "react";
import "./header.scss";
import icon from "./../../assets/googleplay.png";
import icon2 from "./../../assets/appstore.png";
import { NavLink } from "react-router-dom";
import Selector from "./components/selector/Selector";

function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] =
    useState(false);

  function handleMobile(isOpen: boolean) {
    setMobileMenuIsOpen(isOpen);
  }

  return (
    <header>
      <Selector />
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="primary-btn">
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="connect-title">
              Connect Wallet
            </div>
          </a>
        </div>
      </div>

      <div className="header-mobile">
        <div className="header-mobile-icon">
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div
          className="header-mobile-icon"
          onClick={() => handleMobile(true)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12H21M3 6H21M3 18H21"
              stroke="#374160"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div
        className={
          mobileMenuIsOpen
            ? "header-mobile-menu isOpen"
            : "header-mobile-menu"
        }
      >
        <div className="header-mobile-menu-top">
          <div className="menu-top-logo">Logo</div>
          <div
            className="menu-top-control"
            onClick={(e) => handleMobile(false)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="#374160"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="header-mobile-menu-wallet">
          <div className="menu-wallet">
            <div className="menu-wallet-icon">
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="menu-wallet-text">
              Connect Wallet
            </div>
          </div>
        </div>
        <div className="header-mobile-menu-links">
          <NavLink to={""} className="mobile-menu-link">
            <div className="menu-link-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6667 22.6667H21.3333M14.6903 3.68535L5.64719 10.7189C5.04269 11.189 4.74045 11.4241 4.5227 11.7185C4.32982 11.9793 4.18614 12.2731 4.0987 12.5854C4 12.938 4 13.321 4 14.0868V23.7333C4 25.2268 4 25.9735 4.29065 26.544C4.54631 27.0457 4.95426 27.4537 5.45603 27.7094C6.02646 28 6.77319 28 8.26667 28H23.7333C25.2268 28 25.9735 28 26.544 27.7094C27.0457 27.4537 27.4537 27.0457 27.7094 26.544C28 25.9735 28 25.2268 28 23.7333V14.0868C28 13.321 28 12.938 27.9013 12.5854C27.8139 12.2731 27.6702 11.9793 27.4773 11.7185C27.2596 11.4241 26.9573 11.189 26.3528 10.7189L17.3097 3.68536C16.8413 3.32102 16.6071 3.13885 16.3485 3.06882C16.1203 3.00704 15.8797 3.00704 15.6515 3.06882C15.3929 3.13885 15.1587 3.32102 14.6903 3.68535Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="menu-link-text">Home</div>
          </NavLink>{" "}
          <NavLink to={"dex"} className="mobile-menu-link">
            <div className="menu-link-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.6667 26.6667V17.3333M16 26.6667V13.3333M5.33333 26.6667L5.33333 21.3333M17.8756 6.70334L24.7668 9.28756M14.3984 7.20123L6.93364 12.7998M28.0809 8.58579C28.8619 9.36683 28.8619 10.6332 28.0809 11.4142C27.2998 12.1953 26.0335 12.1953 25.2525 11.4142C24.4714 10.6332 24.4714 9.36683 25.2525 8.58579C26.0335 7.80474 27.2998 7.80474 28.0809 8.58579ZM6.74755 12.5858C7.5286 13.3668 7.5286 14.6332 6.74755 15.4142C5.9665 16.1953 4.70017 16.1953 3.91912 15.4142C3.13807 14.6332 3.13807 13.3668 3.91912 12.5858C4.70017 11.8047 5.9665 11.8047 6.74755 12.5858ZM17.4142 4.58579C18.1953 5.36683 18.1953 6.63316 17.4142 7.41421C16.6332 8.19526 15.3668 8.19526 14.5858 7.41421C13.8047 6.63316 13.8047 5.36683 14.5858 4.58579C15.3668 3.80474 16.6332 3.80474 17.4142 4.58579Z"
                  stroke="#374160"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="menu-link-text">
              Dex analizer
            </div>
          </NavLink>{" "}
          <NavLink to={"swap"} className="mobile-menu-link">
            <div className="menu-link-icon">
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="menu-link-text">Swap</div>
          </NavLink>{" "}
          <div className="mobile-menu-link">
            <div className="menu-link-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 21.3333V28M16 21.3333L24 28M16 21.3333L8 28M28 4V14.9333C28 17.1735 28 18.2936 27.564 19.1493C27.1805 19.9019 26.5686 20.5139 25.816 20.8974C24.9603 21.3333 23.8402 21.3333 21.6 21.3333H10.4C8.15979 21.3333 7.03968 21.3333 6.18404 20.8974C5.43139 20.5139 4.81947 19.9019 4.43597 19.1493C4 18.2936 4 17.1735 4 14.9333V4M10.6667 12V16M16 9.33333V16M21.3333 14.6667V16M29.3333 4H2.66667"
                  stroke="#374160"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="menu-link-text">
              Social Analizer
            </div>
          </div>{" "}
          <div className="mobile-menu-link">
            <div className="menu-link-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 2.66666C17.751 2.66666 19.4848 3.01153 21.1024 3.6816C22.7201 4.35166 24.19 5.33379 25.4281 6.5719C26.6662 7.81002 27.6483 9.27987 28.3184 10.8976C28.9885 12.5152 29.3333 14.249 29.3333 16M16 2.66666V16M16 2.66666C8.6362 2.66666 2.66667 8.63619 2.66667 16C2.66667 23.3638 8.6362 29.3333 16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16M16 2.66666C23.3638 2.66666 29.3333 8.6362 29.3333 16M29.3333 16L16 16M29.3333 16C29.3333 18.1041 28.8353 20.1784 27.8801 22.0532C26.9248 23.928 25.5394 25.5501 23.8371 26.7869L16 16"
                  stroke="#374160"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="menu-link-text">
              Presale Analizer
            </div>
          </div>{" "}
          <div className="mobile-menu-link">
            <div className="menu-link-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 9.33333H6.13333C5.3866 9.33333 5.01323 9.33333 4.72801 9.47866C4.47713 9.60649 4.27316 9.81046 4.14532 10.0613C4 10.3466 4 10.7199 4 11.4667V25.8667C4 26.6134 4 26.9868 4.14532 27.272C4.27316 27.5229 4.47713 27.7268 4.72801 27.8547C5.01323 28 5.3866 28 6.13333 28H12M12 28H20M12 28L12 6.13333C12 5.3866 12 5.01323 12.1453 4.72801C12.2732 4.47713 12.4771 4.27316 12.728 4.14532C13.0132 4 13.3866 4 14.1333 4L17.8667 4C18.6134 4 18.9868 4 19.272 4.14532C19.5229 4.27316 19.7268 4.47713 19.8547 4.72801C20 5.01323 20 5.3866 20 6.13333V28M20 14.6667H25.8667C26.6134 14.6667 26.9868 14.6667 27.272 14.812C27.5229 14.9398 27.7268 15.1438 27.8547 15.3947C28 15.6799 28 16.0533 28 16.8V25.8667C28 26.6134 28 26.9868 27.8547 27.272C27.7268 27.5229 27.5229 27.7268 27.272 27.8547C26.9868 28 26.6134 28 25.8667 28H20"
                  stroke="#374160"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="menu-link-text">
              Ai Top Ranking
            </div>
          </div>{" "}
          <div className="mobile-menu-link">
            <div className="menu-link-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28 28L22.2 22.2M25.3333 14.6667C25.3333 20.5577 20.5577 25.3333 14.6667 25.3333C8.77563 25.3333 4 20.5577 4 14.6667C4 8.77563 8.77563 4 14.6667 4C20.5577 4 25.3333 8.77563 25.3333 14.6667Z"
                  stroke="#374160"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="menu-link-text">Explore</div>
          </div>{" "}
          <div className="mobile-menu-link">
            <div className="menu-link-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28 12.3333H20M28 5.33331H4M28 19.6666H20M28 26.6666H4M6.13333 21.3333H12.5333C13.2801 21.3333 13.6534 21.3333 13.9387 21.188C14.1895 21.0602 14.3935 20.8562 14.5213 20.6053C14.6667 20.3201 14.6667 19.9467 14.6667 19.2V12.8C14.6667 12.0532 14.6667 11.6799 14.5213 11.3947C14.3935 11.1438 14.1895 10.9398 13.9387 10.812C13.6534 10.6666 13.2801 10.6666 12.5333 10.6666H6.13333C5.3866 10.6666 5.01323 10.6666 4.72801 10.812C4.47713 10.9398 4.27316 11.1438 4.14532 11.3947C4 11.6799 4 12.0532 4 12.8V19.2C4 19.9467 4 20.3201 4.14532 20.6053C4.27316 20.8562 4.47713 21.0602 4.72801 21.188C5.01323 21.3333 5.3866 21.3333 6.13333 21.3333Z"
                  stroke="#374160"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="menu-link-text">Media</div>
          </div>{" "}
        </div>
        <div className="header-mobile-menu-socials">
          <div className="menu-social">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.36967 10.7631C8.73679 8.23111 12.3106 6.54862 14.1045 5.73214C19.2114 3.41615 20.2847 3.01651 20.9749 3C21.1282 3 21.4657 3.03302 21.6961 3.23387C21.8798 3.39964 21.926 3.61631 21.9564 3.78277C21.9874 3.94923 22.0178 4.29935 21.9874 4.56624C21.7113 7.73104 20.5152 15.4109 19.9016 18.9423C19.6407 20.4418 19.1348 20.9419 18.6441 20.9921C17.5708 21.0919 16.7577 20.2259 15.73 19.4926C14.1045 18.3432 13.1997 17.6265 11.6204 16.4936C9.79489 15.1942 10.9758 14.4782 12.0194 13.3123C12.2948 13.0124 17.0028 8.34735 17.0952 7.9312C17.1104 7.88099 17.1104 7.68151 17.0034 7.58109C16.8958 7.48135 16.7425 7.51437 16.6197 7.54807C16.4512 7.58109 13.8747 9.44654 8.85964 13.1286C8.12384 13.6789 7.46403 13.9451 6.86628 13.9286C6.20647 13.9121 4.94891 13.5289 3.99782 13.1953C2.8479 12.7957 1.92784 12.579 2.00446 11.8795C2.05069 11.5128 2.51103 11.1462 3.36967 10.7631Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="menu-social">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.3561 19.2638C16.8014 19.8483 17.2535 20.4271 17.7122 21C22.2531 20.8498 24 17.7428 24 17.7428C24 10.8429 21.0406 5.25008 21.0406 5.25008C18.0823 2.93638 15.2671 3.00082 15.2671 3.00082L14.9792 3.34305C18.4725 4.458 20.0959 6.06471 20.0959 6.06471C18.1786 4.96363 16.0785 4.2651 13.911 4.00751C12.4313 3.83608 11.0136 3.87861 9.75972 4.05005C9.65259 4.05005 9.56068 4.0668 9.45659 4.08485L9.41094 4.09323C8.69147 4.15767 6.94514 4.43609 4.74656 5.44278C3.9857 5.80756 3.53405 6.06471 3.53405 6.06471C3.53405 6.06471 5.23959 4.37164 8.93799 3.25733L8.73286 3.00018C8.73286 3.00018 5.91707 2.93573 2.95884 5.25008C2.95884 5.25008 0 10.8429 0 17.7428C0 17.7428 1.72563 20.8492 6.26706 20.9994C6.26706 20.9994 7.02731 20.0352 7.64331 19.2206C5.03447 18.4079 4.04839 16.6936 4.04839 16.6936C4.04839 16.6936 4.25413 16.8431 4.6236 17.0577C4.64733 17.084 4.67512 17.1058 4.70577 17.1221C4.73621 17.1434 4.76725 17.1595 4.7983 17.1756C4.82873 17.1917 4.85977 17.2079 4.89082 17.2291C5.40455 17.5288 5.91828 17.7647 6.39063 17.9574C7.36936 18.3602 8.38044 18.6686 9.41155 18.879C10.9521 19.1787 12.7606 19.2863 14.7333 18.9003C15.6987 18.7288 16.6854 18.4291 17.7128 17.9787C18.5427 17.6523 19.3353 17.2284 20.0758 16.7148C20.0758 16.7148 19.0483 18.4717 16.3567 19.2644L16.3561 19.2638ZM6.06133 13.3719C6.06133 12.0649 6.98653 10.9937 8.15765 10.9937C9.32877 10.9937 10.2735 12.0649 10.2534 13.3719C10.2534 14.6789 9.32816 15.75 8.15765 15.75C7.00662 15.75 6.06133 14.6789 6.06133 13.3719ZM13.5616 13.3719C13.5616 12.0649 14.4862 10.9937 15.6573 10.9937C16.8284 10.9937 17.753 12.0649 17.753 13.3719C17.753 14.6789 16.8284 15.75 15.6573 15.75C14.5069 15.75 13.5616 14.6789 13.5616 13.3719Z"
                fill="white"
              />
            </svg>
          </div>{" "}
          <div className="menu-social">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 5.07682C22.1758 5.49232 21.3502 5.63059 20.3877 5.76955C21.3502 5.21577 22.0375 4.38477 22.3127 3.27655C21.4878 3.831 20.5253 4.10755 19.4252 4.38477C18.6003 3.55377 17.3626 3 16.1249 3C13.2374 3 11.0372 5.76955 11.7245 8.53841C8.01204 8.40014 4.71242 6.59986 2.37462 3.831C1.13692 5.90782 1.82491 8.53841 3.74991 9.92318C3.06193 9.92318 2.37462 9.64595 1.68731 9.36941C1.68731 11.4462 3.19952 13.3848 5.26213 13.9385C4.57414 14.0768 3.88751 14.2151 3.19952 14.0768C3.74991 15.8771 5.39973 17.2612 7.46233 17.2612C5.81252 18.5077 3.33712 19.1997 1 18.9232C3.06193 20.1697 5.40041 21 7.87513 21C16.2625 21 20.9374 13.9385 20.6629 7.43086C21.636 6.86613 22.4423 6.05396 23 5.07682Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="header-mobile-menu-apps">
          <div className="footer-controls footer">
            <div className="footer__stores">
              <div className="footer__stores-flipper">
                <div className="footer__stores-flipper_inner">
                  <div className="front">
                    <svg
                      width="23"
                      height="29"
                      viewBox="0 0 23 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.6316 15.2731C18.6589 13.1184 19.794 11.0795 21.5947 9.95094C20.4587 8.29699 18.556 7.24833 16.5763 7.18519C14.4649 6.95925 12.418 8.4732 11.342 8.4732C10.2452 8.4732 8.58865 7.20762 6.80478 7.24503C4.47957 7.32162 2.3119 8.6693 1.18064 10.7417C-1.25112 15.0337 0.562755 21.3416 2.89218 24.811C4.05764 26.5099 5.41973 28.4076 7.20199 28.3403C8.94605 28.2665 9.59742 27.2065 11.7026 27.2065C13.7883 27.2065 14.3994 28.3403 16.2179 28.2975C18.0893 28.2665 19.2684 26.5911 20.393 24.8761C21.2304 23.6656 21.8747 22.3278 22.3022 20.9121C20.1029 19.9638 18.6342 17.7075 18.6316 15.2731Z"
                        fill="white"
                      />
                      <path
                        d="M15.1969 4.90355C16.2173 3.65479 16.72 2.04972 16.5983 0.429199C15.0393 0.596118 13.5993 1.35567 12.5652 2.55652C11.5539 3.72981 11.0276 5.30664 11.1271 6.86522C12.6866 6.88159 14.2197 6.14262 15.1969 4.90355Z"
                        fill="white"
                      />
                    </svg>

                    <div className="front__txt apple">
                      <span>Download on the</span>
                      <p>App Store</p>
                    </div>
                  </div>
                  <div className="back">
                    <p>soon</p>
                  </div>
                </div>
              </div>
              <div className="footer__stores-flipper">
                <div className="footer__stores-flipper_inner">
                  <div className="front">
                    <svg
                      width="24"
                      height="27"
                      viewBox="0 0 24 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_ii_13_1220)">
                        <path
                          d="M0.773384 0.914548C0.475198 1.22871 0.29895 1.71627 0.29895 2.34765V24.906C0.29895 25.5384 0.475198 26.0249 0.773384 26.3391L0.84921 26.4125L13.5441 13.7757V13.6268V13.4779L0.84921 0.840088L0.773384 0.914548Z"
                          fill="url(#paint0_linear_13_1220)"
                        />
                        <path
                          d="M17.7749 17.9892L13.5439 13.7756V13.6267V13.4777L17.7759 9.26514L17.8712 9.3192L22.885 12.1548C24.3165 12.9647 24.3165 14.2897 22.885 15.1006L17.8712 17.9362L17.7749 17.9892Z"
                          fill="url(#paint1_linear_13_1220)"
                        />
                        <g filter="url(#filter1_i_13_1220)">
                          <path
                            d="M17.8715 17.9351L13.5432 13.6266L0.773438 26.3388C1.2448 26.8366 2.02459 26.8978 2.90275 26.4021L17.8715 17.9351Z"
                            fill="url(#paint2_linear_13_1220)"
                          />
                        </g>
                        <path
                          d="M17.8715 9.31832L2.90275 0.852318C2.02459 0.355578 1.2448 0.417798 0.773438 0.915559L13.5442 13.6278L17.8715 9.31832Z"
                          fill="url(#paint3_linear_13_1220)"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_ii_13_1220"
                          x="0.29895"
                          y="0.509521"
                          width="23.6597"
                          height="26.235"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="-0.795" />
                          <feComposite
                            in2="hardAlpha"
                            operator="arithmetic"
                            k2="-1"
                            k3="1"
                          />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect1_innerShadow_13_1220"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="0.795" />
                          <feComposite
                            in2="hardAlpha"
                            operator="arithmetic"
                            k2="-1"
                            k3="1"
                          />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="effect1_innerShadow_13_1220"
                            result="effect2_innerShadow_13_1220"
                          />
                        </filter>
                        <filter
                          id="filter1_i_13_1220"
                          x="0.773438"
                          y="13.6266"
                          width="17.098"
                          height="13.1179"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="-0.795" />
                          <feComposite
                            in2="hardAlpha"
                            operator="arithmetic"
                            k2="-1"
                            k3="1"
                          />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect1_innerShadow_13_1220"
                          />
                        </filter>
                        <linearGradient
                          id="paint0_linear_13_1220"
                          x1="12.4188"
                          y1="2.10897"
                          x2="-4.69865"
                          y2="19.3052"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#00A0FF" />
                          <stop
                            offset="0.0066"
                            stopColor="#00A1FF"
                          />
                          <stop
                            offset="0.2601"
                            stopColor="#00BEFF"
                          />
                          <stop
                            offset="0.5122"
                            stopColor="#00D2FF"
                          />
                          <stop
                            offset="0.7604"
                            stopColor="#00DFFF"
                          />
                          <stop
                            offset="1"
                            stopColor="#00E3FF"
                          />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_13_1220"
                          x1="24.7484"
                          y1="13.6267"
                          x2="-0.0449105"
                          y2="13.6267"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFE000" />
                          <stop
                            offset="0.4087"
                            stopColor="#FFBD00"
                          />
                          <stop
                            offset="0.7754"
                            stopColor="#FFA500"
                          />
                          <stop
                            offset="1"
                            stopColor="#FF9C00"
                          />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_13_1220"
                          x1="15.5209"
                          y1="15.9664"
                          x2="-7.69251"
                          y2="39.2866"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FF3A44" />
                          <stop
                            offset="1"
                            stopColor="#C31162"
                          />
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear_13_1220"
                          x1="-2.44266"
                          y1="-6.59389"
                          x2="7.92278"
                          y2="3.81924"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#32A071" />
                          <stop
                            offset="0.0685"
                            stopColor="#2DA771"
                          />
                          <stop
                            offset="0.4762"
                            stopColor="#15CF74"
                          />
                          <stop
                            offset="0.8009"
                            stopColor="#06E775"
                          />
                          <stop
                            offset="1"
                            stopColor="#00F076"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="front__txt play">
                      <span>GET IN ON</span>
                      <p>Google Play</p>
                    </div>
                  </div>
                  <div className="back">
                    <p>soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="footer-control">
            <img src={icon2} alt="" />
          </div>
          <div className="footer-control">
            <img src={icon} alt="" />
          </div>
        </div> */}
        </div>
        <div className="header-mobile-menu-copy">
          <div className="footer-copy">
            Copyright © 2023, All Rights Reserved by Dex.ai{" "}
            <br />
            Ads & Marketing: info@dex.ai
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

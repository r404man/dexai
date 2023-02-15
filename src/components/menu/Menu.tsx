import React, { useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import DexMenu from "./components/dexMenu/DexMenu";
import HomeMenu from "./components/homeMenu/HomeMenu";
import "./menu.scss";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const windowSize = useRef([window.innerWidth]);
  const location = useLocation().pathname;
  let x = location.split("/");

  if (windowSize.current[0] < 769) {
    if (x[1] === "dex")
      return (
        <div className="mobile-menu">
          <DexMenu />
        </div>
      );
    return <HomeMenu />;
  }

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={isOpen ? "menu isOpen" : "menu"}
    >
      <nav>
        <NavLink to={""} className="nav-link">
          <div className="link-icon">
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

          <div className="link-text">
            <div className="link-title">Ai Top Ranking</div>
          </div>
        </NavLink>

        <NavLink to={"dex"} className="nav-link">
          <div className="link-icon">
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

          <div className="link-text">
            <div className="link-title">Dex analizer</div>
          </div>
        </NavLink>

        <NavLink to={"swap"} className="nav-link">
          <div className="link-icon">
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

          <div className="link-text">
            <div className="link-title">Swap</div>
          </div>
        </NavLink>

        <a href="" className="nav-link">
          <div className="link-icon">
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

          <div className="link-text">
            <div className="link-title">
              Social Analizer
            </div>
          </div>
        </a>

        <a href="" className="nav-link">
          <div className="link-icon">
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

          <div className="link-text">
            <div className="link-title">
              Presale Analizer
            </div>
          </div>
        </a>

        <a href="" className="nav-link">
          <div className="link-icon">
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

          <div className="link-text">
            <div className="link-title">Ai Top Ranking</div>
          </div>
        </a>

        <a href="" className="nav-link">
          <div className="link-icon">
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

          <div className="link-text">
            <div className="link-title">Explore</div>
          </div>
        </a>

        <a href="" className="nav-link">
          <div className="link-icon">
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

          <div className="link-text">
            <div className="link-title">Media</div>
          </div>
        </a>
      </nav>
    </div>
  );
}

export default Menu;

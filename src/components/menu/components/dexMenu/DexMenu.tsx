import React from "react";
import { NavLink } from "react-router-dom";

function DexMenu() {
  return (
    <nav className="mobile-nav dex">
      <NavLink to="/dex/chart" className={"mobile-link"}>
        <div className="mobile-link-icon">
          <svg
            width="27"
            height="26"
            viewBox="0 0 27 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 21.6666V10.8333M13.5 21.6666V4.33325M7 21.6666V15.1666"
              stroke="#374160"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="mobile-link-text">Chart</div>
      </NavLink>
      <NavLink to={"/dex/overview"} className="mobile-link">
        <div className="mobile-link-icon">
          <svg
            width="27"
            height="26"
            viewBox="0 0 27 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4998 17.3334V13.0001M13.4998 8.66675H13.5107M24.3332 13.0001C24.3332 18.9832 19.4829 23.8334 13.4998 23.8334C7.51675 23.8334 2.6665 18.9832 2.6665 13.0001C2.6665 7.017 7.51675 2.16675 13.4998 2.16675C19.4829 2.16675 24.3332 7.017 24.3332 13.0001Z"
              stroke="#374160"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="mobile-link-text">Overview</div>
      </NavLink>
      <NavLink to={"/dex/holders"} className="mobile-link">
        <div className="mobile-link-icon">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.25 13H22.75M3.25 6.5H22.75M3.25 19.5H16.25"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="mobile-link-text">Holders</div>
      </NavLink>
    </nav>
  );
}

export default DexMenu;

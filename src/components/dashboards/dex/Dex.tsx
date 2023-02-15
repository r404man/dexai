import React, { useEffect, useRef, useState } from "react";
import icon from "../../../assets/selector.png";
import "./dex.scss";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import {
  Link,
  redirect,
  useNavigate,
} from "react-router-dom";
import HolderItem from "./components/holderItem/HolderItem";
ChartJS.register(ArcElement, Tooltip, Legend);

function Dex() {
  const [isToggle, setIsToggle] = useState(true);
  const windowSize = useRef([window.innerWidth]);
  let navigate = useNavigate();
  useEffect(() => {
    if (windowSize.current[0] < 769) {
      return navigate("/dex/chart");
    }
  });

  return (
    <div className="dex">
      <div className="dex-controller-toggler">
        <h1
          onClick={() => setIsToggle(true)}
          className={isToggle ? "active" : ""}
        >
          Overview
        </h1>
        <h1
          onClick={() => setIsToggle(false)}
          className={!isToggle ? "active" : ""}
        >
          Holders
        </h1>
      </div>

      <div className="dex-part">
        <div className="dex-controller">
          {isToggle ? (
            <Overview isMobile={false} />
          ) : (
            <Holders isMobile={false} />
          )}
        </div>
        <div className="dex-info">
          <div className="dex-info-graph">
            <div>График</div>
          </div>
          <div className="dex-data">
            <div className="dex-table">
              <table>
                <thead>
                  <tr>
                    <th className="time">Time</th>
                    <th className="type">Type</th>
                    <th className="price1">Price (BNB)</th>
                    <th className="price2">Price (USD)</th>
                    <th className="amount">
                      Amount (Future-AI)
                    </th>
                    <th className="total">Total USD</th>
                    <th className="from">From</th>
                    <th className="tx">TX</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="plus">
                    <td>57 seconds ago</td>
                    <td>Sell</td>
                    <td>0.00008262</td>
                    <td>$0.02851</td>
                    <td>2,427.45</td>
                    <td>$62.65</td>
                    <td className="from">0x0ff...9j3d</td>
                    <td className="tx">
                      <Link to={""} className="tx-link">
                        View
                      </Link>
                    </td>
                  </tr>
                  <tr className="plus">
                    <td>57 seconds ago</td>
                    <td>Sell</td>
                    <td>0.00008262</td>
                    <td>$0.02851</td>
                    <td>2,427.45</td>
                    <td>$62.65</td>
                    <td className="from">0x0ff...9j3d</td>
                    <td className="tx">
                      <Link to={""} className="tx-link">
                        View
                      </Link>
                    </td>
                  </tr>
                  <tr className="plus">
                    <td>57 seconds ago</td>
                    <td>Sell</td>
                    <td>0.00008262</td>
                    <td>$0.02851</td>
                    <td>2,427.45</td>
                    <td>$62.65</td>
                    <td className="from">0x0ff...9j3d</td>
                    <td className="tx">
                      <Link to={""} className="tx-link">
                        View
                      </Link>
                    </td>
                  </tr>
                  <tr className="plus">
                    <td>57 seconds ago</td>
                    <td>Sell</td>
                    <td>0.00008262</td>
                    <td>$0.02851</td>
                    <td>2,427.45</td>
                    <td>$62.65</td>
                    <td className="from">0x0ff...9j3d</td>
                    <td className="tx">
                      <Link to={""} className="tx-link">
                        View
                      </Link>
                    </td>
                  </tr>
                  <tr className="minus">
                    <td>57 seconds ago</td>
                    <td>Sell</td>
                    <td>0.00008262</td>
                    <td>$0.02851</td>
                    <td>2,427.45</td>
                    <td>$62.65</td>
                    <td className="from">0x0ff...9j3d</td>
                    <td className="tx">
                      <Link to={""} className="tx-link">
                        View
                      </Link>
                    </td>
                  </tr>
                  <tr className="plus">
                    <td>57 seconds ago</td>
                    <td>Sell</td>
                    <td>0.00008262</td>
                    <td>$0.02851</td>
                    <td>2,427.45</td>
                    <td>$62.65</td>
                    <td className="from">0x0ff...9j3d</td>
                    <td className="tx">
                      <Link to={""} className="tx-link">
                        View
                      </Link>
                    </td>
                  </tr>
                  <tr className="plus">
                    <td>57 seconds ago</td>
                    <td>Sell</td>
                    <td>0.00008262</td>
                    <td>$0.02851</td>
                    <td>2,427.45</td>
                    <td>$62.65</td>
                    <td className="from">0x0ff...9j3d</td>
                    <td className="tx">
                      <Link to={""} className="tx-link">
                        View
                      </Link>
                    </td>
                  </tr>
                  <tr className="plus">
                    <td>57 seconds ago</td>
                    <td>Sell</td>
                    <td>0.00008262</td>
                    <td>$0.02851</td>
                    <td>2,427.45</td>
                    <td>$62.65</td>
                    <td className="from">0x0ff...9j3d</td>
                    <td className="tx">
                      <Link to={""} className="tx-link">
                        View
                      </Link>
                    </td>
                  </tr>
                  <tr className="plus">
                    <td>57 seconds ago</td>
                    <td>Sell</td>
                    <td>0.00008262</td>
                    <td>$0.02851</td>
                    <td>2,427.45</td>
                    <td>$62.65</td>
                    <td className="from">0x0ff...9j3d</td>
                    <td className="tx">
                      <Link to={""} className="tx-link">
                        View
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="dex-table-controls">
              <div className="table-controls">
                <div className="controls">
                  <div className="controls-btns">
                    <div className="controls-btns-icon">
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
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="controls-btns-text">
                      Назад
                    </div>
                  </div>
                  <div className="controls-page-list">
                    <div className="page-item">1</div>
                    <div className="page-item">2</div>{" "}
                    <div className="page-item">3</div>{" "}
                    <div className="page-item active">
                      4
                    </div>
                    <div className="page-item">...</div>
                    <div className="page-item">414</div>
                  </div>
                  <div className="controls-btns btn-forward">
                    <div className="controls-btns-text">
                      Вперед
                    </div>
                    <div className="controls-btns-icon">
                      <svg
                        className="forward"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 12L6 8L10 4"
                          stroke="#374160"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Overview({ isMobile }: any) {
  function handleSelector(e: any, currItem: any) {
    let items = document.querySelectorAll(".head-item");
    items.forEach((item) => (item.className = "head-item"));
    e.target.classList.add("active");
  }

  let selectors = [
    { id: 0, text: "5m", status: false },
    { id: 1, text: "15m", status: false },
    { id: 2, text: "30m", status: false },
    { id: 3, text: "1h", status: false },
    { id: 4, text: "6h", status: false },
    { id: 4, text: "24h", status: false },
  ];

  let listItems = selectors.map((item, index) => (
    <div
      key={index}
      onClick={(e) => {
        handleSelector(e, item);
      }}
      className={
        item.status ? "head-item active" : "head-item"
      }
    >
      {item.text}
    </div>
  ));

  return (
    <div className="dex">
      <div className="controller-overview">
        {isMobile ? <h1>Overview</h1> : <></>}
        {/* <h1>Overview</h1> */}
        <div className="controller-currency">
          <div className="currency-icon">
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

            {/* <img width={40} height={40} src={icon} alt="" /> */}
          </div>
          <div className="currency-text">
            <div className="currency-title">Ethereum</div>
            <div className="currency-subtitle">ETH/BNB</div>
          </div>
        </div>
        <div className="controller-amount">
          <div className="amount-top">
            <div className="amount-number">
              <span>$</span>1,021.49
            </div>
            <div className="amount-percent minus">
              <div className="percent-icon">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0H0L5 5L10 10V0Z"
                    fill="#60F5C2"
                  />
                </svg>
              </div>
              <div className="percent-number">+281,3%</div>
            </div>
          </div>
          <div className="amount-footer">5,09 BNB</div>
        </div>
        <div className="controller-favour">
          <div className="favour-icon">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.223 3.74107C12.4726 3.23522 12.5975 2.9823 12.767 2.90149C12.9144 2.83118 13.0858 2.83118 13.2332 2.90149C13.4027 2.9823 13.5276 3.23522 13.7772 3.74107L16.1461 8.5402C16.2199 8.68954 16.2567 8.76421 16.3106 8.82219C16.3583 8.87352 16.4155 8.91511 16.479 8.94465C16.5508 8.97802 16.6332 8.99006 16.7979 9.01415L22.0968 9.78866C22.6548 9.87022 22.9338 9.911 23.0629 10.0473C23.1753 10.1659 23.2281 10.3288 23.2067 10.4907C23.1821 10.6769 22.9802 10.8736 22.5762 11.2671L18.7433 15.0003C18.6238 15.1166 18.5641 15.1748 18.5255 15.2441C18.4914 15.3054 18.4695 15.3727 18.4611 15.4424C18.4515 15.521 18.4656 15.6032 18.4938 15.7676L19.3982 21.0406C19.4936 21.5968 19.5413 21.8748 19.4517 22.0399C19.3737 22.1834 19.235 22.2841 19.0744 22.3139C18.8898 22.3481 18.64 22.2168 18.1406 21.9542L13.4035 19.463C13.2559 19.3853 13.1821 19.3465 13.1043 19.3313C13.0355 19.3178 12.9647 19.3178 12.8959 19.3313C12.8181 19.3465 12.7443 19.3853 12.5967 19.463L7.85958 21.9542C7.36016 22.2168 7.11044 22.3481 6.9258 22.3139C6.76515 22.2841 6.62653 22.1834 6.54855 22.0399C6.45892 21.8748 6.50661 21.5968 6.602 21.0406L7.50637 15.7676C7.53457 15.6032 7.54867 15.521 7.53913 15.4424C7.53068 15.3727 7.50879 15.3054 7.47465 15.2441C7.43611 15.1748 7.37636 15.1166 7.25688 15.0003L3.42402 11.2671C3.02005 10.8736 2.81806 10.6769 2.79348 10.4907C2.7721 10.3288 2.82493 10.1659 2.93727 10.0473C3.06639 9.911 3.34538 9.87022 3.90338 9.78866L9.20225 9.01415C9.36704 8.99006 9.44944 8.97802 9.52119 8.94465C9.58473 8.91511 9.64192 8.87352 9.68962 8.82219C9.74348 8.76421 9.78034 8.68954 9.85405 8.5402L12.223 3.74107Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="favour-text">
            Add to Watchlist
          </div>
        </div>
        <div className="controller-lists">
          <ul className="controller-list">
            <li className="list-item">
              <div className="list-item-label">
                Market Cap
              </div>
              <div className="list-item-value">$2.58M</div>
            </li>
            <li className="list-item">
              <div className="list-item-label">
                24h Volume
              </div>
              <div className="list-item-value">$2.58M</div>
            </li>
            <li className="list-item">
              <div className="list-item-label">Holders</div>
              <div className="list-item-value">$2.58M</div>
            </li>
          </ul>
          <ul className="controller-list">
            <li className="list-item">
              <div className="list-item-label">
                Liquidity
              </div>
              <div className="list-item-value">$2.58M</div>
            </li>
            <li className="list-item">
              <div className="list-item-label">
                Total supply
              </div>
              <div className="list-item-value">$2.58M</div>
            </li>
            <li className="list-item">
              <div className="list-item-label">Taxes</div>
              <div className="list-item-value">
                BUY -0% / SELL - 3%
              </div>
            </li>
          </ul>
        </div>

        <div className="controller-cards">
          <div className="controller-card plus">
            <div className="amount-percent plus">
              <div className="percent-icon">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0H0L5 5L10 10V0Z"
                    fill="#60F5C2"
                  />
                </svg>
              </div>
              <div className="percent-number">+281,3%</div>
            </div>
            <div className="card-value">5m</div>
          </div>
          <div className="controller-card minus">
            <div className="amount-percent minus">
              <div className="percent-icon">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0H0L5 5L10 10V0Z"
                    fill="#60F5C2"
                  />
                </svg>
              </div>
              <div className="percent-number">+281,3%</div>
            </div>
            <div className="card-value">5m</div>
          </div>
          <div className="controller-card minus">
            <div className="amount-percent minus">
              <div className="percent-icon">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0H0L5 5L10 10V0Z"
                    fill="#60F5C2"
                  />
                </svg>
              </div>
              <div className="percent-number">+281,3%</div>
            </div>
            <div className="card-value">5m</div>
          </div>
          <div className="controller-card plus">
            <div className="amount-percent plus">
              <div className="percent-icon">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0H0L5 5L10 10V0Z"
                    fill="#60F5C2"
                  />
                </svg>
              </div>
              <div className="percent-number">+281,3%</div>
            </div>
            <div className="card-value">5m</div>
          </div>
          <div className="controller-card minus">
            <div className="amount-percent minus">
              <div className="percent-icon">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0H0L5 5L10 10V0Z"
                    fill="#60F5C2"
                  />
                </svg>
              </div>
              <div className="percent-number">+281,3%</div>
            </div>
            <div className="card-value">5m</div>
          </div>
          <div className="controller-card minus">
            <div className="amount-percent minus">
              <div className="percent-icon">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0H0L5 5L10 10V0Z"
                    fill="#60F5C2"
                  />
                </svg>
              </div>
              <div className="percent-number">+281,3%</div>
            </div>
            <div className="card-value">5m</div>
          </div>
        </div>

        <div className="controller-selector">
          <div className="selector-head">{listItems}</div>
          <div className="selector-footer">
            <Link to={""} className="selector-footer-item">
              <div className="item-title">TXNS</div>
              <div className="item-subtitle">20,112</div>
            </Link>
            <Link to={""} className="selector-footer-item">
              <div className="item-title">Buys</div>
              <div className="item-subtitle">20,112</div>
            </Link>
            <Link to={""} className="selector-footer-item">
              <div className="item-title">Sells</div>
              <div className="item-subtitle">20,112</div>
            </Link>
            <Link to={""} className="selector-footer-item">
              <div className="item-title">Volume</div>
              <div className="item-subtitle">$8,37M</div>
            </Link>
          </div>
        </div>

        <div className="controller-wallets">
          <div className="controller-wallet">
            <div className="wallet-name">Pair</div>
            <div className="wallet-item">
              <div className="wallet-value">
                0x0ff...9j3d
              </div>
              <div className="wallet-copy-btn">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.25 2.5H12.1667C14.0335 2.5 14.9669 2.5 15.68 2.86331C16.3072 3.18289 16.8171 3.69282 17.1367 4.32003C17.5 5.03307 17.5 5.96649 17.5 7.83333V13.75M5.16667 17.5H11.9167C12.8501 17.5 13.3168 17.5 13.6733 17.3183C13.9869 17.1586 14.2419 16.9036 14.4017 16.59C14.5833 16.2335 14.5833 15.7668 14.5833 14.8333V8.08333C14.5833 7.14991 14.5833 6.6832 14.4017 6.32668C14.2419 6.01308 13.9869 5.75811 13.6733 5.59832C13.3168 5.41667 12.8501 5.41667 11.9167 5.41667H5.16667C4.23325 5.41667 3.76654 5.41667 3.41002 5.59832C3.09641 5.75811 2.84144 6.01308 2.68166 6.32668C2.5 6.6832 2.5 7.14991 2.5 8.08333V14.8333C2.5 15.7668 2.5 16.2335 2.68166 16.59C2.84144 16.9036 3.09641 17.1586 3.41002 17.3183C3.76654 17.5 4.23325 17.5 5.16667 17.5Z"
                    stroke="white"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="wallet-icons">
                <div className="wallet-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_41_2864)">
                      <path
                        d="M4.15583 9.52189C4.15585 9.41022 4.17792 9.29965 4.22077 9.19654C4.26362 9.09343 4.32641 8.99979 4.40554 8.92102C4.48466 8.84225 4.57856 8.77989 4.68184 8.73753C4.78512 8.69516 4.89575 8.67362 5.00738 8.67414L6.41917 8.67875C6.64427 8.67875 6.86015 8.76821 7.01933 8.92744C7.1785 9.08667 7.26792 9.30263 7.26792 9.52782V14.8685C7.42693 14.8214 7.63042 14.7711 7.85435 14.7183C8.00949 14.6818 8.14775 14.5939 8.24672 14.469C8.34569 14.344 8.39956 14.1892 8.39959 14.0298V7.40556C8.39959 7.18036 8.48901 6.96438 8.64818 6.80512C8.80735 6.64586 9.02323 6.55637 9.24835 6.55633H10.6644C10.8895 6.55637 11.1054 6.64586 11.2646 6.80512C11.4238 6.96438 11.5132 7.18036 11.5132 7.40556V13.5539C11.5132 13.5539 11.8674 13.4105 12.2123 13.2648C12.3405 13.2106 12.4498 13.1198 12.5267 13.0038C12.6037 12.8878 12.6447 12.7518 12.6448 12.6126V5.28281C12.6448 5.05765 12.7342 4.84171 12.8934 4.68249C13.0525 4.52326 13.2684 4.43378 13.4934 4.43374H14.908C15.133 4.43396 15.3487 4.52351 15.5076 4.68272C15.6666 4.84193 15.7559 5.05777 15.7559 5.28281V11.3186C16.9824 10.4295 18.2253 9.36002 19.2116 8.07413C19.3547 7.88748 19.4494 7.6683 19.4872 7.43613C19.5251 7.20397 19.5049 6.96604 19.4284 6.74358C18.9719 5.42953 18.2461 4.2253 17.2976 3.20795C16.3491 2.1906 15.1987 1.38252 13.9201 0.835445C12.6415 0.288364 11.2628 0.0143226 9.87227 0.0308574C8.48172 0.0473922 7.10993 0.354138 5.84469 0.931467C4.57944 1.5088 3.4486 2.34399 2.52454 3.38361C1.60047 4.42323 0.903524 5.64438 0.478299 6.96892C0.0530733 8.29345 -0.0910677 9.6922 0.0550987 11.0757C0.201265 12.4591 0.634521 13.7968 1.32714 15.0032C1.44781 15.2113 1.62534 15.3806 1.83888 15.4913C2.05242 15.6019 2.29309 15.6493 2.53263 15.6279C2.80022 15.6043 3.1334 15.571 3.52952 15.5245C3.70192 15.5049 3.86108 15.4226 3.97669 15.2931C4.09231 15.1637 4.1563 14.9962 4.15648 14.8227V9.52189"
                        fill="white"
                      />
                      <path
                        d="M4.12573 18.0869C5.61681 19.172 7.37891 19.8234 9.21706 19.9689C11.0552 20.1144 12.8978 19.7483 14.5409 18.9113C16.184 18.0742 17.5636 16.7987 18.5271 15.226C19.4905 13.6532 20.0003 11.8445 19.9999 9.99989C19.9999 9.76912 19.9892 9.54197 19.9739 9.31549C16.322 14.7641 9.57911 17.3113 4.12573 18.0869Z"
                        fill="#F0B90B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_41_2864">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <div className="wallet-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_41_2864)">
                      <path
                        d="M4.15583 9.52189C4.15585 9.41022 4.17792 9.29965 4.22077 9.19654C4.26362 9.09343 4.32641 8.99979 4.40554 8.92102C4.48466 8.84225 4.57856 8.77989 4.68184 8.73753C4.78512 8.69516 4.89575 8.67362 5.00738 8.67414L6.41917 8.67875C6.64427 8.67875 6.86015 8.76821 7.01933 8.92744C7.1785 9.08667 7.26792 9.30263 7.26792 9.52782V14.8685C7.42693 14.8214 7.63042 14.7711 7.85435 14.7183C8.00949 14.6818 8.14775 14.5939 8.24672 14.469C8.34569 14.344 8.39956 14.1892 8.39959 14.0298V7.40556C8.39959 7.18036 8.48901 6.96438 8.64818 6.80512C8.80735 6.64586 9.02323 6.55637 9.24835 6.55633H10.6644C10.8895 6.55637 11.1054 6.64586 11.2646 6.80512C11.4238 6.96438 11.5132 7.18036 11.5132 7.40556V13.5539C11.5132 13.5539 11.8674 13.4105 12.2123 13.2648C12.3405 13.2106 12.4498 13.1198 12.5267 13.0038C12.6037 12.8878 12.6447 12.7518 12.6448 12.6126V5.28281C12.6448 5.05765 12.7342 4.84171 12.8934 4.68249C13.0525 4.52326 13.2684 4.43378 13.4934 4.43374H14.908C15.133 4.43396 15.3487 4.52351 15.5076 4.68272C15.6666 4.84193 15.7559 5.05777 15.7559 5.28281V11.3186C16.9824 10.4295 18.2253 9.36002 19.2116 8.07413C19.3547 7.88748 19.4494 7.6683 19.4872 7.43613C19.5251 7.20397 19.5049 6.96604 19.4284 6.74358C18.9719 5.42953 18.2461 4.2253 17.2976 3.20795C16.3491 2.1906 15.1987 1.38252 13.9201 0.835445C12.6415 0.288364 11.2628 0.0143226 9.87227 0.0308574C8.48172 0.0473922 7.10993 0.354138 5.84469 0.931467C4.57944 1.5088 3.4486 2.34399 2.52454 3.38361C1.60047 4.42323 0.903524 5.64438 0.478299 6.96892C0.0530733 8.29345 -0.0910677 9.6922 0.0550987 11.0757C0.201265 12.4591 0.634521 13.7968 1.32714 15.0032C1.44781 15.2113 1.62534 15.3806 1.83888 15.4913C2.05242 15.6019 2.29309 15.6493 2.53263 15.6279C2.80022 15.6043 3.1334 15.571 3.52952 15.5245C3.70192 15.5049 3.86108 15.4226 3.97669 15.2931C4.09231 15.1637 4.1563 14.9962 4.15648 14.8227V9.52189"
                        fill="white"
                      />
                      <path
                        d="M4.12573 18.0869C5.61681 19.172 7.37891 19.8234 9.21706 19.9689C11.0552 20.1144 12.8978 19.7483 14.5409 18.9113C16.184 18.0742 17.5636 16.7987 18.5271 15.226C19.4905 13.6532 20.0003 11.8445 19.9999 9.99989C19.9999 9.76912 19.9892 9.54197 19.9739 9.31549C16.322 14.7641 9.57911 17.3113 4.12573 18.0869Z"
                        fill="#F0B90B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_41_2864">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="controller-wallet">
            <div className="wallet-name">Fut...</div>
            <div className="wallet-item">
              <div className="wallet-value">
                0x0ff...9j3d
              </div>
              <div className="wallet-copy-btn">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.25 2.5H12.1667C14.0335 2.5 14.9669 2.5 15.68 2.86331C16.3072 3.18289 16.8171 3.69282 17.1367 4.32003C17.5 5.03307 17.5 5.96649 17.5 7.83333V13.75M5.16667 17.5H11.9167C12.8501 17.5 13.3168 17.5 13.6733 17.3183C13.9869 17.1586 14.2419 16.9036 14.4017 16.59C14.5833 16.2335 14.5833 15.7668 14.5833 14.8333V8.08333C14.5833 7.14991 14.5833 6.6832 14.4017 6.32668C14.2419 6.01308 13.9869 5.75811 13.6733 5.59832C13.3168 5.41667 12.8501 5.41667 11.9167 5.41667H5.16667C4.23325 5.41667 3.76654 5.41667 3.41002 5.59832C3.09641 5.75811 2.84144 6.01308 2.68166 6.32668C2.5 6.6832 2.5 7.14991 2.5 8.08333V14.8333C2.5 15.7668 2.5 16.2335 2.68166 16.59C2.84144 16.9036 3.09641 17.1586 3.41002 17.3183C3.76654 17.5 4.23325 17.5 5.16667 17.5Z"
                    stroke="white"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="wallet-icons">
                <div className="wallet-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_41_2864)">
                      <path
                        d="M4.15583 9.52189C4.15585 9.41022 4.17792 9.29965 4.22077 9.19654C4.26362 9.09343 4.32641 8.99979 4.40554 8.92102C4.48466 8.84225 4.57856 8.77989 4.68184 8.73753C4.78512 8.69516 4.89575 8.67362 5.00738 8.67414L6.41917 8.67875C6.64427 8.67875 6.86015 8.76821 7.01933 8.92744C7.1785 9.08667 7.26792 9.30263 7.26792 9.52782V14.8685C7.42693 14.8214 7.63042 14.7711 7.85435 14.7183C8.00949 14.6818 8.14775 14.5939 8.24672 14.469C8.34569 14.344 8.39956 14.1892 8.39959 14.0298V7.40556C8.39959 7.18036 8.48901 6.96438 8.64818 6.80512C8.80735 6.64586 9.02323 6.55637 9.24835 6.55633H10.6644C10.8895 6.55637 11.1054 6.64586 11.2646 6.80512C11.4238 6.96438 11.5132 7.18036 11.5132 7.40556V13.5539C11.5132 13.5539 11.8674 13.4105 12.2123 13.2648C12.3405 13.2106 12.4498 13.1198 12.5267 13.0038C12.6037 12.8878 12.6447 12.7518 12.6448 12.6126V5.28281C12.6448 5.05765 12.7342 4.84171 12.8934 4.68249C13.0525 4.52326 13.2684 4.43378 13.4934 4.43374H14.908C15.133 4.43396 15.3487 4.52351 15.5076 4.68272C15.6666 4.84193 15.7559 5.05777 15.7559 5.28281V11.3186C16.9824 10.4295 18.2253 9.36002 19.2116 8.07413C19.3547 7.88748 19.4494 7.6683 19.4872 7.43613C19.5251 7.20397 19.5049 6.96604 19.4284 6.74358C18.9719 5.42953 18.2461 4.2253 17.2976 3.20795C16.3491 2.1906 15.1987 1.38252 13.9201 0.835445C12.6415 0.288364 11.2628 0.0143226 9.87227 0.0308574C8.48172 0.0473922 7.10993 0.354138 5.84469 0.931467C4.57944 1.5088 3.4486 2.34399 2.52454 3.38361C1.60047 4.42323 0.903524 5.64438 0.478299 6.96892C0.0530733 8.29345 -0.0910677 9.6922 0.0550987 11.0757C0.201265 12.4591 0.634521 13.7968 1.32714 15.0032C1.44781 15.2113 1.62534 15.3806 1.83888 15.4913C2.05242 15.6019 2.29309 15.6493 2.53263 15.6279C2.80022 15.6043 3.1334 15.571 3.52952 15.5245C3.70192 15.5049 3.86108 15.4226 3.97669 15.2931C4.09231 15.1637 4.1563 14.9962 4.15648 14.8227V9.52189"
                        fill="white"
                      />
                      <path
                        d="M4.12573 18.0869C5.61681 19.172 7.37891 19.8234 9.21706 19.9689C11.0552 20.1144 12.8978 19.7483 14.5409 18.9113C16.184 18.0742 17.5636 16.7987 18.5271 15.226C19.4905 13.6532 20.0003 11.8445 19.9999 9.99989C19.9999 9.76912 19.9892 9.54197 19.9739 9.31549C16.322 14.7641 9.57911 17.3113 4.12573 18.0869Z"
                        fill="#F0B90B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_41_2864">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="wallet-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_41_2864)">
                      <path
                        d="M4.15583 9.52189C4.15585 9.41022 4.17792 9.29965 4.22077 9.19654C4.26362 9.09343 4.32641 8.99979 4.40554 8.92102C4.48466 8.84225 4.57856 8.77989 4.68184 8.73753C4.78512 8.69516 4.89575 8.67362 5.00738 8.67414L6.41917 8.67875C6.64427 8.67875 6.86015 8.76821 7.01933 8.92744C7.1785 9.08667 7.26792 9.30263 7.26792 9.52782V14.8685C7.42693 14.8214 7.63042 14.7711 7.85435 14.7183C8.00949 14.6818 8.14775 14.5939 8.24672 14.469C8.34569 14.344 8.39956 14.1892 8.39959 14.0298V7.40556C8.39959 7.18036 8.48901 6.96438 8.64818 6.80512C8.80735 6.64586 9.02323 6.55637 9.24835 6.55633H10.6644C10.8895 6.55637 11.1054 6.64586 11.2646 6.80512C11.4238 6.96438 11.5132 7.18036 11.5132 7.40556V13.5539C11.5132 13.5539 11.8674 13.4105 12.2123 13.2648C12.3405 13.2106 12.4498 13.1198 12.5267 13.0038C12.6037 12.8878 12.6447 12.7518 12.6448 12.6126V5.28281C12.6448 5.05765 12.7342 4.84171 12.8934 4.68249C13.0525 4.52326 13.2684 4.43378 13.4934 4.43374H14.908C15.133 4.43396 15.3487 4.52351 15.5076 4.68272C15.6666 4.84193 15.7559 5.05777 15.7559 5.28281V11.3186C16.9824 10.4295 18.2253 9.36002 19.2116 8.07413C19.3547 7.88748 19.4494 7.6683 19.4872 7.43613C19.5251 7.20397 19.5049 6.96604 19.4284 6.74358C18.9719 5.42953 18.2461 4.2253 17.2976 3.20795C16.3491 2.1906 15.1987 1.38252 13.9201 0.835445C12.6415 0.288364 11.2628 0.0143226 9.87227 0.0308574C8.48172 0.0473922 7.10993 0.354138 5.84469 0.931467C4.57944 1.5088 3.4486 2.34399 2.52454 3.38361C1.60047 4.42323 0.903524 5.64438 0.478299 6.96892C0.0530733 8.29345 -0.0910677 9.6922 0.0550987 11.0757C0.201265 12.4591 0.634521 13.7968 1.32714 15.0032C1.44781 15.2113 1.62534 15.3806 1.83888 15.4913C2.05242 15.6019 2.29309 15.6493 2.53263 15.6279C2.80022 15.6043 3.1334 15.571 3.52952 15.5245C3.70192 15.5049 3.86108 15.4226 3.97669 15.2931C4.09231 15.1637 4.1563 14.9962 4.15648 14.8227V9.52189"
                        fill="white"
                      />
                      <path
                        d="M4.12573 18.0869C5.61681 19.172 7.37891 19.8234 9.21706 19.9689C11.0552 20.1144 12.8978 19.7483 14.5409 18.9113C16.184 18.0742 17.5636 16.7987 18.5271 15.226C19.4905 13.6532 20.0003 11.8445 19.9999 9.99989C19.9999 9.76912 19.9892 9.54197 19.9739 9.31549C16.322 14.7641 9.57911 17.3113 4.12573 18.0869Z"
                        fill="#F0B90B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_41_2864">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <div className="wallet-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_41_2864)">
                      <path
                        d="M4.15583 9.52189C4.15585 9.41022 4.17792 9.29965 4.22077 9.19654C4.26362 9.09343 4.32641 8.99979 4.40554 8.92102C4.48466 8.84225 4.57856 8.77989 4.68184 8.73753C4.78512 8.69516 4.89575 8.67362 5.00738 8.67414L6.41917 8.67875C6.64427 8.67875 6.86015 8.76821 7.01933 8.92744C7.1785 9.08667 7.26792 9.30263 7.26792 9.52782V14.8685C7.42693 14.8214 7.63042 14.7711 7.85435 14.7183C8.00949 14.6818 8.14775 14.5939 8.24672 14.469C8.34569 14.344 8.39956 14.1892 8.39959 14.0298V7.40556C8.39959 7.18036 8.48901 6.96438 8.64818 6.80512C8.80735 6.64586 9.02323 6.55637 9.24835 6.55633H10.6644C10.8895 6.55637 11.1054 6.64586 11.2646 6.80512C11.4238 6.96438 11.5132 7.18036 11.5132 7.40556V13.5539C11.5132 13.5539 11.8674 13.4105 12.2123 13.2648C12.3405 13.2106 12.4498 13.1198 12.5267 13.0038C12.6037 12.8878 12.6447 12.7518 12.6448 12.6126V5.28281C12.6448 5.05765 12.7342 4.84171 12.8934 4.68249C13.0525 4.52326 13.2684 4.43378 13.4934 4.43374H14.908C15.133 4.43396 15.3487 4.52351 15.5076 4.68272C15.6666 4.84193 15.7559 5.05777 15.7559 5.28281V11.3186C16.9824 10.4295 18.2253 9.36002 19.2116 8.07413C19.3547 7.88748 19.4494 7.6683 19.4872 7.43613C19.5251 7.20397 19.5049 6.96604 19.4284 6.74358C18.9719 5.42953 18.2461 4.2253 17.2976 3.20795C16.3491 2.1906 15.1987 1.38252 13.9201 0.835445C12.6415 0.288364 11.2628 0.0143226 9.87227 0.0308574C8.48172 0.0473922 7.10993 0.354138 5.84469 0.931467C4.57944 1.5088 3.4486 2.34399 2.52454 3.38361C1.60047 4.42323 0.903524 5.64438 0.478299 6.96892C0.0530733 8.29345 -0.0910677 9.6922 0.0550987 11.0757C0.201265 12.4591 0.634521 13.7968 1.32714 15.0032C1.44781 15.2113 1.62534 15.3806 1.83888 15.4913C2.05242 15.6019 2.29309 15.6493 2.53263 15.6279C2.80022 15.6043 3.1334 15.571 3.52952 15.5245C3.70192 15.5049 3.86108 15.4226 3.97669 15.2931C4.09231 15.1637 4.1563 14.9962 4.15648 14.8227V9.52189"
                        fill="white"
                      />
                      <path
                        d="M4.12573 18.0869C5.61681 19.172 7.37891 19.8234 9.21706 19.9689C11.0552 20.1144 12.8978 19.7483 14.5409 18.9113C16.184 18.0742 17.5636 16.7987 18.5271 15.226C19.4905 13.6532 20.0003 11.8445 19.9999 9.99989C19.9999 9.76912 19.9892 9.54197 19.9739 9.31549C16.322 14.7641 9.57911 17.3113 4.12573 18.0869Z"
                        fill="#F0B90B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_41_2864">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="controller-wallet">
            <div className="wallet-name">Fut...</div>
            <div className="wallet-item">
              <div className="wallet-value">
                0x0ff...9j3d
              </div>
              <div className="wallet-copy-btn">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.25 2.5H12.1667C14.0335 2.5 14.9669 2.5 15.68 2.86331C16.3072 3.18289 16.8171 3.69282 17.1367 4.32003C17.5 5.03307 17.5 5.96649 17.5 7.83333V13.75M5.16667 17.5H11.9167C12.8501 17.5 13.3168 17.5 13.6733 17.3183C13.9869 17.1586 14.2419 16.9036 14.4017 16.59C14.5833 16.2335 14.5833 15.7668 14.5833 14.8333V8.08333C14.5833 7.14991 14.5833 6.6832 14.4017 6.32668C14.2419 6.01308 13.9869 5.75811 13.6733 5.59832C13.3168 5.41667 12.8501 5.41667 11.9167 5.41667H5.16667C4.23325 5.41667 3.76654 5.41667 3.41002 5.59832C3.09641 5.75811 2.84144 6.01308 2.68166 6.32668C2.5 6.6832 2.5 7.14991 2.5 8.08333V14.8333C2.5 15.7668 2.5 16.2335 2.68166 16.59C2.84144 16.9036 3.09641 17.1586 3.41002 17.3183C3.76654 17.5 4.23325 17.5 5.16667 17.5Z"
                    stroke="white"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="wallet-icons">
                <div className="wallet-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_41_2864)">
                      <path
                        d="M4.15583 9.52189C4.15585 9.41022 4.17792 9.29965 4.22077 9.19654C4.26362 9.09343 4.32641 8.99979 4.40554 8.92102C4.48466 8.84225 4.57856 8.77989 4.68184 8.73753C4.78512 8.69516 4.89575 8.67362 5.00738 8.67414L6.41917 8.67875C6.64427 8.67875 6.86015 8.76821 7.01933 8.92744C7.1785 9.08667 7.26792 9.30263 7.26792 9.52782V14.8685C7.42693 14.8214 7.63042 14.7711 7.85435 14.7183C8.00949 14.6818 8.14775 14.5939 8.24672 14.469C8.34569 14.344 8.39956 14.1892 8.39959 14.0298V7.40556C8.39959 7.18036 8.48901 6.96438 8.64818 6.80512C8.80735 6.64586 9.02323 6.55637 9.24835 6.55633H10.6644C10.8895 6.55637 11.1054 6.64586 11.2646 6.80512C11.4238 6.96438 11.5132 7.18036 11.5132 7.40556V13.5539C11.5132 13.5539 11.8674 13.4105 12.2123 13.2648C12.3405 13.2106 12.4498 13.1198 12.5267 13.0038C12.6037 12.8878 12.6447 12.7518 12.6448 12.6126V5.28281C12.6448 5.05765 12.7342 4.84171 12.8934 4.68249C13.0525 4.52326 13.2684 4.43378 13.4934 4.43374H14.908C15.133 4.43396 15.3487 4.52351 15.5076 4.68272C15.6666 4.84193 15.7559 5.05777 15.7559 5.28281V11.3186C16.9824 10.4295 18.2253 9.36002 19.2116 8.07413C19.3547 7.88748 19.4494 7.6683 19.4872 7.43613C19.5251 7.20397 19.5049 6.96604 19.4284 6.74358C18.9719 5.42953 18.2461 4.2253 17.2976 3.20795C16.3491 2.1906 15.1987 1.38252 13.9201 0.835445C12.6415 0.288364 11.2628 0.0143226 9.87227 0.0308574C8.48172 0.0473922 7.10993 0.354138 5.84469 0.931467C4.57944 1.5088 3.4486 2.34399 2.52454 3.38361C1.60047 4.42323 0.903524 5.64438 0.478299 6.96892C0.0530733 8.29345 -0.0910677 9.6922 0.0550987 11.0757C0.201265 12.4591 0.634521 13.7968 1.32714 15.0032C1.44781 15.2113 1.62534 15.3806 1.83888 15.4913C2.05242 15.6019 2.29309 15.6493 2.53263 15.6279C2.80022 15.6043 3.1334 15.571 3.52952 15.5245C3.70192 15.5049 3.86108 15.4226 3.97669 15.2931C4.09231 15.1637 4.1563 14.9962 4.15648 14.8227V9.52189"
                        fill="white"
                      />
                      <path
                        d="M4.12573 18.0869C5.61681 19.172 7.37891 19.8234 9.21706 19.9689C11.0552 20.1144 12.8978 19.7483 14.5409 18.9113C16.184 18.0742 17.5636 16.7987 18.5271 15.226C19.4905 13.6532 20.0003 11.8445 19.9999 9.99989C19.9999 9.76912 19.9892 9.54197 19.9739 9.31549C16.322 14.7641 9.57911 17.3113 4.12573 18.0869Z"
                        fill="#F0B90B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_41_2864">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <div className="wallet-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_41_2864)">
                      <path
                        d="M4.15583 9.52189C4.15585 9.41022 4.17792 9.29965 4.22077 9.19654C4.26362 9.09343 4.32641 8.99979 4.40554 8.92102C4.48466 8.84225 4.57856 8.77989 4.68184 8.73753C4.78512 8.69516 4.89575 8.67362 5.00738 8.67414L6.41917 8.67875C6.64427 8.67875 6.86015 8.76821 7.01933 8.92744C7.1785 9.08667 7.26792 9.30263 7.26792 9.52782V14.8685C7.42693 14.8214 7.63042 14.7711 7.85435 14.7183C8.00949 14.6818 8.14775 14.5939 8.24672 14.469C8.34569 14.344 8.39956 14.1892 8.39959 14.0298V7.40556C8.39959 7.18036 8.48901 6.96438 8.64818 6.80512C8.80735 6.64586 9.02323 6.55637 9.24835 6.55633H10.6644C10.8895 6.55637 11.1054 6.64586 11.2646 6.80512C11.4238 6.96438 11.5132 7.18036 11.5132 7.40556V13.5539C11.5132 13.5539 11.8674 13.4105 12.2123 13.2648C12.3405 13.2106 12.4498 13.1198 12.5267 13.0038C12.6037 12.8878 12.6447 12.7518 12.6448 12.6126V5.28281C12.6448 5.05765 12.7342 4.84171 12.8934 4.68249C13.0525 4.52326 13.2684 4.43378 13.4934 4.43374H14.908C15.133 4.43396 15.3487 4.52351 15.5076 4.68272C15.6666 4.84193 15.7559 5.05777 15.7559 5.28281V11.3186C16.9824 10.4295 18.2253 9.36002 19.2116 8.07413C19.3547 7.88748 19.4494 7.6683 19.4872 7.43613C19.5251 7.20397 19.5049 6.96604 19.4284 6.74358C18.9719 5.42953 18.2461 4.2253 17.2976 3.20795C16.3491 2.1906 15.1987 1.38252 13.9201 0.835445C12.6415 0.288364 11.2628 0.0143226 9.87227 0.0308574C8.48172 0.0473922 7.10993 0.354138 5.84469 0.931467C4.57944 1.5088 3.4486 2.34399 2.52454 3.38361C1.60047 4.42323 0.903524 5.64438 0.478299 6.96892C0.0530733 8.29345 -0.0910677 9.6922 0.0550987 11.0757C0.201265 12.4591 0.634521 13.7968 1.32714 15.0032C1.44781 15.2113 1.62534 15.3806 1.83888 15.4913C2.05242 15.6019 2.29309 15.6493 2.53263 15.6279C2.80022 15.6043 3.1334 15.571 3.52952 15.5245C3.70192 15.5049 3.86108 15.4226 3.97669 15.2931C4.09231 15.1637 4.1563 14.9962 4.15648 14.8227V9.52189"
                        fill="white"
                      />
                      <path
                        d="M4.12573 18.0869C5.61681 19.172 7.37891 19.8234 9.21706 19.9689C11.0552 20.1144 12.8978 19.7483 14.5409 18.9113C16.184 18.0742 17.5636 16.7987 18.5271 15.226C19.4905 13.6532 20.0003 11.8445 19.9999 9.99989C19.9999 9.76912 19.9892 9.54197 19.9739 9.31549C16.322 14.7641 9.57911 17.3113 4.12573 18.0869Z"
                        fill="#F0B90B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_41_2864">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <div className="wallet-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_41_2864)">
                      <path
                        d="M4.15583 9.52189C4.15585 9.41022 4.17792 9.29965 4.22077 9.19654C4.26362 9.09343 4.32641 8.99979 4.40554 8.92102C4.48466 8.84225 4.57856 8.77989 4.68184 8.73753C4.78512 8.69516 4.89575 8.67362 5.00738 8.67414L6.41917 8.67875C6.64427 8.67875 6.86015 8.76821 7.01933 8.92744C7.1785 9.08667 7.26792 9.30263 7.26792 9.52782V14.8685C7.42693 14.8214 7.63042 14.7711 7.85435 14.7183C8.00949 14.6818 8.14775 14.5939 8.24672 14.469C8.34569 14.344 8.39956 14.1892 8.39959 14.0298V7.40556C8.39959 7.18036 8.48901 6.96438 8.64818 6.80512C8.80735 6.64586 9.02323 6.55637 9.24835 6.55633H10.6644C10.8895 6.55637 11.1054 6.64586 11.2646 6.80512C11.4238 6.96438 11.5132 7.18036 11.5132 7.40556V13.5539C11.5132 13.5539 11.8674 13.4105 12.2123 13.2648C12.3405 13.2106 12.4498 13.1198 12.5267 13.0038C12.6037 12.8878 12.6447 12.7518 12.6448 12.6126V5.28281C12.6448 5.05765 12.7342 4.84171 12.8934 4.68249C13.0525 4.52326 13.2684 4.43378 13.4934 4.43374H14.908C15.133 4.43396 15.3487 4.52351 15.5076 4.68272C15.6666 4.84193 15.7559 5.05777 15.7559 5.28281V11.3186C16.9824 10.4295 18.2253 9.36002 19.2116 8.07413C19.3547 7.88748 19.4494 7.6683 19.4872 7.43613C19.5251 7.20397 19.5049 6.96604 19.4284 6.74358C18.9719 5.42953 18.2461 4.2253 17.2976 3.20795C16.3491 2.1906 15.1987 1.38252 13.9201 0.835445C12.6415 0.288364 11.2628 0.0143226 9.87227 0.0308574C8.48172 0.0473922 7.10993 0.354138 5.84469 0.931467C4.57944 1.5088 3.4486 2.34399 2.52454 3.38361C1.60047 4.42323 0.903524 5.64438 0.478299 6.96892C0.0530733 8.29345 -0.0910677 9.6922 0.0550987 11.0757C0.201265 12.4591 0.634521 13.7968 1.32714 15.0032C1.44781 15.2113 1.62534 15.3806 1.83888 15.4913C2.05242 15.6019 2.29309 15.6493 2.53263 15.6279C2.80022 15.6043 3.1334 15.571 3.52952 15.5245C3.70192 15.5049 3.86108 15.4226 3.97669 15.2931C4.09231 15.1637 4.1563 14.9962 4.15648 14.8227V9.52189"
                        fill="white"
                      />
                      <path
                        d="M4.12573 18.0869C5.61681 19.172 7.37891 19.8234 9.21706 19.9689C11.0552 20.1144 12.8978 19.7483 14.5409 18.9113C16.184 18.0742 17.5636 16.7987 18.5271 15.226C19.4905 13.6532 20.0003 11.8445 19.9999 9.99989C19.9999 9.76912 19.9892 9.54197 19.9739 9.31549C16.322 14.7641 9.57911 17.3113 4.12573 18.0869Z"
                        fill="#F0B90B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_41_2864">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <div className="wallet-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_41_2864)">
                      <path
                        d="M4.15583 9.52189C4.15585 9.41022 4.17792 9.29965 4.22077 9.19654C4.26362 9.09343 4.32641 8.99979 4.40554 8.92102C4.48466 8.84225 4.57856 8.77989 4.68184 8.73753C4.78512 8.69516 4.89575 8.67362 5.00738 8.67414L6.41917 8.67875C6.64427 8.67875 6.86015 8.76821 7.01933 8.92744C7.1785 9.08667 7.26792 9.30263 7.26792 9.52782V14.8685C7.42693 14.8214 7.63042 14.7711 7.85435 14.7183C8.00949 14.6818 8.14775 14.5939 8.24672 14.469C8.34569 14.344 8.39956 14.1892 8.39959 14.0298V7.40556C8.39959 7.18036 8.48901 6.96438 8.64818 6.80512C8.80735 6.64586 9.02323 6.55637 9.24835 6.55633H10.6644C10.8895 6.55637 11.1054 6.64586 11.2646 6.80512C11.4238 6.96438 11.5132 7.18036 11.5132 7.40556V13.5539C11.5132 13.5539 11.8674 13.4105 12.2123 13.2648C12.3405 13.2106 12.4498 13.1198 12.5267 13.0038C12.6037 12.8878 12.6447 12.7518 12.6448 12.6126V5.28281C12.6448 5.05765 12.7342 4.84171 12.8934 4.68249C13.0525 4.52326 13.2684 4.43378 13.4934 4.43374H14.908C15.133 4.43396 15.3487 4.52351 15.5076 4.68272C15.6666 4.84193 15.7559 5.05777 15.7559 5.28281V11.3186C16.9824 10.4295 18.2253 9.36002 19.2116 8.07413C19.3547 7.88748 19.4494 7.6683 19.4872 7.43613C19.5251 7.20397 19.5049 6.96604 19.4284 6.74358C18.9719 5.42953 18.2461 4.2253 17.2976 3.20795C16.3491 2.1906 15.1987 1.38252 13.9201 0.835445C12.6415 0.288364 11.2628 0.0143226 9.87227 0.0308574C8.48172 0.0473922 7.10993 0.354138 5.84469 0.931467C4.57944 1.5088 3.4486 2.34399 2.52454 3.38361C1.60047 4.42323 0.903524 5.64438 0.478299 6.96892C0.0530733 8.29345 -0.0910677 9.6922 0.0550987 11.0757C0.201265 12.4591 0.634521 13.7968 1.32714 15.0032C1.44781 15.2113 1.62534 15.3806 1.83888 15.4913C2.05242 15.6019 2.29309 15.6493 2.53263 15.6279C2.80022 15.6043 3.1334 15.571 3.52952 15.5245C3.70192 15.5049 3.86108 15.4226 3.97669 15.2931C4.09231 15.1637 4.1563 14.9962 4.15648 14.8227V9.52189"
                        fill="white"
                      />
                      <path
                        d="M4.12573 18.0869C5.61681 19.172 7.37891 19.8234 9.21706 19.9689C11.0552 20.1144 12.8978 19.7483 14.5409 18.9113C16.184 18.0742 17.5636 16.7987 18.5271 15.226C19.4905 13.6532 20.0003 11.8445 19.9999 9.99989C19.9999 9.76912 19.9892 9.54197 19.9739 9.31549C16.322 14.7641 9.57911 17.3113 4.12573 18.0869Z"
                        fill="#F0B90B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_41_2864">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="controller-wallet">
            <div className="wallet-name">Links</div>
            <div className="wallet-socials">
              <div className="wallet-social-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_57_3503)">
                    <path
                      d="M10.0001 1.66669C12.0845 3.94865 13.269 6.91005 13.3334 10C13.269 13.09 12.0845 16.0514 10.0001 18.3334M10.0001 1.66669C7.91568 3.94865 6.73112 6.91005 6.66675 10C6.73112 13.09 7.91568 16.0514 10.0001 18.3334M10.0001 1.66669C5.39771 1.66669 1.66675 5.39765 1.66675 10C1.66675 14.6024 5.39771 18.3334 10.0001 18.3334M10.0001 1.66669C14.6025 1.66669 18.3334 5.39765 18.3334 10C18.3334 14.6024 14.6025 18.3334 10.0001 18.3334M2.08343 7.50002H17.9168M2.08341 12.5H17.9167"
                      stroke="white"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_57_3503">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="wallet-social-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_41_2923)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.80814 8.96924C7.28074 6.85926 10.259 5.45719 11.7539 4.77679C16.0096 2.84679 16.904 2.51376 17.4792 2.5C17.6069 2.5 17.8881 2.52751 18.0802 2.69489C18.2332 2.83303 18.2718 3.0136 18.2971 3.15231C18.3229 3.29103 18.3483 3.58279 18.3229 3.8052C18.0929 6.44253 17.0961 12.8424 16.5848 15.7853C16.3674 17.0349 15.9457 17.4516 15.5368 17.4934C14.6424 17.5765 13.9648 16.8549 13.1084 16.2438C11.7539 15.286 10.9998 14.6887 9.68379 13.7446C8.16249 12.6619 9.14661 12.0651 10.0162 11.0936C10.2458 10.8436 14.1691 6.95613 14.2461 6.60934C14.2588 6.56749 14.2588 6.40126 14.1696 6.31757C14.0799 6.23446 13.9522 6.26197 13.8498 6.29006C13.7094 6.31757 11.5623 7.87212 7.38311 10.9405C6.76995 11.3991 6.22011 11.6209 5.72198 11.6071C5.17214 11.5934 4.12417 11.2741 3.3316 10.9961C2.37333 10.6631 1.60662 10.4825 1.67047 9.89956C1.70899 9.59404 2.09261 9.28852 2.80814 8.96924Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_41_2923">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="wallet-social-icon">
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
              </div>
              <div className="wallet-social-icon">
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
          </div>

          <div className="controller-wallet">
            <div className="wallet-name">Links</div>
            <div className="wallet-links">
              <Link to={""} className="wallet-link">
                Bubblemaps
              </Link>
              <Link to={""} className="wallet-link">
                The Ruq Check
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Holders({ isMobile }: any) {
  const data = {
    labels: [
      "Liquidity",
      "Burn",
      "Top 100",
      "All the others",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 25],
        backgroundColor: [
          "#39CAEA",
          "#60F5C2",
          "#EA3943",
          "#394BEA",
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    cutout: 85 + "%",
    responcive: true,
  };

  return (
    <div className="dex">
      <div className="controller-holders">
        <div className="holders-title">
          {isMobile ? <h1>Holders</h1> : <></>}
          {/* <h1>Holders</h1> */}
        </div>
        <div className="holders-pie">
          <div className="pie-chart">
            <div className="chart-amount">
              <div className="chart-title">65.05K</div>
              <div className="chart-subtitle">holders</div>
            </div>
            <Doughnut data={data} options={options} />
          </div>
          <div className="pie-legend">
            <div className="legend-item">
              <div className="legend-info">
                <div className="legend-icon">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="6.5"
                      cy="6.5"
                      r="5.5"
                      stroke="#394BEA"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="legend-text">Liquidity</div>
              </div>
              <div className="legend-value">0.86%</div>
            </div>
            <div className="legend-item">
              <div className="legend-info">
                <div className="legend-icon">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="6.5"
                      cy="6.5"
                      r="5.5"
                      stroke="#EA3943"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="legend-text">Top 100</div>
              </div>
              <div className="legend-value">0.86%</div>
            </div>
            <div className="legend-item">
              <div className="legend-info">
                <div className="legend-icon">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="6.5"
                      cy="6.5"
                      r="5.5"
                      stroke="#60F5C2"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="legend-text">Burn</div>
              </div>
              <div className="legend-value">0.86%</div>
            </div>
            <div className="legend-item">
              <div className="legend-info">
                <div className="legend-icon">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="6.5"
                      cy="6.5"
                      r="5.5"
                      stroke="#39CAEA"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="legend-text">
                  All the others
                </div>
              </div>
              <div className="legend-value">0.86%</div>
            </div>
          </div>
        </div>
        <div className="holder-list">
          <HolderItem />
          <HolderItem />
          <HolderItem />
          <HolderItem />
          <HolderItem />
          <HolderItem />
          <HolderItem />
          <HolderItem />
          <HolderItem />
          <HolderItem />
        </div>
        <div className="mobile">
          <div className="table-controls">
            <div className="controls">
              <div className="controls-btns">
                <div className="controls-btns-icon">
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="controls-btns-text">
                  Назад
                </div>
              </div>
              <div className="controls-page-list">
                <div className="page-item active">1</div>
                <div className="page-item">2</div>{" "}
                <div className="page-item">3</div>
              </div>
              <div className="controls-btns btn-forward">
                <div className="controls-btns-text">
                  Вперед
                </div>
                <div className="controls-btns-icon">
                  <svg
                    className="forward"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 12L6 8L10 4"
                      stroke="#374160"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Chart() {
  return (
    <div className="dex">
      <div className="dex-info">
        <div className="controller-currency">
          <div className="currency-icon">
            {/* <img width={40} height={40} src={icon} alt="" /> */}
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
          <div className="currency-text">
            <div className="currency-title">Ethereum</div>
            <div className="currency-subtitle">ETH/BNB</div>
          </div>
        </div>
        <div className="controller-amount chart-amount">
          <div className="amount-top">
            <div className="amount-number">
              <span>$</span>1,021.49
            </div>
            <div className="amount-percent minus">
              <div className="percent-icon">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0H0L5 5L10 10V0Z"
                    fill="#60F5C2"
                  />
                </svg>
              </div>
              <div className="percent-number">+281,3%</div>
            </div>
          </div>
          <div className="amount-footer">5,09 BNB</div>
        </div>
        <div className="dex-info-graph">
          <div>График</div>
        </div>
        <div className="dex-data">
          <div className="dex-table">
            <table>
              <thead>
                <tr>
                  <th className="time">Time</th>
                  <th className="type">Type</th>
                  <th className="price1">Price (BNB)</th>
                  <th className="price2">Price (USD)</th>
                  <th className="amount">
                    Amount (Future-AI)
                  </th>
                  <th className="total">Total USD</th>
                  <th className="from">From</th>
                  <th className="tx">TX</th>
                </tr>
              </thead>
              <tbody>
                <tr className="plus">
                  <td>57 seconds ago</td>
                  <td>Sell</td>
                  <td>0.00008262</td>
                  <td>$0.02851</td>
                  <td>2,427.45</td>
                  <td>$62.65</td>
                  <td className="from">0x0ff...9j3d</td>
                  <td className="tx">
                    <Link to={""} className="tx-link">
                      View
                    </Link>
                  </td>
                </tr>
                <tr className="plus">
                  <td>57 seconds ago</td>
                  <td>Sell</td>
                  <td>0.00008262</td>
                  <td>$0.02851</td>
                  <td>2,427.45</td>
                  <td>$62.65</td>
                  <td className="from">0x0ff...9j3d</td>
                  <td className="tx">
                    <Link to={""} className="tx-link">
                      View
                    </Link>
                  </td>
                </tr>
                <tr className="plus">
                  <td>57 seconds ago</td>
                  <td>Sell</td>
                  <td>0.00008262</td>
                  <td>$0.02851</td>
                  <td>2,427.45</td>
                  <td>$62.65</td>
                  <td className="from">0x0ff...9j3d</td>
                  <td className="tx">
                    <Link to={""} className="tx-link">
                      View
                    </Link>
                  </td>
                </tr>
                <tr className="plus">
                  <td>57 seconds ago</td>
                  <td>Sell</td>
                  <td>0.00008262</td>
                  <td>$0.02851</td>
                  <td>2,427.45</td>
                  <td>$62.65</td>
                  <td className="from">0x0ff...9j3d</td>
                  <td className="tx">
                    <Link to={""} className="tx-link">
                      View
                    </Link>
                  </td>
                </tr>
                <tr className="plus">
                  <td>57 seconds ago</td>
                  <td>Sell</td>
                  <td>0.00008262</td>
                  <td>$0.02851</td>
                  <td>2,427.45</td>
                  <td>$62.65</td>
                  <td className="from">0x0ff...9j3d</td>
                  <td className="tx">
                    <Link to={""} className="tx-link">
                      View
                    </Link>
                  </td>
                </tr>
                <tr className="plus">
                  <td>57 seconds ago</td>
                  <td>Sell</td>
                  <td>0.00008262</td>
                  <td>$0.02851</td>
                  <td>2,427.45</td>
                  <td>$62.65</td>
                  <td className="from">0x0ff...9j3d</td>
                  <td className="tx">
                    <Link to={""} className="tx-link">
                      View
                    </Link>
                  </td>
                </tr>
                <tr className="plus">
                  <td>57 seconds ago</td>
                  <td>Sell</td>
                  <td>0.00008262</td>
                  <td>$0.02851</td>
                  <td>2,427.45</td>
                  <td>$62.65</td>
                  <td className="from">0x0ff...9j3d</td>
                  <td className="tx">
                    <Link to={""} className="tx-link">
                      View
                    </Link>
                  </td>
                </tr>
                <tr className="plus">
                  <td>57 seconds ago</td>
                  <td>Sell</td>
                  <td>0.00008262</td>
                  <td>$0.02851</td>
                  <td>2,427.45</td>
                  <td>$62.65</td>
                  <td className="from">0x0ff...9j3d</td>
                  <td className="tx">
                    <Link to={""} className="tx-link">
                      View
                    </Link>
                  </td>
                </tr>
                <tr className="minus">
                  <td>57 seconds ago</td>
                  <td>Sell</td>
                  <td>0.00008262</td>
                  <td>$0.02851</td>
                  <td>2,427.45</td>
                  <td>$62.65</td>
                  <td className="from">0x0ff...9j3d</td>
                  <td className="tx">
                    <Link to={""} className="tx-link">
                      View
                    </Link>
                  </td>
                </tr>
                <tr className="plus">
                  <td>57 seconds ago</td>
                  <td>Sell</td>
                  <td>0.00008262</td>
                  <td>$0.02851</td>
                  <td>2,427.45</td>
                  <td>$62.65</td>
                  <td className="from">0x0ff...9j3d</td>
                  <td className="tx">
                    <Link to={""} className="tx-link">
                      View
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="dex-table-controls">
            <div className="table-controls">
              <div className="controls">
                <div className="controls-btns">
                  <div className="controls-btns-icon">
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="controls-btns-text">
                    Назад
                  </div>
                </div>
                <div className="controls-page-list">
                  <div className="page-item active">1</div>
                  <div className="page-item">2</div>{" "}
                  <div className="page-item">3</div>{" "}
                </div>
                <div className="controls-btns btn-forward">
                  <div className="controls-btns-text">
                    Вперед
                  </div>
                  <div className="controls-btns-icon">
                    <svg
                      className="forward"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 12L6 8L10 4"
                        stroke="#374160"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dex;

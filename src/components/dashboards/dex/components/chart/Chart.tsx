import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Link } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);

function Chart() {
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

export default Chart;

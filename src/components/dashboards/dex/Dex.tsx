import React, { useEffect, useRef, useState } from "react";
import "./dex.scss";

import { Link, useNavigate } from "react-router-dom";

import Overview from "./components/overview/Overview";
import Holders from "./components/holders/Holders";

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

export default Dex;

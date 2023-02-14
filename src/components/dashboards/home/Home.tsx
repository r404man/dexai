import React, { useEffect, useRef } from "react";
// import icon from "./../../../assets/eth.png";
import icon from "../../../assets/eth.png";

import Card from "./components/card/Card";
import Slider from "./components/slider/Slider";
import TableRow from "./components/tablerow/TableRow";
import "./home.scss";
import { useNavigate } from "react-router-dom";

function Home() {
  const sliderNumber1 = 1,
    sliderNumber2 = 2,
    sliderNumber3 = 3;

  const windowSize = useRef([window.innerWidth]);
  let navigate = useNavigate();
  useEffect(() => {
    if (windowSize.current[0] < 769) {
      return navigate("/favourites");
    }
  });

  return (
    <div className="home">
      <h1 className="home-title">My favorites</h1>
      <div className="card-list">
        <Card isUp={true} />
        <Card isUp={true} />
        <Card isUp={true} />
        <Card isUp={true} />
        <Card isUp={false} />
      </div>

      <div className="home-sliders">
        <Slider
          sliderNumber={sliderNumber1}
          sliderTitle={"Most Viewed Pools"}
        />
        <Slider
          sliderNumber={sliderNumber2}
          sliderTitle={"Top Gainers"}
        />
        <Slider
          sliderNumber={sliderNumber3}
          sliderTitle={"Top Losers"}
        />
      </div>

      <h1 className="pools-title home-title">
        BNB Chain Pools (Etherium pools, Polygon pools)
      </h1>
      <div className="home-table">
        <table>
          <thead>
            <tr>
              <th className="order"></th>
              <th className="pool">Pool</th>
              <th className="price">Price</th>
              <th className="hours">24h TXNS</th>
              <th className="min">5m</th>
              <th className="hour">1h</th>
              <th className="sixhour">6h</th>
              <th className="twofour">24h</th>
              <th className="volume">24h volume</th>
              <th className="liqudity">Liquidity</th>
            </tr>
          </thead>

          <tbody>
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
          </tbody>
        </table>
      </div>
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
            <div className="controls-btns-text">Назад</div>
          </div>
          <div className="controls-page-list">
            <div className="page-item">1</div>
            <div className="page-item">2</div>{" "}
            <div className="page-item">3</div>{" "}
            <div className="page-item active">4</div>
            <div className="page-item">...</div>
            <div className="page-item">414</div>
          </div>
          <div className="controls-btns btn-forward">
            <div className="controls-btns-text">Вперед</div>
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
  );
}

export function MobileFavourites() {
  return (
    <div className="mobile">
      <h1 className="home-title">My favorites</h1>
      <div className="card-list">
        <Card isUp={true} />
        <Card isUp={true} />
        <Card isUp={true} />
        <Card isUp={true} />
        <Card isUp={false} />
      </div>
    </div>
  );
}

export function MobileViewed() {
  return (
    <div className="most-viewed-mobile">
      <div className="slider-title-text">
        Most Viewed Pools
      </div>
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <td>
              <div className="slide-title">
                <div className="slide-heading">
                  <div className="slide-icon">
                    <img
                      width="18"
                      height={18}
                      src={icon}
                      alt=""
                    />
                  </div>
                </div>
                <span>KATA</span>/WBNB
              </div>
            </td>
            <td>
              <div className="slide-numbers">
                <div className="slide-number">$1.83M</div>
                <div className="slide-percent plus">
                  +9.48%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="slide-title">
                <div className="slide-heading">
                  <div className="slide-icon">
                    <img
                      width="18"
                      height={18}
                      src={icon}
                      alt=""
                    />
                  </div>
                </div>
                <span>KATA</span>/WBNB
              </div>
            </td>
            <td>
              <div className="slide-numbers">
                <div className="slide-number">$1.83M</div>
                <div className="slide-percent plus">
                  +9.48%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="slide-title">
                <div className="slide-heading">
                  <div className="slide-icon">
                    <img
                      width="18"
                      height={18}
                      src={icon}
                      alt=""
                    />
                  </div>
                </div>
                <span>KATA</span>/WBNB
              </div>
            </td>
            <td>
              <div className="slide-numbers">
                <div className="slide-number">$1.83M</div>
                <div className="slide-percent plus">
                  +9.48%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="slide-title">
                <div className="slide-heading">
                  <div className="slide-icon">
                    <img
                      width="18"
                      height={18}
                      src={icon}
                      alt=""
                    />
                  </div>
                </div>
                <span>KATA</span>/WBNB
              </div>
            </td>
            <td>
              <div className="slide-numbers">
                <div className="slide-number">$1.83M</div>
                <div className="slide-percent plus">
                  +9.48%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="slide-title">
                <div className="slide-heading">
                  <div className="slide-icon">
                    <img
                      width="18"
                      height={18}
                      src={icon}
                      alt=""
                    />
                  </div>
                </div>
                <span>KATA</span>/WBNB
              </div>
            </td>
            <td>
              <div className="slide-numbers">
                <div className="slide-number">$1.83M</div>
                <div className="slide-percent plus">
                  +9.48%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="slide-title">
                <div className="slide-heading">
                  <div className="slide-icon">
                    <img
                      width="18"
                      height={18}
                      src={icon}
                      alt=""
                    />
                  </div>
                </div>
                <span>KATA</span>/WBNB
              </div>
            </td>
            <td>
              <div className="slide-numbers">
                <div className="slide-number">$1.83M</div>
                <div className="slide-percent plus">
                  +9.48%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="slide-title">
                <div className="slide-heading">
                  <div className="slide-icon">
                    <img
                      width="18"
                      height={18}
                      src={icon}
                      alt=""
                    />
                  </div>
                </div>
                <span>KATA</span>/WBNB
              </div>
            </td>
            <td>
              <div className="slide-numbers">
                <div className="slide-number">$1.83M</div>
                <div className="slide-percent plus">
                  +9.48%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="slide-title">
                <div className="slide-heading">
                  <div className="slide-icon">
                    <img
                      width="18"
                      height={18}
                      src={icon}
                      alt=""
                    />
                  </div>
                </div>
                <span>KATA</span>/WBNB
              </div>
            </td>
            <td>
              <div className="slide-numbers">
                <div className="slide-number">$1.83M</div>
                <div className="slide-percent plus">
                  +9.48%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="slide-title">
                <div className="slide-heading">
                  <div className="slide-icon">
                    <img
                      width="18"
                      height={18}
                      src={icon}
                      alt=""
                    />
                  </div>
                </div>
                <span>KATA</span>/WBNB
              </div>
            </td>
            <td>
              <div className="slide-numbers">
                <div className="slide-number">$1.83M</div>
                <div className="slide-percent plus">
                  +9.48%
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function MobileGainers() {
  return (
    <div className="most-viewed-mobile">
      <div className="slider-title-text">Top Gainers</div>
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <td>
              <div className="slide-title">
                <div className="slide-heading">
                  <div className="slide-icon">
                    <img src={icon} alt="" />
                  </div>
                </div>
                <span>KATA</span>/WBNB
              </div>
            </td>
            <td>
              <div className="slide-numbers">
                <div className="slide-number">$1.83M</div>
                <div className="slide-percent plus">
                  +9.48%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="slide-title">
                <div className="slide-heading">
                  <div className="slide-icon">
                    <img src={icon} alt="" />
                  </div>
                </div>
                <span>KATA</span>/WBNB
              </div>
            </td>
            <td>
              <div className="slide-numbers">
                <div className="slide-number">$1.83M</div>
                <div className="slide-percent plus">
                  +9.48%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="slide-title">
                <div className="slide-heading">
                  <div className="slide-icon">
                    <img src={icon} alt="" />
                  </div>
                </div>
                <span>KATA</span>/WBNB
              </div>
            </td>
            <td>
              <div className="slide-numbers">
                <div className="slide-number">$1.83M</div>
                <div className="slide-percent plus">
                  +9.48%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="slide-title">
                <div className="slide-heading">
                  <div className="slide-icon">
                    <img src={icon} alt="" />
                  </div>
                </div>
                <span>KATA</span>/WBNB
              </div>
            </td>
            <td>
              <div className="slide-numbers">
                <div className="slide-number">$1.83M</div>
                <div className="slide-percent plus">
                  +9.48%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="slide-title">
                <div className="slide-heading">
                  <div className="slide-icon">
                    <img src={icon} alt="" />
                  </div>
                </div>
                <span>KATA</span>/WBNB
              </div>
            </td>
            <td>
              <div className="slide-numbers">
                <div className="slide-number">$1.83M</div>
                <div className="slide-percent plus">
                  +9.48%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="slide-title">
                <div className="slide-heading">
                  <div className="slide-icon">
                    <img src={icon} alt="" />
                  </div>
                </div>
                <span>KATA</span>/WBNB
              </div>
            </td>
            <td>
              <div className="slide-numbers">
                <div className="slide-number">$1.83M</div>
                <div className="slide-percent plus">
                  +9.48%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="slide-title">
                <div className="slide-heading">
                  <div className="slide-icon">
                    <img src={icon} alt="" />
                  </div>
                </div>
                <span>KATA</span>/WBNB
              </div>
            </td>
            <td>
              <div className="slide-numbers">
                <div className="slide-number">$1.83M</div>
                <div className="slide-percent plus">
                  +9.48%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="slide-title">
                <div className="slide-heading">
                  <div className="slide-icon">
                    <img src={icon} alt="" />
                  </div>
                </div>
                <span>KATA</span>/WBNB
              </div>
            </td>
            <td>
              <div className="slide-numbers">
                <div className="slide-number">$1.83M</div>
                <div className="slide-percent plus">
                  +9.48%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="slide-title">
                <div className="slide-heading">
                  <div className="slide-icon">
                    <img src={icon} alt="" />
                  </div>
                </div>
                <span>KATA</span>/WBNB
              </div>
            </td>
            <td>
              <div className="slide-numbers">
                <div className="slide-number">$1.83M</div>
                <div className="slide-percent plus">
                  +9.48%
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function MobileLoosers() {
  return (
    <div className="most-viewed-mobile">
      <div className="slider-title-text">Top Losers</div>
      <table>
        <tbody>
          <tr>
            <td>
              <div className="slide-title">
                <div className="slide-heading">
                  <div className="slide-icon">
                    <img
                      width="18"
                      height={18}
                      src={icon}
                      alt=""
                    />
                  </div>
                </div>
                <span>KATA</span>/WBNB
              </div>
            </td>
            <td>
              <div className="slide-numbers">
                <div className="slide-number">$1.83M</div>
                <div className="slide-percent minus">
                  +9.48%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="slide-title">
                <div className="slide-heading">
                  <div className="slide-icon">
                    <img
                      width="18"
                      height={18}
                      src={icon}
                      alt=""
                    />
                  </div>
                </div>
                <span>KATA</span>/WBNB
              </div>
            </td>
            <td>
              <div className="slide-numbers">
                <div className="slide-number">$1.83M</div>
                <div className="slide-percent minus">
                  +9.48%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="slide-title">
                <div className="slide-heading">
                  <div className="slide-icon">
                    <img
                      width="18"
                      height={18}
                      src={icon}
                      alt=""
                    />
                  </div>
                </div>
                <span>KATA</span>/WBNB
              </div>
            </td>
            <td>
              <div className="slide-numbers">
                <div className="slide-number">$1.83M</div>
                <div className="slide-percent minus">
                  +9.48%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="slide-title">
                <div className="slide-heading">
                  <div className="slide-icon">
                    <img src={icon} alt="" />
                  </div>
                </div>
                <span>KATA</span>/WBNB
              </div>
            </td>
            <td>
              <div className="slide-numbers">
                <div className="slide-number">$1.83M</div>
                <div className="slide-percent plus">
                  +9.48%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="slide-title">
                <div className="slide-heading">
                  <div className="slide-icon">
                    <img src={icon} alt="" />
                  </div>
                </div>
                <span>KATA</span>/WBNB
              </div>
            </td>
            <td>
              <div className="slide-numbers">
                <div className="slide-number">$1.83M</div>
                <div className="slide-percent plus">
                  +9.48%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="slide-title">
                <div className="slide-heading">
                  <div className="slide-icon">
                    <img src={icon} alt="" />
                  </div>
                </div>
                <span>KATA</span>/WBNB
              </div>
            </td>
            <td>
              <div className="slide-numbers">
                <div className="slide-number">$1.83M</div>
                <div className="slide-percent plus">
                  +9.48%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="slide-title">
                <div className="slide-heading">
                  <div className="slide-icon">
                    <img src={icon} alt="" />
                  </div>
                </div>
                <span>KATA</span>/WBNB
              </div>
            </td>
            <td>
              <div className="slide-numbers">
                <div className="slide-number">$1.83M</div>
                <div className="slide-percent plus">
                  +9.48%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="slide-title">
                <div className="slide-heading">
                  <div className="slide-icon">
                    <img src={icon} alt="" />
                  </div>
                </div>
                <span>KATA</span>/WBNB
              </div>
            </td>
            <td>
              <div className="slide-numbers">
                <div className="slide-number">$1.83M</div>
                <div className="slide-percent plus">
                  +9.48%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="slide-title">
                <div className="slide-heading">
                  <div className="slide-icon">
                    <img src={icon} alt="" />
                  </div>
                </div>
                <span>KATA</span>/WBNB
              </div>
            </td>
            <td>
              <div className="slide-numbers">
                <div className="slide-number">$1.83M</div>
                <div className="slide-percent plus">
                  +9.48%
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function MobilePools() {
  return (
    <div className="pools-mobile">
      <h1 className="slider-title-text">BNB Chain Pools</h1>
      <div className="home-table">
        <table>
          <thead>
            <tr>
              <th className="pool">Pool</th>
              <th className="price">Price</th>
              <th className="twofour">24h</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pool">
                <div className="pool-icon">
                  <img
                    width={32}
                    height={32}
                    src={icon}
                    alt=""
                  />
                </div>
                <div className="pool-title">
                  <span>ETH</span>/WBNB
                </div>
              </td>
              <td>$0.9981</td>
              <td className="minus">-0.42%</td>
            </tr>
            <tr>
              <td className="pool">
                <div className="pool-icon">
                  <img
                    width={32}
                    height={32}
                    src={icon}
                    alt=""
                  />
                </div>
                <div className="pool-title">
                  <span>ETH</span>/WBNB
                </div>
              </td>
              <td>$0.9981</td>
              <td className="minus">-0.42%</td>
            </tr>
            <tr>
              <td className="pool">
                <div className="pool-icon">
                  <img
                    width={32}
                    height={32}
                    src={icon}
                    alt=""
                  />
                </div>
                <div className="pool-title">
                  <span>ETH</span>/WBNB
                </div>
              </td>
              <td>$0.9981</td>
              <td className="minus">-0.42%</td>
            </tr>
            <tr>
              <td className="pool">
                <div className="pool-icon">
                  <img
                    width={32}
                    height={32}
                    src={icon}
                    alt=""
                  />
                </div>
                <div className="pool-title">
                  <span>ETH</span>/WBNB
                </div>
              </td>
              <td>$0.9981</td>
              <td className="plus">-0.42%</td>
            </tr>
            <tr>
              <td className="pool">
                <div className="pool-icon">
                  <img
                    width={32}
                    height={32}
                    src={icon}
                    alt=""
                  />
                </div>
                <div className="pool-title">
                  <span>ETH</span>/WBNB
                </div>
              </td>
              <td>$0.9981</td>
              <td className="plus">-0.42%</td>
            </tr>
            <tr>
              <td className="pool">
                <div className="pool-icon">
                  <img
                    width={32}
                    height={32}
                    src={icon}
                    alt=""
                  />
                </div>
                <div className="pool-title">
                  <span>ETH</span>/WBNB
                </div>
              </td>
              <td>$0.9981</td>
              <td className="minus">-0.42%</td>
            </tr>
            <tr>
              <td className="pool">
                <div className="pool-icon">
                  <img
                    width={32}
                    height={32}
                    src={icon}
                    alt=""
                  />
                </div>
                <div className="pool-title">
                  <span>ETH</span>/WBNB
                </div>
              </td>
              <td>$0.9981</td>
              <td className="minus">-0.42%</td>
            </tr>
            <tr>
              <td className="pool">
                <div className="pool-icon">
                  <img
                    width={32}
                    height={32}
                    src={icon}
                    alt=""
                  />
                </div>
                <div className="pool-title">
                  <span>ETH</span>/WBNB
                </div>
              </td>
              <td>$0.9981</td>
              <td className="minus">-0.42%</td>
            </tr>
            <tr>
              <td className="pool">
                <div className="pool-icon">
                  <img
                    width={32}
                    height={32}
                    src={icon}
                    alt=""
                  />
                </div>
                <div className="pool-title">
                  <span>ETH</span>/WBNB
                </div>
              </td>
              <td>$0.9981</td>
              <td className="minus">-0.42%</td>
            </tr>
            <tr>
              <td className="pool">
                <div className="pool-icon">
                  <img
                    width={32}
                    height={32}
                    src={icon}
                    alt=""
                  />
                </div>
                <div className="pool-title">
                  <span>ETH</span>/WBNB
                </div>
              </td>
              <td>$0.9981</td>
              <td className="minus">-0.42%</td>
            </tr>
          </tbody>
        </table>
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
  );
}

export default Home;

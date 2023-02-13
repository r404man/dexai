import React from "react";
import icon from "./../../../assets/eth.png";
import Card from "./components/card/Card";
import Slider from "./components/slider/Slider";
import "./home.scss";

function Home() {
  const sliderNumber1 = 1,
    sliderNumber2 = 2,
    sliderNumber3 = 3;

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

      {/* Top Losers Mobile */}

      {/* Pools Mobile */}

      <div className="home-sliders">
        <Slider sliderNumber={sliderNumber1} />
        <Slider sliderNumber={sliderNumber2} />
        <Slider sliderNumber={sliderNumber3} />
      </div>

      <h1 className="pools-title home-title">
        BNB Chain Pools (Etherium pools, Polygon pools)
      </h1>
      <div className="home-table">
        <table>
          <thead>
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
          </thead>

          <tbody>
            <tr>
              <th className="pool">
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
              </th>
              <td>$0.9981</td>
              <td>61,287</td>
              <td className="plus">+0.02%</td>
              <td className="minus">-0.44%</td>
              <td className="minus">-0.42%</td>
              <td className="minus">-0.45%</td>
              <td>$18M</td>
              <td>$137.6M</td>
            </tr>

            <tr>
              <th className="pool">
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
              </th>
              <td>$0.9981</td>
              <td>61,287</td>
              <td className="plus">+0.02%</td>
              <td className="minus">-0.44%</td>
              <td className="minus">-0.42%</td>
              <td className="minus">-0.45%</td>
              <td>$18M</td>
              <td>$137.6M</td>
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
              <td>61,287</td>
              <td className="plus">+0.02%</td>
              <td className="minus">-0.44%</td>
              <td className="minus">-0.42%</td>
              <td className="minus">-0.45%</td>
              <td>$18M</td>
              <td>$137.6M</td>
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
              <td>61,287</td>
              <td className="plus">+0.02%</td>
              <td className="minus">-0.44%</td>
              <td className="minus">-0.42%</td>
              <td className="minus">-0.45%</td>
              <td>$18M</td>
              <td>$137.6M</td>
            </tr>
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
            <th className="pool">Pool</th>
            <th className="price">Price</th>
            <th className="twofour">24h</th>
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
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;

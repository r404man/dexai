import React from "react";
import "./home.scss";
import icon from "./../../../assets/eth.png";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper";

function Home() {
  return (
    <div className="home">
      <h1 className="home-title">My favorites</h1>
      <div className="card-list">
        <div className="card-item plus">
          <div className="card-title">
            <div className="card-icon">
              <img
                width="40"
                height="40"
                src={icon}
                alt=""
              />
            </div>
            <div className="card-text">Bitcoin (24h)</div>
            <div className="card-info">
              <div className="card-info-icon">
                <svg
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0.5H0L5 5.5L10 10.5V0.5Z"
                    fill="#60F5C2"
                  />
                </svg>
              </div>
              <div className="card-info-text">+2,3%</div>
            </div>
          </div>
          <div className="card-number">
            <span>$</span>32,482.44
          </div>
        </div>

        <div className="card-item plus">
          <div className="card-title">
            <div className="card-icon">
              <img
                width="40"
                height="40"
                src={icon}
                alt=""
              />
            </div>
            <div className="card-text">Bitcoin (24h)</div>
            <div className="card-info">
              <div className="card-info-icon">
                <svg
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0.5H0L5 5.5L10 10.5V0.5Z"
                    fill="#60F5C2"
                  />
                </svg>
              </div>
              <div className="card-info-text">+2,3%</div>
            </div>
          </div>
          <div className="card-number">
            <span>$</span>32,482.44
          </div>
        </div>

        <div className="card-item minus">
          <div className="card-title">
            <div className="card-icon">
              <img
                width="40"
                height="40"
                src={icon}
                alt=""
              />
            </div>
            <div className="card-text">Bitcoin (24h)</div>
            <div className="card-info">
              <div className="card-info-icon">
                <svg
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0.5H0L5 5.5L10 10.5V0.5Z"
                    fill="#60F5C2"
                  />
                </svg>
              </div>
              <div className="card-info-text">+2,3%</div>
            </div>
          </div>
          <div className="card-number">
            <span>$</span>32,482.44
          </div>
        </div>

        <div className="card-item plus">
          <div className="card-title">
            <div className="card-icon">
              <img
                width="40"
                height="40"
                src={icon}
                alt=""
              />
            </div>
            <div className="card-text">Bitcoin (24h)</div>
            <div className="card-info">
              <div className="card-info-icon">
                <svg
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0.5H0L5 5.5L10 10.5V0.5Z"
                    fill="#60F5C2"
                  />
                </svg>
              </div>
              <div className="card-info-text">+2,3%</div>
            </div>
          </div>
          <div className="card-number">
            <span>$</span>32,482.44
          </div>
        </div>
        <div className="card-item minus">
          <div className="card-title">
            <div className="card-icon">
              <img
                width="40"
                height="40"
                src={icon}
                alt=""
              />
            </div>
            <div className="card-text">Bitcoin (24h)</div>
            <div className="card-info">
              <div className="card-info-icon">
                <svg
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0.5H0L5 5.5L10 10.5V0.5Z"
                    fill="#60F5C2"
                  />
                </svg>
              </div>
              <div className="card-info-text">+2,3%</div>
            </div>
          </div>
          <div className="card-number">
            <span>$</span>32,482.44
          </div>
        </div>
      </div>
      <div className="home-sliders">
        <div className="home-slider">
          <div className="slider-title">
            Most Viewed Pools
          </div>
          <div className="slider">
            <Swiper
              pagination={true}
              modules={[Pagination]}
              slidesPerView={1}
              spaceBetween={20}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="slide">
                  <ol className="slide-list">
                    <li>
                      <div className="slide-heading">
                        <div className="slide-icon">
                          <img
                            width="18"
                            height={18}
                            src={icon}
                            alt=""
                          />
                        </div>
                        <div className="slide-title">
                          <span>KATA</span>/WBNB
                        </div>
                      </div>
                      <div className="slide-numbers">
                        <div className="slide-number">
                          $1.83M
                        </div>
                        <div className="slide-percent plus">
                          +9.48%
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="slide-heading">
                        <div className="slide-icon">
                          <img
                            width="18"
                            height={18}
                            src={icon}
                            alt=""
                          />
                        </div>
                        <div className="slide-title">
                          <span>KATA</span>/WBNB
                        </div>
                      </div>
                      <div className="slide-numbers">
                        <div className="slide-number">
                          $1.83M
                        </div>
                        <div className="slide-percent plus">
                          +9.48%
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="slide-heading">
                        <div className="slide-icon">
                          <img
                            width="18"
                            height={18}
                            src={icon}
                            alt=""
                          />
                        </div>
                        <div className="slide-title">
                          <span>KATA</span>/WBNB
                        </div>
                      </div>
                      <div className="slide-numbers">
                        <div className="slide-number">
                          $1.83M
                        </div>
                        <div className="slide-percent plus">
                          +9.48%
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide">
                  <ol className="slide-list">
                    <li>
                      <div className="slide-heading">
                        <div className="slide-icon">
                          <img
                            width="18"
                            height={18}
                            src={icon}
                            alt=""
                          />
                        </div>
                        <div className="slide-title">
                          <span>KATA</span>/WBNB
                        </div>
                      </div>
                      <div className="slide-numbers">
                        <div className="slide-number">
                          $1.83M
                        </div>
                        <div className="slide-percent plus">
                          +9.48%
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="slide-heading">
                        <div className="slide-icon">
                          <img
                            width="18"
                            height={18}
                            src={icon}
                            alt=""
                          />
                        </div>
                        <div className="slide-title">
                          <span>KATA</span>/WBNB
                        </div>
                      </div>
                      <div className="slide-numbers">
                        <div className="slide-number">
                          $1.83M
                        </div>
                        <div className="slide-percent plus">
                          +9.48%
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="slide-heading">
                        <div className="slide-icon">
                          <img
                            width="18"
                            height={18}
                            src={icon}
                            alt=""
                          />
                        </div>
                        <div className="slide-title">
                          <span>KATA</span>/WBNB
                        </div>
                      </div>
                      <div className="slide-numbers">
                        <div className="slide-number">
                          $1.83M
                        </div>
                        <div className="slide-percent plus">
                          +9.48%
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide">
                  <ol className="slide-list">
                    <li>
                      <div className="slide-heading">
                        <div className="slide-icon">
                          <img
                            width="18"
                            height={18}
                            src={icon}
                            alt=""
                          />
                        </div>
                        <div className="slide-title">
                          <span>KATA</span>/WBNB
                        </div>
                      </div>
                      <div className="slide-numbers">
                        <div className="slide-number">
                          $1.83M
                        </div>
                        <div className="slide-percent plus">
                          +9.48%
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="slide-heading">
                        <div className="slide-icon">
                          <img
                            width="18"
                            height={18}
                            src={icon}
                            alt=""
                          />
                        </div>
                        <div className="slide-title">
                          <span>KATA</span>/WBNB
                        </div>
                      </div>
                      <div className="slide-numbers">
                        <div className="slide-number">
                          $1.83M
                        </div>
                        <div className="slide-percent plus">
                          +9.48%
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="slide-heading">
                        <div className="slide-icon">
                          <img
                            width="18"
                            height={18}
                            src={icon}
                            alt=""
                          />
                        </div>
                        <div className="slide-title">
                          <span>KATA</span>/WBNB
                        </div>
                      </div>
                      <div className="slide-numbers">
                        <div className="slide-number">
                          $1.83M
                        </div>
                        <div className="slide-percent plus">
                          +9.48%
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="home-slider">
          <div className="slider-title">
            Most Viewed Pools
          </div>
          <div className="slider">
            <Swiper
              pagination={true}
              modules={[Pagination]}
              slidesPerView={1}
              spaceBetween={20}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="slide">
                  <ol className="slide-list">
                    <li>
                      <div className="slide-heading">
                        <div className="slide-icon">
                          <img
                            width="18"
                            height={18}
                            src={icon}
                            alt=""
                          />
                        </div>
                        <div className="slide-title">
                          <span>KATA</span>/WBNB
                        </div>
                      </div>
                      <div className="slide-numbers">
                        <div className="slide-number">
                          $1.83M
                        </div>
                        <div className="slide-percent plus">
                          +9.48%
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="slide-heading">
                        <div className="slide-icon">
                          <img
                            width="18"
                            height={18}
                            src={icon}
                            alt=""
                          />
                        </div>
                        <div className="slide-title">
                          <span>KATA</span>/WBNB
                        </div>
                      </div>
                      <div className="slide-numbers">
                        <div className="slide-number">
                          $1.83M
                        </div>
                        <div className="slide-percent plus">
                          +9.48%
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="slide-heading">
                        <div className="slide-icon">
                          <img
                            width="18"
                            height={18}
                            src={icon}
                            alt=""
                          />
                        </div>
                        <div className="slide-title">
                          <span>KATA</span>/WBNB
                        </div>
                      </div>
                      <div className="slide-numbers">
                        <div className="slide-number">
                          $1.83M
                        </div>
                        <div className="slide-percent plus">
                          +9.48%
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide">
                  <ol className="slide-list">
                    <li>
                      <div className="slide-heading">
                        <div className="slide-icon">
                          <img
                            width="18"
                            height={18}
                            src={icon}
                            alt=""
                          />
                        </div>
                        <div className="slide-title">
                          <span>KATA</span>/WBNB
                        </div>
                      </div>
                      <div className="slide-numbers">
                        <div className="slide-number">
                          $1.83M
                        </div>
                        <div className="slide-percent plus">
                          +9.48%
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="slide-heading">
                        <div className="slide-icon">
                          <img
                            width="18"
                            height={18}
                            src={icon}
                            alt=""
                          />
                        </div>
                        <div className="slide-title">
                          <span>KATA</span>/WBNB
                        </div>
                      </div>
                      <div className="slide-numbers">
                        <div className="slide-number">
                          $1.83M
                        </div>
                        <div className="slide-percent plus">
                          +9.48%
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="slide-heading">
                        <div className="slide-icon">
                          <img
                            width="18"
                            height={18}
                            src={icon}
                            alt=""
                          />
                        </div>
                        <div className="slide-title">
                          <span>KATA</span>/WBNB
                        </div>
                      </div>
                      <div className="slide-numbers">
                        <div className="slide-number">
                          $1.83M
                        </div>
                        <div className="slide-percent plus">
                          +9.48%
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide">
                  <ol className="slide-list">
                    <li>
                      <div className="slide-heading">
                        <div className="slide-icon">
                          <img
                            width="18"
                            height={18}
                            src={icon}
                            alt=""
                          />
                        </div>
                        <div className="slide-title">
                          <span>KATA</span>/WBNB
                        </div>
                      </div>
                      <div className="slide-numbers">
                        <div className="slide-number">
                          $1.83M
                        </div>
                        <div className="slide-percent plus">
                          +9.48%
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="slide-heading">
                        <div className="slide-icon">
                          <img
                            width="18"
                            height={18}
                            src={icon}
                            alt=""
                          />
                        </div>
                        <div className="slide-title">
                          <span>KATA</span>/WBNB
                        </div>
                      </div>
                      <div className="slide-numbers">
                        <div className="slide-number">
                          $1.83M
                        </div>
                        <div className="slide-percent plus">
                          +9.48%
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="slide-heading">
                        <div className="slide-icon">
                          <img
                            width="18"
                            height={18}
                            src={icon}
                            alt=""
                          />
                        </div>
                        <div className="slide-title">
                          <span>KATA</span>/WBNB
                        </div>
                      </div>
                      <div className="slide-numbers">
                        <div className="slide-number">
                          $1.83M
                        </div>
                        <div className="slide-percent plus">
                          +9.48%
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="home-slider">
          <div className="slider-title">
            Most Viewed Pools
          </div>
          <div className="slider">
            <Swiper
              pagination={true}
              modules={[Pagination]}
              slidesPerView={1}
              spaceBetween={20}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="slide">
                  <ol className="slide-list">
                    <li>
                      <div className="slide-heading">
                        <div className="slide-icon">
                          <img
                            width="18"
                            height={18}
                            src={icon}
                            alt=""
                          />
                        </div>
                        <div className="slide-title">
                          <span>KATA</span>/WBNB
                        </div>
                      </div>
                      <div className="slide-numbers">
                        <div className="slide-number">
                          $1.83M
                        </div>
                        <div className="slide-percent plus">
                          +9.48%
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="slide-heading">
                        <div className="slide-icon">
                          <img
                            width="18"
                            height={18}
                            src={icon}
                            alt=""
                          />
                        </div>
                        <div className="slide-title">
                          <span>KATA</span>/WBNB
                        </div>
                      </div>
                      <div className="slide-numbers">
                        <div className="slide-number">
                          $1.83M
                        </div>
                        <div className="slide-percent plus">
                          +9.48%
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="slide-heading">
                        <div className="slide-icon">
                          <img
                            width="18"
                            height={18}
                            src={icon}
                            alt=""
                          />
                        </div>
                        <div className="slide-title">
                          <span>KATA</span>/WBNB
                        </div>
                      </div>
                      <div className="slide-numbers">
                        <div className="slide-number">
                          $1.83M
                        </div>
                        <div className="slide-percent plus">
                          +9.48%
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide">
                  <ol className="slide-list">
                    <li>
                      <div className="slide-heading">
                        <div className="slide-icon">
                          <img
                            width="18"
                            height={18}
                            src={icon}
                            alt=""
                          />
                        </div>
                        <div className="slide-title">
                          <span>KATA</span>/WBNB
                        </div>
                      </div>
                      <div className="slide-numbers">
                        <div className="slide-number">
                          $1.83M
                        </div>
                        <div className="slide-percent plus">
                          +9.48%
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="slide-heading">
                        <div className="slide-icon">
                          <img
                            width="18"
                            height={18}
                            src={icon}
                            alt=""
                          />
                        </div>
                        <div className="slide-title">
                          <span>KATA</span>/WBNB
                        </div>
                      </div>
                      <div className="slide-numbers">
                        <div className="slide-number">
                          $1.83M
                        </div>
                        <div className="slide-percent plus">
                          +9.48%
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="slide-heading">
                        <div className="slide-icon">
                          <img
                            width="18"
                            height={18}
                            src={icon}
                            alt=""
                          />
                        </div>
                        <div className="slide-title">
                          <span>KATA</span>/WBNB
                        </div>
                      </div>
                      <div className="slide-numbers">
                        <div className="slide-number">
                          $1.83M
                        </div>
                        <div className="slide-percent plus">
                          +9.48%
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide">
                  <ol className="slide-list">
                    <li>
                      <div className="slide-heading">
                        <div className="slide-icon">
                          <img
                            width="18"
                            height={18}
                            src={icon}
                            alt=""
                          />
                        </div>
                        <div className="slide-title">
                          <span>KATA</span>/WBNB
                        </div>
                      </div>
                      <div className="slide-numbers">
                        <div className="slide-number">
                          $1.83M
                        </div>
                        <div className="slide-percent plus">
                          +9.48%
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="slide-heading">
                        <div className="slide-icon">
                          <img
                            width="18"
                            height={18}
                            src={icon}
                            alt=""
                          />
                        </div>
                        <div className="slide-title">
                          <span>KATA</span>/WBNB
                        </div>
                      </div>
                      <div className="slide-numbers">
                        <div className="slide-number">
                          $1.83M
                        </div>
                        <div className="slide-percent plus">
                          +9.48%
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="slide-heading">
                        <div className="slide-icon">
                          <img
                            width="18"
                            height={18}
                            src={icon}
                            alt=""
                          />
                        </div>
                        <div className="slide-title">
                          <span>KATA</span>/WBNB
                        </div>
                      </div>
                      <div className="slide-numbers">
                        <div className="slide-number">
                          $1.83M
                        </div>
                        <div className="slide-percent plus">
                          +9.48%
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>{" "}
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

export default Home;

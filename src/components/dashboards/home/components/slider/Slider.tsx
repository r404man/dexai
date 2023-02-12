import React from "react";

import icon from "./../../../../../assets/eth.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/scss";
import "./slider.scss";

function Slider({ sliderNumber }: any) {
  const pagination = {
    clickable: true,
    renderBullet: function (
      index: number,
      className: string
    ) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <div className="home-slider">
      <div className="slider-title">
        <div className="slider-title-text">
          Most Viewed Pools
        </div>
        <div className="slider-title-controls">
          <div
            className={
              "image-swiper-button-prev-" + sliderNumber
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
                d="M10 12L6 8L10 4"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div
            className={
              "image-swiper-button-next-" + sliderNumber
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
                d="M6 12L10 8L6 4"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="slider">
        <Swiper
          loop={true}
          modules={[Pagination, Navigation]}
          slidesPerView={1}
          spaceBetween={20}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={pagination}
          navigation={{
            enabled: true,
            nextEl: `.image-swiper-button-next-${sliderNumber}`,
            prevEl: `.image-swiper-button-prev-${sliderNumber}`,
          }}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="slide">
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
                        <div className="slide-number">
                          $1.83M
                        </div>
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
                        <div className="slide-number">
                          $1.83M
                        </div>
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
                        <div className="slide-number">
                          $1.83M
                        </div>
                        <div className="slide-percent plus">
                          +9.48%
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide">
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
                        <div className="slide-number">
                          $1.83M
                        </div>
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
                        <div className="slide-number">
                          $1.83M
                        </div>
                        <div className="slide-percent minus">
                          +9.48%
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide">
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
                        <div className="slide-number">
                          $1.83M
                        </div>
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
                        <div className="slide-number">
                          $1.83M
                        </div>
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
                        <div className="slide-number">
                          $1.83M
                        </div>
                        <div className="slide-percent plus">
                          +9.48%
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;

import React from "react";
import "./footer.scss";
import icon from "./../../assets/googleplay.png";
import icon2 from "./../../assets/appstore.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-social">
        <div className="social-item">
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
        <div className="social-item">
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
        <div className="social-item">
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

      <div className="footer-copy">
        Copyright © 2023, All Rights Reserved by Dex.ai |
        Ads & Marketing: info@dex.ai
      </div>

      <div className="footer-controls">
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
                  <g filter="url(#filter0_ii_39_2022)">
                    <path
                      d="M0.773384 0.914548C0.475198 1.22871 0.29895 1.71627 0.29895 2.34765V24.906C0.29895 25.5384 0.475198 26.0249 0.773384 26.3391L0.84921 26.4125L13.5441 13.7757V13.6268V13.4779L0.84921 0.840088L0.773384 0.914548Z"
                      fill="url(#paint0_linear_39_2022)"
                    />
                    <path
                      d="M17.7749 17.9892L13.5439 13.7756V13.6267V13.4777L17.7759 9.26514L17.8712 9.3192L22.885 12.1548C24.3165 12.9647 24.3165 14.2897 22.885 15.1006L17.8712 17.9362L17.7749 17.9892Z"
                      fill="url(#paint1_linear_39_2022)"
                    />
                    <g filter="url(#filter1_i_39_2022)">
                      <path
                        d="M17.8715 17.9352L13.5432 13.6267L0.773438 26.339C1.2448 26.8367 2.02459 26.8979 2.90275 26.4022L17.8715 17.9352Z"
                        fill="url(#paint2_linear_39_2022)"
                      />
                    </g>
                    <path
                      d="M17.8715 9.31832L2.90275 0.852318C2.02459 0.355578 1.2448 0.417798 0.773438 0.915559L13.5442 13.6278L17.8715 9.31832Z"
                      fill="url(#paint3_linear_39_2022)"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_ii_39_2022"
                      x="0.29895"
                      y="0.509521"
                      width="23.6597"
                      height="26.2351"
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
                        result="effect1_innerShadow_39_2022"
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
                        in2="effect1_innerShadow_39_2022"
                        result="effect2_innerShadow_39_2022"
                      />
                    </filter>
                    <filter
                      id="filter1_i_39_2022"
                      x="0.773438"
                      y="13.6267"
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
                        result="effect1_innerShadow_39_2022"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_39_2022"
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
                      id="paint1_linear_39_2022"
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
                      id="paint2_linear_39_2022"
                      x1="15.5209"
                      y1="15.9665"
                      x2="-7.69251"
                      y2="39.2867"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FF3A44" />
                      <stop
                        offset="1"
                        stopColor="#C31162"
                      />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_39_2022"
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
    </footer>
  );
}

export default Footer;

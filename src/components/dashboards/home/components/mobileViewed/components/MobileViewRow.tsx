import React from "react";
import icon from "../../../../../../assets/home-icons/ETH.svg";

function MobileViewRow() {
  return (
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
          <div className="slide-percent plus">+9.48%</div>
        </div>
      </td>
    </tr>
  );
}

export default MobileViewRow;

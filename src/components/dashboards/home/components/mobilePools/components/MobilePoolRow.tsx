import React from "react";
import icon from "../../../../../../assets/home-icons/ETH.svg";

function MobilePoolRow() {
  return (
    <tr>
      <td className="pool">
        <div className="pool-icon">
          <img width={32} height={32} src={icon} alt="" />
        </div>
        <div className="pool-title">
          <span>ETH</span>/WBNB
        </div>
      </td>
      <td>$0.9981</td>
      <td className="minus">-0.42%</td>
    </tr>
  );
}

export default MobilePoolRow;

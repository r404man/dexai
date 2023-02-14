import React from "react";
import "./tablerow.scss";

import icon from "./../../../../../assets/eth.png";

function TableRow() {
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
      <td>61,287</td>
      <td className="plus">+0.02%</td>
      <td className="minus">-0.44%</td>
      <td className="minus">-0.42%</td>
      <td className="minus">-0.45%</td>
      <td>$18M</td>
      <td>$137.6M</td>
    </tr>
  );
}

export default TableRow;

import React from "react";

function ControllerListItem({ label }: any) {
  return (
    <li className="list-item">
      <div className="list-item-label">Market Cap</div>
      <div className="list-item-value">$2.58M</div>
    </li>
  );
}

export default ControllerListItem;

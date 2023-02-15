import React from "react";
import "./holderItem.scss";

function HolderItem() {
  return (
    <div className="holders-list-item">
      <div className="item-text">
        <div className="item-number">1</div>
        <div className="item-info">
          <div className="item-title">
            1,775,447,444,069.79 Eth
          </div>
          <div className="item-subtitle">17.75%</div>
        </div>
      </div>
      <div className="item-wallet">
        <div className="item-wallet-number">
          0xb541...1c9628
        </div>
        <div className="item-wallet-status">
          Burn Address
        </div>
      </div>
    </div>
  );
}

export default HolderItem;

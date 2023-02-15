import React from "react";
import TableControl from "../tableControl/TableControl";
import MobilePoolRow from "./components/MobilePoolRow";

function MobilePools() {
  return (
    <div className="pools-mobile">
      <h1 className="slider-title-text">BNB Chain Pools</h1>
      <div className="home-table">
        <table>
          <thead>
            <tr>
              <th></th>
              <th className="pool">Pool</th>
              <th className="price">Price</th>
              <th className="twofour">24h</th>
            </tr>
          </thead>
          <tbody>
            <MobilePoolRow />
            <MobilePoolRow />
            <MobilePoolRow />
            <MobilePoolRow />
            <MobilePoolRow />
            <MobilePoolRow />
            <MobilePoolRow />
            <MobilePoolRow />
            <MobilePoolRow />
            <MobilePoolRow />
          </tbody>
        </table>
      </div>
      <TableControl />
    </div>
  );
}

export default MobilePools;

import React from "react";
import MobileViewRow from "../mobileViewed/components/MobileViewRow";

function MobileGainers() {
  return (
    <div className="most-viewed-mobile">
      <div className="slider-title-text">Top Gainers</div>
      <table>
        <thead></thead>
        <tbody>
          <MobileViewRow />
          <MobileViewRow />
          <MobileViewRow />
          <MobileViewRow />
          <MobileViewRow />
          <MobileViewRow />
          <MobileViewRow />
          <MobileViewRow />
          <MobileViewRow />
        </tbody>
      </table>
    </div>
  );
}

export default MobileGainers;

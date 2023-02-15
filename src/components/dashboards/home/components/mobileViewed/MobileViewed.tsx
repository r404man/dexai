import React from "react";
import MobileViewRow from "./components/MobileViewRow";

function MobileViewed() {
  return (
    <div className="most-viewed-mobile">
      <div className="slider-title-text">
        Most Viewed Pools
      </div>
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

export default MobileViewed;

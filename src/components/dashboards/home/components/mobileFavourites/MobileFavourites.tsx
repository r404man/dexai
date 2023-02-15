import React from "react";
import Card from "../card/Card";

function MobileFavourites() {
  return (
    <div className="mobile">
      <h1 className="home-title">My favorites</h1>
      <div className="card-list">
        <Card isUp={true} />
        <Card isUp={true} />
        <Card isUp={true} />
        <Card isUp={true} />
        <Card isUp={false} />
      </div>
    </div>
  );
}

export default MobileFavourites;

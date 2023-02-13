import React from "react";
import "./App.css";
import Home, {
  MobileFavourites,
  MobileGainers,
  MobileLoosers,
  MobilePools,
  MobileViewed,
} from "./components/dashboards/home/Home";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import "swiper/scss";

import {
  Route,
  Link,
  useParams,
  Routes,
} from "react-router-dom";
import Dex, {
  Chart,
  Holders,
  Overview,
} from "./components/dashboards/dex/Dex";
import Swap from "./components/dashboards/swap/Swap";

function App() {
  return (
    <div className="App">
      <div className="app-menu">
        <Menu />
      </div>
      <div className="app-header">
        <Header />
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/favourites"
            element={<MobileFavourites />}
          ></Route>
          <Route
            path="/viewed"
            element={<MobileViewed />}
          ></Route>
          <Route
            path="/gainers"
            element={<MobileGainers />}
          ></Route>
          <Route
            path="/losers"
            element={<MobileLoosers />}
          ></Route>
          <Route
            path="/pools"
            element={<MobilePools />}
          ></Route>

          <Route
            path="/dex/overview"
            element={<Overview />}
          />
          <Route
            path="/dex/holders"
            element={<Holders />}
          />
          <Route path="/dex/chart" element={<Chart />} />
          <Route path="/dex" element={<Overview />}></Route>
          <Route path="/swap" element={<Swap />}></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;

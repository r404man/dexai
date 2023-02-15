import React from "react";
import "./App.css";
import Home from "./components/dashboards/home/Home";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import "swiper/scss";

import { Route, Routes } from "react-router-dom";

import Dex from "./components/dashboards/dex/Dex";
import Chart from "./components/dashboards/dex/components/chart/Chart";
import Overview from "./components/dashboards/dex/components/overview/Overview";
import Holders from "./components/dashboards/dex/components/holders/Holders";

import MobileViewed from "./components/dashboards/home/components/mobileViewed/MobileViewed";
import MobilePools from "./components/dashboards/home/components/mobilePools/MobilePools";
import MobileLoosers from "./components/dashboards/home/components/mobileLoosers/MobileLoosers";
import MobileGainers from "./components/dashboards/home/components/mobileGainers/MobileGainers";
import MobileFavourites from "./components/dashboards/home/components/mobileFavourites/MobileFavourites";

import Swap from "./components/dashboards/swap/Swap";

function App() {
  return (
    <div className="App">
      <div className="app-menu">
        <Menu />
      </div>
      <div className="app-header">
        <Header />
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
          <Route path="/dex" element={<Dex />}></Route>
          <Route path="/swap" element={<Swap />}></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;

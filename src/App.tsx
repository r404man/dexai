import React from "react";
import "./App.css";
import Home from "./components/dashboards/home/Home";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import "swiper/scss";

function App() {
  return (
    <div className="App">
      <div className="app-menu">
        <Menu />
      </div>
      <div className="app-header">
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;

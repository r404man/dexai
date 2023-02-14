import React, { useState } from "react";
import eth from "./../../../../assets/selector/selector-eth.png";
import poly from "./../../../../assets/selector/selector-poly.png";
import bnb from "./../../../../assets/selector/selector-bnb.png";

import "./selector.scss";

interface Currency {
  id: number;
  url: string;
  name: string;
}

function Selector() {
  const [isOpen, setIsOpen] = useState(false);

  const currencies: Currency[] = [
    { id: 0, name: "BNB Chain", url: bnb },
    { id: 1, name: "Etherium", url: eth },
    { id: 2, name: "Polygon", url: poly },
  ];

  const [currentCurrency, setCurrentCurrency] =
    useState<Currency>(currencies[0]);

  function handleClick(e: any) {
    setIsOpen(!isOpen);
  }

  function handleSelector(currency: Currency) {
    setCurrentCurrency(currency);
  }

  const listItems = currencies.map((currency) => (
    <div
      key={currency.id}
      className="list-item"
      onClick={() => handleSelector(currency)}
    >
      <div className="selector-item-icon">
        <img src={currency.url} alt="" />
      </div>
      <div className="selector-item-text">
        {currency.name}
      </div>
    </div>
  ));

  return (
    <div
      className="selector"
      onClick={(e) => handleClick(e)}
    >
      <div
        className={
          isOpen ? "selector-list active" : "selector-list"
        }
      >
        {listItems}
      </div>

      <div className="selector-left">
        <div className="selector-icon">
          <img src={currentCurrency.url} alt="" />
        </div>
        <div className="selector-title">
          {currentCurrency.name}
        </div>
      </div>

      <div
        className={
          isOpen
            ? "selector-control active"
            : "selector-control"
        }
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="#18FFF0"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default Selector;

import React from "react";
import { Doughnut } from "react-chartjs-2";
import HolderItem from "../holderItem/HolderItem";
import "./holders.scss";

function Holders({ isMobile }: any) {
  const data = {
    labels: [
      "Liquidity",
      "Burn",
      "Top 100",
      "All the others",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 25],
        backgroundColor: [
          "#39CAEA",
          "#60F5C2",
          "#EA3943",
          "#394BEA",
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    cutout: 85 + "%",
    responcive: true,
  };

  return (
    <div className="dex">
      <div className="controller-holders">
        <div className="holders-title">
          {isMobile ? <h1>Holders</h1> : <></>}
          {/* <h1>Holders</h1> */}
        </div>
        <div className="holders-pie">
          <div className="pie-chart">
            <div className="chart-amount">
              <div className="chart-title">65.05K</div>
              <div className="chart-subtitle">holders</div>
            </div>
            <Doughnut data={data} options={options} />
          </div>
          <div className="pie-legend">
            <div className="legend-item">
              <div className="legend-info">
                <div className="legend-icon">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="6.5"
                      cy="6.5"
                      r="5.5"
                      stroke="#394BEA"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="legend-text">Liquidity</div>
              </div>
              <div className="legend-value">0.86%</div>
            </div>
            <div className="legend-item">
              <div className="legend-info">
                <div className="legend-icon">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="6.5"
                      cy="6.5"
                      r="5.5"
                      stroke="#EA3943"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="legend-text">Top 100</div>
              </div>
              <div className="legend-value">0.86%</div>
            </div>
            <div className="legend-item">
              <div className="legend-info">
                <div className="legend-icon">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="6.5"
                      cy="6.5"
                      r="5.5"
                      stroke="#60F5C2"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="legend-text">Burn</div>
              </div>
              <div className="legend-value">0.86%</div>
            </div>
            <div className="legend-item">
              <div className="legend-info">
                <div className="legend-icon">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="6.5"
                      cy="6.5"
                      r="5.5"
                      stroke="#39CAEA"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="legend-text">
                  All the others
                </div>
              </div>
              <div className="legend-value">0.86%</div>
            </div>
          </div>
        </div>
        <div className="holder-list">
          <HolderItem />
          <HolderItem />
          <HolderItem />
          <HolderItem />
          <HolderItem />
          <HolderItem />
          <HolderItem />
          <HolderItem />
          <HolderItem />
          <HolderItem />
        </div>
        <div className="mobile">
          <div className="table-controls">
            <div className="controls">
              <div className="controls-btns">
                <div className="controls-btns-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 12L6 8L10 4"
                      stroke="#374160"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="controls-btns-text">
                  Назад
                </div>
              </div>
              <div className="controls-page-list">
                <div className="page-item active">1</div>
                <div className="page-item">2</div>{" "}
                <div className="page-item">3</div>
              </div>
              <div className="controls-btns btn-forward">
                <div className="controls-btns-text">
                  Вперед
                </div>
                <div className="controls-btns-icon">
                  <svg
                    className="forward"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 12L6 8L10 4"
                      stroke="#374160"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Holders;

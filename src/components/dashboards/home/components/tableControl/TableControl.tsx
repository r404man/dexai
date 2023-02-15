import React from "react";

function TableControl() {
  return (
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
            <div className="controls-btns-text">Назад</div>
          </div>
          <div className="controls-page-list">
            <div className="page-item active">1</div>
            <div className="page-item">2</div>{" "}
            <div className="page-item">3</div>
          </div>
          <div className="controls-btns btn-forward">
            <div className="controls-btns-text">Вперед</div>
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
  );
}

export default TableControl;

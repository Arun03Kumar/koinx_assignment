import React from "react";
import "./Performance.css";

export const Slider = ({ lab1, lab2, val1, val2, marker }) => {
  return (
    <div className="price-range">
      <div className="low">
        <div className="label">{lab1}</div>
        <div className="value">{val1}</div>
      </div>
      <div className="progress-bar">
        <div className="gradient-bar"></div>
        {marker && (
          <>
            <div className="value-marker">
              <svg viewBox="0 0 100 100" className="arrow">
                <polygon points="0,100 50,0 100,100" />
              </svg>
              {/* <span className="marker-value">$47,137.83</span> */}
            </div>
            <span className="marker-value">$47,137.83</span>
          </>
        )}
      </div>
      <div className="high">
        <div className="label">{lab2}</div>
        <div className="value">{val2}</div>
      </div>
    </div>
  );
};

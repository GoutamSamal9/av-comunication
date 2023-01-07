import React from "react";
import "./displays.css";

const Displays = () => {
  return (
    <div className="card">
      <div className="card-inner-container">
        <span className="card-head">Displays</span>
        <div className="displays-card-body">
          <div className="displays-card-body-left-number">
            10 <span className="display-card-extra-divided-number">/16</span>
          </div>
          <div className="display-vr"></div>
          <div className="displays-right-text">
            <span className="displays-total">On Time</span>
            <span className="displays-count">00:00</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Displays;

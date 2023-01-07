import React from "react";

const Lighting = () => {
  return (
    <div className="card">
      <div className="card-inner-container">
        <span className="card-head">Lighting</span>
        <div className="audio-lighting-card-body">
          <div className="audio-lighting-card-body-left-number">32</div>
          <div className="audio-lighting-btn-container">
            <button className="audio-lighting-playing-button">On</button>
          </div>
          <div className="audio-lighting-right-text">
            <span className="audio-lighting-total">total</span>
            <span className="audio-lighting-count">43</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Lighting;

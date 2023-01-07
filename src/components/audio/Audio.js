import React from "react";

const Audio = () => {
  return (
    <div className="card">
      <div className="card-inner-container">
        <span className="card-head">Audio</span>
        <div className="audio-lighting-card-body">
          <div className="audio-lighting-card-body-left-number">2</div>
          <div className="audio-lighting-btn-container">
            <button className="audio-lighting-playing-button">PLAYING</button>
          </div>
          <div className="audio-lighting-right-text">
            <span className="audio-lighting-total">total</span>
            <span className="audio-lighting-count">5</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Audio;

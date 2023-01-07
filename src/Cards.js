import React from "react";
import "./Cards.css";
import AirQuality from "./components/air-quality/AirQuality";
import Temperature from "./components/temperature/Temperature";
import Audio from "./components/audio/Audio";
import Lighting from "./components/lighting/Lighting";
import Displays from "./components/displays/Displays";
import logo from "./accets/images/logo.svg";

const Cards = () => {
  return (
    <div className="container">
      <div className="client-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="card-container">
        <AirQuality />
        <Temperature />
        <Audio />
        <Displays />
        <Lighting />
      </div>
    </div>
  );
};
export default Cards;

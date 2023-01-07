import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import "./airQuality.css"

const AirQuality = () =>{
    return(
        <div className="card">
        <div className="card-inner-container">
            <span className="card-head">Air Quality</span>
            <div className="card-body">
                <div className="card-left-item">
                    <div className="left-circle">
                        72
                    </div>
                </div>
                <div className="card-right-item">
                    <div className="card-right-item-text">
                        <FontAwesomeIcon icon={faArrowUp} size="2xl"  color="#6DD0A5" />
                        <div className="card-body-numberText">93</div>
                    </div>
                    <hr className="text-hr-line"/>
                     <div className="card-right-item-text">
                        <FontAwesomeIcon icon={faArrowDown} size="2xl" color="#fcb937" />
                        <div className="card-body-numberText">93</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default AirQuality;
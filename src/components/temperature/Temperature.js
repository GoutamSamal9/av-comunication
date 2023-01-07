import React from "react";
import fireICon from "../../accets/images/fire.svg";
import snowIcon from "../../accets/images/snowflake.svg";
import "./temperature.css";

const Temperature = () => {
    return (
        <div className="card">
            <div className="card-inner-container">
                <span className="card-head">Temperature</span>
                <div className="card-body">
                    <div className="card-left-item">
                        <div className="left-circle-temp">21<span className="degreeSymbol">°c</span> </div>
                    </div>
                    <div className="card-right-item">
                        <div className="card-right-item-text">
                            <div>
                                <img src={fireICon} alt="fire icon" />
                            </div>
                            <div className="card-body-numberText">26<span className="degreeSymbol">°c</span></div>
                        </div>
                        <hr className="text-hr-line" />
                        <div className="card-right-item-text">
                            <div>
                                <img src={snowIcon} alt="fire icon" />
                            </div>
                            <div className="card-body-numberText">18<span className="degreeSymbol">°c</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Temperature;

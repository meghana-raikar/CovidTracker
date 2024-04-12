import React, { useEffect } from "react";
import "./body.css";

const Body = ({fullData}) => {

  return (
    <>
        <h2>Covid Live Tracker India</h2>

        <ul>
          <li className="card">
            <div className="card_main">
              <div className="card_inner">
                <p> Country </p>
                <p>India</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card_main">
              <div className="card_inner">
                <p> Total Recovered </p>
               <p>{fullData.recovered}</p>
              </div>
            </div>
          </li>

          <li className="card">
            <div className="card_main">
              <div className="card_inner">
                <p> Total confirmed </p>
                <p>{fullData.confirmed}</p>
              </div>
            </div>
          </li>

          <li className="card">
            <div className="card_main">
              <div className="card_inner">
                <p> Total Deaths </p>
                <p>{fullData.deaths}</p>
              </div>
            </div>
          </li>

          <li className="card">
            <div className="card_main">
              <div className="card_inner">
                <p> Total Active </p>
                <p>{fullData.active}</p>
              </div>
            </div>
          </li>

          <li className="card">
            <div className="card_main">
              <div className="card_inner">
                <p> Last Updated </p>
                <p>{fullData.lastupdatedtime}</p>
              </div>
            </div>
          </li>
        </ul>

    </>
  );
};

export default Body;

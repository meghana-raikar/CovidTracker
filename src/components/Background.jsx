import React, { useEffect } from "react";
import "./background.css";
import Body from "./Body";
import Home from "./Home";

const Background = ({fullData, selectedCountry}) => {
   useEffect(() => {
     if (fullData) {
       // Perform some action when fullData is truthy
       console.log("Full data received:", fullData);
       // Add your logic here to execute the desired action
     }
   }, [fullData]);
   

  return (
    <div className="background-container">
      <div className="bg">
        <div className="overlay">
          <div className="body">
            {selectedCountry === "Home" && <Home fullData={fullData} />}
            {selectedCountry === "India" && <Body fullData={fullData} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;

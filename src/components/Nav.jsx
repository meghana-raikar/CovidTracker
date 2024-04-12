import React, { useState, useEffect } from "react";
import "./nav.css";
import Dropdown from "./Dropdown";
import Background from "./Background";

const Nav = ({ data, setSelectedCountry}) => {
  
     const handleCountryClick = (country) => {
       setSelectedCountry(country);
     };

      useEffect(() => {
        // Set default country to "Home" when Nav component is initialized
        setSelectedCountry("Home");
      }, []);
      
  return (
    <header>
      <div className="nav-container-right">
        <a href="/">
          <img src="/logo.png" className="logo" alt="Logo" />
        </a>

        <a onClick={() => handleCountryClick("Home")}>Home</a>
        <a onClick={() => handleCountryClick("India")}> India</a>
        
      </div>

      <div className="nav-container-left">
        <Dropdown data={data} />
      </div>
    </header>
  );
};

export default Nav;

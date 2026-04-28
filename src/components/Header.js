import React from "react";
import "./Header.css";
import FloodWarn from "./FloodWarn";

const Header = () => {
  return (
    <header className="header">
      
      <div className="header-title">
        <h1>
          <a
            href="https://www.juneauflood.com/#/home"
            target="_blank"
            rel="noopener noreferrer"
            className="dashboard-link"
          >
            JEDC Glacial Flood Dashboard
          </a>
        </h1>
        <div className="header-subtitle">
          University of Alaska Southeast | Alaska Climate Adaptation Science
          Center
        </div>
      </div>

    </header>
  );
};

export default Header;
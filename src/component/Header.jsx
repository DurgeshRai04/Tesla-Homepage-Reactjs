import React, { useState } from "react";
import "../css/Header.css";
import TeslaLogo from "../assets/teslaLogoSmall.svg";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="header">
      {/* Logo */}
      <div className="header__logo">
        <img src={TeslaLogo} alt="teslalogo" className="Logo" />
      </div>
      {/* Center Part */}
      <div
        className={`header__center ${open === true ? "header__newcenter" : ""}`}
      >
        <CloseIcon
          onClick={() => setOpen(!open)}
          className={`headercenter__closeIcon ${
            open === true ? "headercenter__newIcon" : ""
          }`}
        />

        <p className="header__center__normalpara">Model S</p>
        <p className="header__center__normalpara">Model 3</p>
        <p className="header__center__normalpara">Model X</p>
        <p className="header__center__normalpara">Model Y</p>
        <p className="header__center__normalpara">Solar ROOF</p>
        <p className="header__center__normalpara">Solar PANELS</p>
        <p className={`hidden__para ${open === true ? "visible__para" : ""}`}>
          MORE <i class="arrow right"></i>
        </p>
        <p className={`hidden__para ${open === true ? "visible__para" : ""}`}>
          UNITED STATES
        </p>
      </div>
      {/* right part */}
      <div className="header__right">
        <p>Shop </p>
        <p>Tesla Account</p>
      </div>
      <MenuIcon
        className="header__right__menuicon"
        onClick={() => setOpen(!open)}
      />
    </div>
  );
};

export default Header;

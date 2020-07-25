import React from "react";
import logo from "./../images/minecraft-logo.png";
import "../Styles/Header.css";

function Header() {
  return (
    <div className="Header">
      <img id="logo" src={logo} alt="Minecraft Logo"></img>
    </div>
  );
}

export default Header;

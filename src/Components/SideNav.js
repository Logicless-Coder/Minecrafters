import React from "react";
import "./../Styles/SideNav.css";

function SideNav() {
  return (
    <div className="SideNav">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Mobs</a>
        </li>
        <li>
          <a href="/biomes">Biomes</a>
        </li>
        <li>
          <a href="#">Updates</a>
        </li>
        <li>
          <a href="#">Redstone</a>
        </li>
        <li>
          <a href="/combat">Combat</a>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;

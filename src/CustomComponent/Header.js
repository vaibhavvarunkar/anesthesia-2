import React from "react";
import "../css/header.css";
import logo from "../images/logo-small.png";
const Header = (props) => {
  return (
    <div className="header">
      <img src={logo} className="logo" />
      <input placeholder="SEARCH" className="search-text-input" />
      <i onClick={()=>props.onMenuClick()} class="material-icons burger-menu">menu</i>
    </div>
  );
};

export default Header;

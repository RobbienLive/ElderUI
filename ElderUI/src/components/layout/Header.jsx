import React from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";
import logo from "../../images/png/ElderUI_logo.png";

function Header() {
  return (
    <header className="app-header">
      <div className="app-header-left">
        <img src={logo} alt="ElderUI Logo" className="app-logo" />
        <span className="app-title">ElderUI Header</span>
      </div>
      <nav className="app-nav">
        <Link to="/">Tools</Link>
        <Link to="/tool2">Tool 2</Link>
        <Link to="/page-tools">Page Tools</Link>
      </nav>
    </header>
  );
}

export default Header;

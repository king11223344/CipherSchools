import React, { useState } from "react";
import { FaBell, FaMoon, FaSearch,FaGhost } from "react-icons/fa";
import "../styles/header.css";

const Header = ({ handleClick }) => {
  const [bclr, setBclr] = useState("#f2f2f2");
  const [tclr, setTclr] = useState("black");
    const handleClick2 = () => {
    setBclr((prev) => (prev === "#5A5A5A" ? "#f2f2f2" : "#5A5A5A"));
    setTclr((prev) => (prev === "white" ? "black" : "white"));
    }
  return (
    <div className="header" >
      <div className="header-left" style={{ color: tclr }}>
        <img src="/logo.png" alt="logo" className="header-logo" />
        <div className="header-company" >CipherSchools</div>
        <div className="header-browse" >
          Browse↓ <i className="icon-arrow-down" />
        </div>
      </div>
      <div className="header-right">
        <div className="header-search">
          <FaSearch className="header-icon" />
          <input className="header-input"
            type="text"
            placeholder="Search"
            style={{ backgroundColor: bclr, color: tclr }}
          />
        </div>
        <FaBell className="header-icon hi2" />
        <img src="/logo.png" alt="logo" className="header-logo" style={{height:"20px",width:"20px"}} />
        <div className="header-followers">
          <i className="icon-user" />
          <FaGhost className="header-icon hi2" style={{color:tclr}} />
          2
        </div>
        <div onClick={handleClick2}>
          <FaMoon className="header-icon hi2" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default Header;

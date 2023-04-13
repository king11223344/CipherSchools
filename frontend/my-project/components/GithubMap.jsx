import React from "react";

const GithubMap = ({ bgColor, textColor }) => {
  return (
    <div
      className="rootChart"
      style={{  backgroundColor: bgColor, color: textColor }}
    >
      <h2 className="cipher">Cipher Map</h2>
      <div className="graph" style={{border:"none",marginLeft:"11%"}}>
      
        <ul className="months">
          <li>Jan</li>
          <li>Feb</li>
          <li>Mar</li>
          <li>Apr</li>
          <li>May</li>
          <li>Jun</li>
          <li>Jul</li>
          <li>Aug</li>
          <li>Sep</li>
          <li>Oct</li>
          <li>Nov</li>
          <li>Dec</li>
        </ul>
        <ul className="days">
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
        <ul className="squares"></ul>
      </div>
    </div>
  );
};

export default GithubMap;

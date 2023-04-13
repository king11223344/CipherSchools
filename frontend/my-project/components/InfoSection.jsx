import React from 'react';
import '../styles/infosection.css'; // import the CSS file with styles
import { FaPencilAlt } from 'react-icons/fa';
function CompanyInfo({userInfo,backImg}) {
  return (
    <div className="company-info-container" style={{backgroundImage: backImg}}>
      <div className="logo-container">
        <img src="./logo.png" alt="Company Logo" className="logo" />
        <FaPencilAlt className="edit-icon" />
      </div>
      <div className="info-container">
        <div className="name">Hello,</div>
        <div className="company-name">{userInfo.userName}</div>
        <div className="email">{userInfo.email}</div>
      </div>
      <div className="follower-count">2 Followers</div>
    </div>
  );
}

export default CompanyInfo;

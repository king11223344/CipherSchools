import React, { useState } from "react";
import "../styles/password.css";
import { FaLock } from "react-icons/fa";
import axios from "axios";
const PasswordSecuritySection = ({ textAreaColor, userInfo }) => {
  const [password, setPassword] = useState("A12@w");
  const [passwordError, setPasswordError] = useState(false);
  const handleAboutMeChange = (event) => {
    setPassword(event.target.value);
  };
  const handleEditClick = (e) => {
    const textArea = document.querySelector("#password");
    const editButton = document.querySelector("#changepass");
    textArea.readOnly = textArea.readOnly ? false : true;

    if (editButton.innerHTML === "Save") {
      if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(password)) {
        setPasswordError(true);
      } else {
        axios
          .post(`https://backend2-49vb.onrender.com/update/password`, {
            password: password,
            email: userInfo.email,
          })
          .then((res) => {
            console.log(res.data);
          });
      }
    }
    editButton.innerHTML =
      editButton.innerHTML === "Change" ? "Save" : "Change";
  };
  return (
    <div className="password-security-section">
      <div className="section-header">
        <div className="title" style={{ marginLeft: "3%" }}>
          Password Security
        </div>
        <button
          className="edit-button"
          id="changepass"
          onClick={handleEditClick}
          style={{ marginRight: "2%" }}
        >
          Change
        </button>
      </div>
      <div className="input-field">
        <label htmlFor="input-label">Password</label>
        <div className="password-input-container">
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleAboutMeChange}
            readOnly
            placeholder="********"
            style={{
              borderRadius: "20px",
              height: "40px",
              padding: "10px 20px",
              backgroundColor: textAreaColor,
            }}
          />
          <i>
            <FaLock />
          </i>
          {passwordError && (
            <p className="error-message">
              Password must contain at least one lowercase letter, one uppercase
              letter, one number, and one special character (!@#$%^&*)
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordSecuritySection;

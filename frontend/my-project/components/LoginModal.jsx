import React, { useState } from "react";
import "../styles/loginmodal.css";
import axios from "axios";
const LoginModal = ({ setShowModal, setUserInfo }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (!email.includes("@") || !email.includes(".")) {
      setEmailError(true);
      return;
    }

    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(password)) {
      setPasswordError(true);
      return;
    }

    axios
      .post(`${process.env.REACT_PUBLIC_BACKEND_URL}checkAdd`, {
        userName: username,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        const userData = res.data[1];
        if (res.data === "password not matched") {
          setPasswordMatchError(true);
          return;
        } else {
          setUserInfo({
            userName: userData.userName,
            email: userData.email,
            follower: userData?.follower,
            webLinks: userData?.webLinks,
            professionalInfo: userData?.profInfo,
            interests: userData?.interests,
            aboutme: userData?.aboutYou,
          });
          setShowModal(false);
        }
      });
  };

  return (
    <div className="login-modal">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{
              borderColor: emailError ? "red" : "black",
              border: "1px solid",
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(false);
            }}
            style={{
              borderColor: emailError ? "red" : "black",
              border: "1px solid",
            }}
            required
          />
          {isSubmitted && emailError && (
            <p className="error-message">Please enter a valid email address</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="passwor"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError(false);
            }}
            style={{ borderColor: "black", border: "1px solid" }}
            required
          />
          {isSubmitted && passwordError && (
            <p className="error-message">
              Password must contain at least one lowercase letter, one uppercase
              letter, one number, and one special character (!@#$%^&*)
            </p>
          )}
          {isSubmitted && passwordMatchError && (
            <p className="error-message">Password does not match</p>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginModal;

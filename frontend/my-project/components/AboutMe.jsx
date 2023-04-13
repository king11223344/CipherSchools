import React, { useState, useEffect } from "react";
import "../styles/aboutme.css";
import axios from "axios";
function AboutMe({ textAreraColor, userInfo }) {
  const [aboutMe, setAboutMe] = useState(userInfo.aboutme);
  const handleAboutMeChange = (event) => {
    setAboutMe(event.target.value);
  };

  const handleEditClick = (e) => {
    const textArea = document.querySelector(".text-area");
    const editButton = document.querySelector(".edit-button");
    textArea.readOnly = textArea.readOnly ? false : true;

    if (editButton.innerHTML === "Save") {
      axios
        .post(`${process.env.REACT_PUBLIC_BACKEND_URL}update/aboutme`, {
          aboutMe: textArea.innerHTML,
          email: userInfo.email,
        })
        .then((res) => {
          console.log(res.data);
        });
    }
    editButton.innerHTML = editButton.innerHTML === "Edit" ? "Save" : "Edit";
  };
  useEffect(() => {
    setAboutMe(userInfo.aboutme);
  },[userInfo]);
  return (
    <div className="about-me-container">
      <div className="header">
        <div className="title">About Me</div>
        <button
          className="edit-button"
          onClick={handleEditClick}
          style={{ marginRight: "2%" }}
        >
          Edit
        </button>
      </div>
      <textarea
        className="text-area"
        value={aboutMe}
        onChange={handleAboutMeChange}
        style={{
          backgroundColor: textAreraColor,
          marginRight: "10%",
          width: "90vw",
        }}
        readOnly
      />
    </div>
  );
}

export default AboutMe;

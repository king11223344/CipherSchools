import React, { useState,useEffect } from "react";
import "../styles/onweb.css";
import axios from "axios";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaInternetExplorer,
} from "react-icons/fa";
function OnTheWeb({ textAreaColor,userInfo }) {
  const [webInputs, setWebInputs] = useState(userInfo.webLinks);
  console.log(webInputs)
  const webFields = [
    [
      { label: "LinkedIn", icon: <FaLinkedin />, name: "linkedin" },
      { label: "Facebook", icon: <FaFacebook />, name: "facebook" },
      { label: "Instagaram", icon: <FaInstagram />, name: "instagram" },
    ],
    [
      { label: "GitHub", icon: <FaGithub />, name: "github" },
      { label: "Twitter", icon: <FaTwitter />, name: "twitter" },
      { label: "Website", icon: <FaInternetExplorer />, name: "website" },
    ],
  ];

  const handleWebInputChange = (event) => {
    const { name, value } = event.target;
    setWebInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

 
  const handleEditClick = (e) => {
    const inputfields = [];
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 3; j++)
        inputfields.push(document.querySelector(".weblinks" + i + j));
    }
    const editButton = document.querySelector("#onwebbutton");
    for (let i = 0; i < 6; i++) {
      inputfields[i].readOnly = !inputfields[i].readOnly ;
    }
    const fieldsValue=[]
    for(let i = 0; i < 6; i++) {
      fieldsValue.push(inputfields[i].value)
    }
    if (editButton.innerHTML === "Save") {
      axios
        .post(`${process.env.REACT_PUBLIC_BACKEND_URL}update/weblinks`, {
          webLinks: fieldsValue,
          email: userInfo.email,
        })
        .then((res) => {
          console.log(res.data);
        });
    }
    editButton.innerHTML = editButton.innerHTML === "Edit" ? "Save" : "Edit";
  };
  useEffect(() => {
    setWebInputs(userInfo.webLinks);
  },[userInfo]);
  return (
    <div className="on-the-web-container flex flex-wrap">
      <div className="header">
        <div className="title">On the Web</div>
        <button
          className="edit-button"
          id="onwebbutton"
          onClick={handleEditClick}
          style={{ marginRight: "2%" }}
        >
          Edit
        </button>
      </div>
      <div className="input-container">
        {webFields.map((field, index) => (
          <div key={index} className="input-row">
            {field.map(({ label, icon, name }, index2) => (
              <div key={name} className="input-column">
                <div className="input-label" style={{ marginLeft: "65px" }}>
                  <i style={{ paddingRight: "5px" }}>{icon}</i>
                  {label}
                </div>
                <input
                  type="text"
                  name={name}
                  className={"weblinks" + index + index2}
                  value={webInputs?webInputs[name]:""}
                  onChange={handleWebInputChange}
                  style={{
                    backgroundColor: textAreaColor,
                    borderRadius: "20px",
                    width: "40vw",
                    margin: "auto",
                  }}
                  readOnly
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
export default OnTheWeb;

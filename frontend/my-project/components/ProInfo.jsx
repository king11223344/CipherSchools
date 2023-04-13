import React, { useState } from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

function ProfessionalInfoSection({ textAreaColor, userInfo }) {
  const [education, setEducation] = useState("");
  const [profession, setProfession] = useState("");
  const [showEducationChoices, setShowEducationChoices] = useState(false);
  const [showProfessionChoices, setShowProfessionChoices] = useState(false);

  const educationChoices = [
    "High School",
    "Associate Degree",
    "Bachelor Degree",
    "Master Degree",
    "PhD",
    "Other",
  ];

  const professionChoices = [
    "Student",
    "Full-time Employee",
    "Part-time Employee",
    "Freelancer",
    "Entrepreneur",
    "Other",
  ];

  return (
    <div className="professional-info-container">
      <div className="header">
        <div className="title">Professional Information</div>
        <button className="edit-button" style={{ marginRight: "2.3%" }}>
          Edit
        </button>
      </div>
      <div className="input-container">
        <div className="input-column">
          <div className="input-label" style={{ marginLeft: "10%" }}>
            <i style={{ paddingRight: "5px" }}>
              <FaGraduationCap />
            </i>
            Highest Education
          </div>
          <input
            type="text"
            value={education}
            // onChange={(e) => {}
            placeholder="Select your highest education"
            onFocus={() => setShowEducationChoices(true)}
            onBlur={() => setShowEducationChoices(false)}
            style={{
              backgroundColor: textAreaColor,
              borderRadius: "20px",
              width: "40vw",
              marginLeft: "10%",
            }}
          />
          {showEducationChoices && (
            <div
              className="input-choices"
              style={{
                backgroundColor: textAreaColor,
                borderRadius: "20px",
                paddingLeft: "19px",
                cursor: "pointer",
                fontSize: "15px",
                marginLeft: "20px",
                zIndex: "2",
              }}
            >
              {educationChoices.map((choice) => (
                <div
                  key={choice}
                  className="input-choice"
                  style={{zIndex:"5"}}
                  onClick={() => {
                    console.log(choice)
                    setEducation(choice);
                  }}
                >
                  {choice}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="input-column">
          <div className="input-label" style={{ marginLeft: "10%" }}>
            <i style={{ paddingRight: "5px" }}>
              {" "}
              <FaBriefcase />
            </i>
            What You Currently Do?
          </div>
          <input
            type="text"
            value={profession}
            placeholder="Select what you currently do"
            onFocus={() => setShowProfessionChoices(true)}
            onBlur={() => setShowProfessionChoices(false)}
            style={{
              backgroundColor: textAreaColor,
              borderRadius: "20px",
              width: "40vw",
              marginLeft: "10%",
            }}
            readOnly
          />
          {showProfessionChoices && (
            <div
              className="input-choices"
              style={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "20px",
                paddingLeft: "19px",
                cursor: "pointer",
                fontSize: "15px",
                marginLeft: "20px",
                zIndex: "2",
              }}
            >
              {professionChoices.map((choice) => (
                <div
                  key={choice}
                  className="input-choice"
                  onClick={() => setProfession(choice)}
                >
                  {choice}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfessionalInfoSection;

import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Chart from "../components/GithubMap";
import Header from "../components/Header";
import InfoSection from "../components/InfoSection";
import AboutMe from "../components/AboutMe";
import OnWeb from "../components/OnWeb";
import ProfessionalInfoSection from "../components/ProInfo";
import PasswordSecurity from "../components/Password";
import Interest from "../components/Interest";
import LoginModal from "../components/LoginModal";
function App() {
  const color1 = "#F2F5FA";
  const color2 = "#15181E";
  const [bgColor, setBgColor] = useState(color1);
  const [textColor, setTextColor] = useState(color2);
  const [textAreraColor, setTextAreraColor] = useState("white");
  const [showModal, setShowModal] = useState(true);
  const [backImg, setBackImg] = useState("url('./background.png')");
  const [userInfo, setUserInfo] = useState({
    userName: "",
    email: "",
    follower: 0,
    webLinks: {
      linkedin: "Enter your linkedin link",
      github: "Enter your github link",
      twitter: "Enter your twitter link",
      facebook: "Enter your facebook link",
      instagram: "Enter your instagram link",
      website: "Enter your website link",
    },
    profInfo: {
      education: "Enter your highest education",
      profession: "Enter your profession",
    },
    interests: [],
    aboutme: "Write Something about yourself",
  });
  const onClick = () => {
    setBgColor((prev) => (prev === color2 ? color1 : color2));
    setTextColor((prev) => (prev === color1 ? color2 : color1));
    setTextAreraColor((prev) => (prev === "white" ? "#262C36" : "white"));
    setBackImg((prev) =>(prev === "url('./background.png')" ? "url('./backgroundBlack.jpeg')" : "url('./background.png')"))
  };
  const handleClick = () => {
    axios
      .post("http://localhost:5000/", { email: "abcd", givenName: "asfdog" })
      .then((res) => {
        // console.log(res.data);
      });
  };
  useEffect(() => {
    const squares = document.querySelector(".squares");
    for (var i = 1; i < 179; i++) {
      const level = Math.floor(Math.random() * 2.3);
      squares.insertAdjacentHTML(
        "beforeend",
        `<li data-level="${level}"></li>`
      );
    }
  }, []);

  return (
    <div style={{ backgroundColor: bgColor, color: textColor }}>
      {showModal && (
        <LoginModal setShowModal={setShowModal} setUserInfo={setUserInfo} />
      )}
      <Header handleClick={onClick} bgColor={bgColor} textColor={textColor} />
      <InfoSection userInfo={userInfo} backImg={backImg} />
      <AboutMe textAreraColor={textAreraColor} userInfo={userInfo} />
      <hr
        style={{
          color: "#dadFe6",
          height: "1px",
          backgroundColor: "#DADFE6",
          width: "80vw",
          margin: "auto",
        }}
      />
      <Chart bgColor={bgColor} textColor={textColor} />
      <hr
        style={{
          color: "#dadFe6",
          height: "1px",
          backgroundColor: "#DADFE6",
          width: "80vw",
          margin: "auto",
        }}
      />
      <OnWeb textAreaColor={textAreraColor} userInfo={userInfo} />
      <hr
        style={{
          color: "#dadFe6",
          height: "1px",
          backgroundColor: "#DADFE6",
          width: "80vw",
          margin: "auto",
        }}
      />
      <ProfessionalInfoSection textAreaColor={textAreraColor} userInfo={userInfo} />
      <hr
        style={{
          color: "#dadFe6",
          height: "1px",
          backgroundColor: "#DADFE6",
          width: "80vw",
          margin: "auto",
          marginTop: "10px",
        }}
      />
      <PasswordSecurity textAreaColor={textAreraColor} userInfo={userInfo} />
      <hr
        style={{
          color: "#dadFe6",
          height: "1px",
          backgroundColor: "#DADFE6",
          width: "80vw",
          margin: "auto",
          marginTop: "10px",
        }}
      />
      <Interest textAreaColor={textAreraColor} />
      <div style={{ height: "200px" }}></div>
    </div>
  );
}

export default App;

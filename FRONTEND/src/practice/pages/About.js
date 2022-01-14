import React  from "react";
import StaffList from "../components/StaffList";
import AboutPractice from "../components/AboutPractice";


const About = () => {
    return(
      <div className = "Text__Body">
        <h1>About Monument Dental</h1>
        <AboutPractice/>
        <h1>Our Staff</h1>
        <StaffList/>
      </div>
    )
}

export default About;
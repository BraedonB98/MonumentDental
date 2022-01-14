import React  from "react";
import PracticeInfo from "../components/PracticeInfo";
import ContactUs from "../components/ContactUs";

const Contact = () => {
    return(
      <React.Fragment>
        <div className = "Text__Body">
          <PracticeInfo/>
          <ContactUs/>
        </div>
      </React.Fragment>
    )
}

export default Contact;
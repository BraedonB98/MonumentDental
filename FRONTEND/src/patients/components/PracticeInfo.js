import React  from "react";
import Card from "../../shared/components/UIElements/Card";

const PracticeInfo = () => {
    return(
      <React.Fragment>
        <Card>
        <h3>Monument Dental</h3>
        <a href = "https://goo.gl/maps/jh441hWp5yux3qVd9"><b>236 Washington Street Suite 1W Monument, CO 80132</b></a><br/><br/>
        <a href="tel:7194882721">Phone: <b>719-488-2721</b></a><br/><br/>
        <a href = "mailto:monumentdental@hotmail.com">Email: <b>monumentdental@hotmail.com</b></a><br/><br/>
        <a>Office Hours: Monday-Thursday 7:30am-5pm</a>
        </Card><br></br>
      </React.Fragment>
    )
}

export default PracticeInfo;
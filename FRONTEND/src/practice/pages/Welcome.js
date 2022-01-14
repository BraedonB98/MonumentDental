import React  from "react";

import Card from "../../shared/components/UIElements/Card"
import WelcomeIntro from "../components/WelcomeIntro";
import WelcomeSlideShow from "../components/WelcomeSlideShow";

const Welcome = () => {
    console.log("welcome")
    return(
        <React.Fragment>
            <div className="Welcome__Body">
                <WelcomeSlideShow/>
                <WelcomeIntro/>
            </div>
            
        </React.Fragment>
    )
}

export default Welcome;
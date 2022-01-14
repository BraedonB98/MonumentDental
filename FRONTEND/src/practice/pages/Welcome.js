import React  from "react";
import WelcomeIntro from "../components/WelcomeIntro";
import WelcomeSlideShow from "../components/WelcomeSlideShow";
import "./Welcome.css"

const Welcome = () => {
    console.log("welcome")
    return(
        <React.Fragment>
            <WelcomeSlideShow/>
            <div className="Welcome__Body">
                <WelcomeIntro/>
            </div>
            
        </React.Fragment>
    )
}

export default Welcome;
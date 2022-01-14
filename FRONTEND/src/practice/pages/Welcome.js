import React  from "react";
import WelcomeIntro from "../components/WelcomeIntro";
import WelcomeSlideShow from "../components/WelcomeSlideShow";


const Welcome = () => {
    console.log("welcome")
    return(
        <React.Fragment>
            <WelcomeSlideShow/>
            <div className="Text__Body">
                <WelcomeIntro/>
            </div>
            
        </React.Fragment>
    )
}

export default Welcome;
import React  from "react";

import Card from "../../shared/components/UIElements/Card"
import WelcomeIntro from "../components/WelcomeIntro";

const Welcome = () => {
    console.log("welcome")
    return(
        <Card>
            <WelcomeIntro/>
        </Card>
    )
}

export default Welcome;
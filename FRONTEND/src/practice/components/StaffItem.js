import React  from "react";
import Card from "../../shared/components/UIElements/Card";
import Avatar from "../../shared/components/UIElements/Avatar"

import './StaffItem.css'
const StaffItem = props => {
    return(
      <li className = "staff-item">
        <Card className = "staff-item__content">
          <div className ="staff-item__image">
                    <Avatar image={`https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1`} alt = {props.name}/>
                </div>
                <div className="staff-item__info">
                    <h2>{props.name}</h2>
                    <h3>{props.position}</h3>
                    <p>{props.comment}</p>
                </div>
        </Card>
       </li>
    )
}

export default StaffItem;
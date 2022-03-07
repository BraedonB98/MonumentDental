import React from "react";
import Card from "../../shared/components/UIElements/Card";
import Avatar from "../../shared/components/UIElements/Avatar";

import "./StaffItem.css";
const StaffItem = (props) => {
  return (
    <li className="staff-item">
      <Card className="staff-item__content">
        <div className="staff-item__image">
          <Avatar image={`${props.imageUrl}`} alt={props.name} />
        </div>
        <div className="staff-item__info">
          <h2>{props.name}</h2>
          <h3>{props.position}</h3>
        </div>
      </Card>
    </li>
  );
};

export default StaffItem;
//<p>{props.comment}</p>

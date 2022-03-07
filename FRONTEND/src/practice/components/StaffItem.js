import React, { useState } from "react";
import Card from "../../shared/components/UIElements/Card";
import Avatar from "../../shared/components/UIElements/Avatar";
import Modal from "../../shared/components/UIElements/Modal";
import "./StaffItem.css";
const StaffItem = (props) => {
  const [active, setActive] = useState(false);

  return (
    <React.Fragment>
      <Modal
        onCancel={() => {
          setActive(false);
        }}
        header={props.name}
        footer={
          <React.Fragment>
            <div className="staff-item__modal-image-div ">
              <Avatar image={props.imageUrl} alt={props.name} />
            </div>
            {props.comment}
          </React.Fragment>
        }
        show={active}
      />
      <li
        className="staff-item"
        onClick={() => {
          setActive(!active);
          console.log(active);
        }}
      >
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
    </React.Fragment>
  );
};

export default StaffItem;
//<p>{props.comment}</p>

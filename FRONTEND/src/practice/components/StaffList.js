import React  from "react";
import StaffItem from "./StaffItem";
import './StaffList.css'

const StaffList = () => {
    return(
      <ul className="staff-list">
        <StaffItem name ="Marcus" position = "Dentist" comment = "Here is the comment" />
        <StaffItem name ="Person 1" position = "Job 1" comment = "Here is the comment" />
        <StaffItem name ="Person 2" position = "Job 1" comment = "Here is the comment" />
        <StaffItem name ="Person 3" position = "Job 1" comment = "Here is the comment" />
      </ul>
    )
}

export default StaffList;
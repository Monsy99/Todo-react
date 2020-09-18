import React from "react";
import "./style.css";

const Group = (props) => (
  <div className="group">
    <div className="group__wrapper">
      <h2 className="group__subHeader">{props.title}</h2>
      {props.additionalElements}
    </div>
    <hr></hr>
    {props.children}
  </div>
);

export default Group;

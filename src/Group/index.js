import React from "react";
import { StyledGroup, Wrapper, SubHeader } from "./styledGroup.js";

const Group = (props) => (
  <StyledGroup>
    <Wrapper className="group__wrapper">
      <SubHeader className="group__subHeader">{props.title}</SubHeader>
      {props.additionalElements}
    </Wrapper>
    <hr></hr>
    {props.children}
  </StyledGroup>
);

export default Group;

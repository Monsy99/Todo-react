import React from "react";
import { StyledGroup, Wrapper, SubHeader } from "./styledGroup.js";

const Group = (props) => (
  <StyledGroup>
    <Wrapper>
      <SubHeader>{props.title}</SubHeader>
      {props.additionalElements}
    </Wrapper>
    <hr></hr>
    {props.children}
  </StyledGroup>
);

export default Group;

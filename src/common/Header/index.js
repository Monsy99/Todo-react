import React from "react";
import StyledHeader from "./styledHeader";

const Header = (props) => {
  return <StyledHeader>{props.children}</StyledHeader>;
};

export default Header;

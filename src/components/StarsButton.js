import React from "react";
import { StyledStartButton } from "./styles/StyledStartButton";

const StarsButton = ({ callback }) => {
  return <StyledStartButton onClick={callback}>Stars Game</StyledStartButton>;
};

export default StarsButton;

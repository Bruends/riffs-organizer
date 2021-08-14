import React from "react";
import { AlertStyled, AlertMessage, AlertTitle } from "./styles";

const Alert = (props) => {
  return (
    <AlertStyled type={props.type}>
      <AlertTitle>{props.title}</AlertTitle>
      <AlertMessage>{props.message}</AlertMessage>
    </AlertStyled>
  );
};

export default Alert;

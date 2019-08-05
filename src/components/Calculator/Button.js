import React from "react";
import styled from "@emotion/styled";

const ButtonCtr = styled.button`
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 1px solid #888888;
  flex: 1;
`;

const Value = styled.p`
  font-size: 22px;
`;

const Button = props => (
  <ButtonCtr onClick={() => props.handleClick(props.value)}>
    <Value>{props.value}</Value>
  </ButtonCtr>
);

export default Button;
import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Button = ({ value, handleClick }) => {
  return (
    <ButtonCtr data-testid="button" onClick={() => handleClick(value)}>
      <Value>{value}</Value>
    </ButtonCtr>
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Button;

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

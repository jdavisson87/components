import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ClearBtnCtr = styled.button`
  height: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: lighter;
  font-size: 1.4em;
  background-color: #c5c3cd;
  color: #000000;
  flex: 1;
  outline: 1px solid #888888;
`;

const ClearBtnText = styled.p`
  margin: 0;
  font-size: 42px;
  font-weight: bold;
`;

const ClearButton = props => (
  <ClearBtnCtr onClick={props.clear}>
    <ClearBtnText>Clear</ClearBtnText>
  </ClearBtnCtr>
);

ClearButton.propTypes = {
  clear: PropTypes.func.isRequired
};

export default ClearButton;

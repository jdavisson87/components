import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const DisplayCtr = styled.div`
  height: 4em;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  font-weight: bold;
  font-size: 1.4em;
  background-color: #000000;
  color: #ffffff;
  padding: 0.5em;
  outline: 1px solid #888888;
`;

const DisplayOutput = styled.p`
  margin: 0;
  font-size: 54px;
  color: rgb(110, 255, 26);
  font-weight: lighter;
`;

let Display = ({ output }) => (
  <DisplayCtr>
    <DisplayOutput data-testid="number-display">{output}</DisplayOutput>
  </DisplayCtr>
);

Display.propTypes = {
  output: PropTypes.string
};

export default Display;

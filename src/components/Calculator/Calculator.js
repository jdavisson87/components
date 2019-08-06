import React, { useState } from "react";
import styled from "@emotion/styled";
import Button from "./Button";
import Display from "./Display";
import ClearButton from "./ClearButton";
import * as math from "mathjs";
import { decimalPress, operatorPress } from "./utils/helper";

const Calculator = () => {
  const [evaluated, setEvaluated] = useState(false);
  const [answer, setAnswer] = useState("");

  const handleButtonPress = val => {
    if (answer.length < 12) {
      if (evaluated === true) {
        setEvaluated(false);
      } else {
        setAnswer(answer + val);
      }
    }
  };

  const handleOperatorPress = val => {
    if (answer.length < 12) {
      if (evaluated === false) {
        if (answer !== "") {
          setAnswer(operatorPress(answer, val));
        }
      } else {
        setAnswer(answer + val);
        setEvaluated(false);
      }
    }
  };

  const handleDecimalPress = val => {
    if (answer.length < 12) {
      decimalPress ? setAnswer(answer) : setAnswer(answer + val);
    }
  };

  const handleEqual = () => {
    const operatorCheck = answer.split("").splice(-1, 1);
    const regex = /[+-/*]/;
    if (answer !== "") {
      if (regex.test(operatorCheck)) {
        setAnswer(answer);
      } else {
        setAnswer(math.evaluate(answer).toFixed(2));
        setEvaluated(true);
      }
    }
  };

  const handleClear = () => {
    setAnswer("");
    setEvaluated(false);
  };
  return (
    <CalculatorCtr>
      <Display output={answer} />
      <Row>
        <Button handleClick={handleButtonPress} value={"1"} />
        <Button handleClick={handleButtonPress} value={"2"} />
        <Button handleClick={handleButtonPress} value={"3"} />
        <Button handleClick={handleOperatorPress} value={"*"} />
      </Row>
      <Row>
        <Button handleClick={handleButtonPress} value={"4"} />
        <Button handleClick={handleButtonPress} value={"5"} />
        <Button handleClick={handleButtonPress} value={"6"} />
        <Button handleClick={handleOperatorPress} value={"/"} />
      </Row>
      <Row>
        <Button handleClick={handleButtonPress} value={"7"} />
        <Button handleClick={handleButtonPress} value={"8"} />
        <Button handleClick={handleButtonPress} value={"9"} />
        <Button handleClick={handleOperatorPress} value={"+"} />
      </Row>
      <Row>
        <Button handleClick={handleDecimalPress} value={"."} />
        <Button handleClick={handleButtonPress} value={"0"} />
        <Button handleClick={handleEqual} value={"="} />
        <Button handleClick={handleOperatorPress} value={"-"} />
      </Row>
      <Row>
        <ClearButton clear={handleClear} />
      </Row>
    </CalculatorCtr>
  );
};

export default Calculator;

const CalculatorCtr = styled.div`
  width: 400px;
  height: 600px;
  font-family: sans-serif;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  height: 4em;
`;

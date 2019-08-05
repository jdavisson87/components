export const decimalPress = val => {
  const regex = /[+\-/*]/;
  const regexDec = /[.]/;
  const decimal = val.split(regex)[val.split(regex).length - 1];
  return regexDec.test(decimal);
};

export const operatorPress = (answer, val) => {
  const operatorCheck = answer.split("").pop();
  const regex = /[+-/*]/;
  const newAnswer = answer.split("");
  newAnswer.splice(-1, 1);

  return regex.test(operatorCheck) ? newAnswer.join("") + val : answer + val;
};

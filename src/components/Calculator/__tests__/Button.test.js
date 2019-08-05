/* eslint-disable no-console */
import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Button from "../Button";

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

const handleClick = jest.fn();

console.error = jest.fn();

test("<Button /> with no props", () => {
  render(<Button />);
  expect(console.error).toHaveBeenCalled();
});

test("<Button /> with props", () => {
  const { getByText } = render(
    <Button handleClick={handleClick} value={"0"} />
  );
  expect(console.error).not.toHaveBeenCalled();
  expect(getByText("0").textContent).toBe("0");

  fireEvent.click(getByText("0"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

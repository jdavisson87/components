import React from "react";
import { render, cleanup } from "@testing-library/react";
import ClearButton from "../ClearButton";

afterEach(cleanup);

const handleClick = jest.fn();

test("<ClearButton />", () => {
  const { getByText } = render(<ClearButton clear={handleClick} />);
  expect(getByText("Clear")).toBeTruthy();
});

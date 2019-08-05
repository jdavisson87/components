import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import ClearButton from "../ClearButton";

afterEach(cleanup);

const handleClick = jest.fn();

test("<ClearButton />", () => {
  const { getByText } = render(<ClearButton clear={handleClick} />);
  expect(getByText("Clear").textContent).toBe("Clear");

  fireEvent.click(getByText("Clear"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

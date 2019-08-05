import React from "react";
import { render, cleanup } from "@testing-library/react";
import Calculator from "../Calculator";

afterEach(cleanup);

test("<Calculator />", () => {
  const { getAllByTestId } = render(<Calculator />);
  expect(getAllByTestId("button").length).toBe(16);
  expect(getAllByTestId("number-display").length).toBe(1);
  expect(getAllByTestId("clear").length).toBe(1);
});

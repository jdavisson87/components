import React from "react";
import { render, cleanup } from "@testing-library/react";
import Display from "../Display";

afterEach(cleanup);

test("<Display />", () => {
  const { getByText } = render(<Display output={"0"} />);
  expect(getByText("0")).toBeTruthy();
});

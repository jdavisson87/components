/* eslint-disable no-console */
import React from "react";
import { render, cleanup } from "@testing-library/react";
import CustomizedTabs from "./CustomizedTabs";

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

test("<CustomizedTabs /> with no props ", () => {
  render(<CustomizedTabs />);
});

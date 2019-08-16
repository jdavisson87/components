/* eslint-disable no-console */
import React from "react";
import { render, cleanup } from "@testing-library/react";
import ListContainer from "../ListContainer";

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

test("<ListContainer/> w/ no props", () => {
  expect(() => {
    render(<ListContainer />);
  }).toThrow("Cannot convert undefined or null to object");
});

/* eslint-disable no-console */
import React from "react";
import { render, cleanup } from "@testing-library/react";
import ListFilter from "../ListFilter";

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

test("<ListFilter /> with no props", () => {
  expect(() => {
    render(<ListFilter />);
  }).toThrow();
});

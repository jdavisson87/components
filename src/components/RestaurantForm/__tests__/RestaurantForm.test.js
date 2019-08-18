import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import RestaurantForm from "../RestaurantForm";

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

test("<RestaurantForm/>", () => {
  const { getByTestId } = render(<RestaurantForm />);
  expect(getByTestId("form-title").textContent).toBe("Restaurant Form");
  expect(getByTestId("restaurant-form")).toBeTruthy();
  expect(getByTestId("submitBtn")).toBeTruthy();
});

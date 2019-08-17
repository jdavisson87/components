import React from "react";
import { render, cleanup } from "@testing-library/react";
import RestaurantForm from "../RestaurantForm";

afterEach(cleanup);

test("<RestaurantForm/>", () => {
  const { getByTestId } = render(<RestaurantForm />);
  expect(getByTestId("form-title").textContent).toBe("User Form");
});

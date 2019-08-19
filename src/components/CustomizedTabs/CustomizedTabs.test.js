/* eslint-disable no-console */
import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import CustomizedTabs from "./CustomizedTabs";

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

const TabInfo = {
  tabs: {
    tab1: {
      title: "tab1",
      name: "tab 1",
      content: "this is tab 1 content"
    },
    tab2: {
      title: "tab2",
      name: "tab 2",
      content: "this is tab 2 content"
    },
    tab3: {
      title: "tab3",
      name: "tab 3",
      content: "this is tab 3 content"
    }
  }
};

console.error = jest.fn();

test("<CustomizedTabs /> with no props ", () => {
  const { getByTestId } = render(<CustomizedTabs />);
  expect(getByTestId("loading")).toBeTruthy();
});

test("<CustomizedTabs /> with props", () => {
  const { queryByTestId, getByTestId } = render(
    <CustomizedTabs TabInfo={TabInfo} />
  );
  expect(queryByTestId("loading")).toBeFalsy();
  expect(getByTestId("no-content").textContent).toBe("No tab selected");
  fireEvent.click(getByTestId("tab1"));
  expect(getByTestId("active-content").textContent).toBe(
    "this is tab 1 content"
  );
  fireEvent.click(getByTestId("tab2"));
  expect(getByTestId("active-content").textContent).not.toBe(
    "this is tab 1 content"
  );
  expect(getByTestId("active-content").textContent).toBe(
    "this is tab 2 content"
  );
});

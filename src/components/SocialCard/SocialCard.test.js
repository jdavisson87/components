import React from "react";
import { render, cleanup } from "@testing-library/react";
import SocialCard from "./SocialCard";

afterEach(cleanup);

const SocialInfo = {
  name: "John Smith",
  title: "Social Card",
  email: "JohnSmith@gmail.com",
  phone: "(123) 456 - 7890",
  linkedIn: "www.linkedIn.com",
  position: "Developer",
  github: "www.github.com",
  img: "www.image.com"
};

test("<SocialCard />", () => {
  const { getByTestId, queryByTestId } = render(
    <SocialCard SocialInfo={SocialInfo} />
  );
  expect(getByTestId("name").textContent).toBe("John Smith");
  expect(queryByTestId("linkedIn")).toBeFalsy();

  //need to click the footer to flip the card, and test to make sure the social network information is showing
});

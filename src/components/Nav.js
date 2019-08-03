import React from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

export default function Nav() {
  return (
    <NavBar>
      <LinkCtr>
        <NavLink to="/">
          <LinkText>Home</LinkText>
        </NavLink>
      </LinkCtr>
      <LinkCtr>
        <NavLink to="/components">
          <LinkText>Components</LinkText>
        </NavLink>
      </LinkCtr>
    </NavBar>
  );
}

const NavBar = styled.div`
  display: flex;
  justify-content: left;
  width: 100%;
  padding: 15px;
  margin-left: 50px;
`;

const LinkCtr = styled.div`
  -o-transition: 1s;
  -ms-transition: 1s;
  -moz-transition: 1s;
  -webkit-transition: 1s;
  border-radius: 5px;
  margin: 7px;
  & > a {
    text-decoration: none;
    color: black;
    :hover {
      color: white;
    }
  }
  :hover {
    background: black;
    cursor: pointer;
  }
`;

const LinkText = styled.p`
  font-size: 25px;
  font-weight: 100;
  font-family: sans-serif;
  -o-transition: 0.7s;
  -ms-transition: 0.7s;
  -moz-transition: 0.7s;
  -webkit-transition: 0.7s;
  margin: 0;
  padding: 8px;
`;

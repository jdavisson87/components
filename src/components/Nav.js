import React from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

export default function Nav() {
  return (
    <NavBar>
      <LinkCtr>
        <Links>
          <NavLink to="/">
            <LinkText>Home</LinkText>
          </NavLink>
        </Links>
        <Links>
          <NavLink to="/components">
            <LinkText>Components</LinkText>
          </NavLink>
        </Links>
      </LinkCtr>
      <LogoCtr>
        <Logo src={require("../images/Logo.png")} />
      </LogoCtr>
    </NavBar>
  );
}

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 15px;
`;

const LinkCtr = styled.div`
  display: flex;
  width: 270px;
`;

const Links = styled.div`
  -o-transition: 1s;
  -ms-transition: 1s;
  -moz-transition: 1s;
  -webkit-transition: 1s;
  border-radius: 5px;
  margin: 7px;
  width: auto;
  height: 46px;
  & > a {
    text-decoration: none;
    color: black;
    :hover {
      color: #9ed2ff;
    }
  }
  :hover {
    background: #00274a;
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

const LogoCtr = styled.div``;

const Logo = styled.img`
  max-width: 120px;
  max-height: 120px;
  width: auto;
  height: auto;
  margin-right: 20px;
`;

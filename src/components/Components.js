import React from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import ComponentLink from "./ComponentLink";

export default function Components(props) {
  const { LinkInfo } = props;
  return (
    <ListCtr>
      {LinkInfo.map(info => {
        return (
          <NavLink to={`/components/${info.name}`} key={info.name}>
            <ComponentLink info={info} />
          </NavLink>
        );
      })}
    </ListCtr>
  );
}

const ListCtr = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 16px 50px 0px;
  & > a {
    text-decoration: none;
    color: black;
  }
`;

import React from "react";
import styled from "@emotion/styled";
import ListItem from "./ListItem";

export default function ListContainer({ players }) {
  return (
    <ListCtr>
      <ColumnCtr>
        <TitleCtr width={"350px"}>
          <NameTitle>Name</NameTitle>
        </TitleCtr>
        <TitleCtr width={"100px"}>
          <ColumnTitles>Number</ColumnTitles>
        </TitleCtr>
        <TitleCtr width={"150px"}>
          <ColumnTitles>Position</ColumnTitles>
        </TitleCtr>
        <TitleCtr width={"150px"}>
          <ColumnTitles>Age</ColumnTitles>
        </TitleCtr>
      </ColumnCtr>
      {Object.keys(players).map(player => (
        <ListItem player={players[player]} key={player} />
      ))}
    </ListCtr>
  );
}

const ListCtr = styled.ul`
  width: 870px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ColumnCtr = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const TitleCtr = styled.div`
  padding: 15px;
  background: lightgrey;
  width: ${props => props.width};
`;

const NameTitle = styled.h3`
  margin: 0;
  color: rgb(0, 34, 68);
  text-align: left;
`;

const ColumnTitles = styled.h3`
  margin: 0;
  color: rgb(0, 34, 68);
  text-align: center;
`;

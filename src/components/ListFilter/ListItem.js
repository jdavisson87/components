import React from "react";
import styled from "@emotion/styled";

export default function ListItem({ player }) {
  return (
    <List>
      <NameColumn>
        <Info>{player.name}</Info>
      </NameColumn>
      <NumberColumn>
        <Info>{player.number}</Info>
      </NumberColumn>
      <AlternateColumn>
        <Info>{player.position}</Info>
      </AlternateColumn>
      <AlternateColumn>
        <Info>{player.age}</Info>
      </AlternateColumn>
    </List>
  );
}

const List = styled.li`
  display: flex;
`;

const NameColumn = styled.div`
  width: 380px;
  text-align: left;
`;

const NumberColumn = styled.div`
  width: 130px;
  text-align: center;
`;

const AlternateColumn = styled.div`
  width: 180px;
  text-align: center;
`;

const Info = styled.p`
  margin: 0;
  color: rgb(0, 34, 68);
  font-weight: bolder;
  font-size: 20px;
  padding: 10px;
`;

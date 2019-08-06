import React from "react";
import styled from "@emotion/styled";

export default function ListFilter() {
  return (
    <ListFilterCtr>
      <ComponentTitle>List Filter Component</ComponentTitle>
      <InputCtr>
        <FilterInputs placeholder={"filter by"} />
        <FilterInputs placeholder={"filter by"} />
        <FilterInputs placeholder={"filter by"} />
      </InputCtr>
      <HeaderCtr>
        <p>Column Names</p>
      </HeaderCtr>
      <ListCtr>
        <p>List</p>
      </ListCtr>
    </ListFilterCtr>
  );
}

const ListFilterCtr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
`;

const ComponentTitle = styled.h2`
  margin: 0;
`;

const InputCtr = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

const FilterInputs = styled.input`
  width: 200px;
  height: 24px;
  margin: 20px 20px;
  border: none;
  border-radius: 5px;
  font-weight: bolder;
  font-size: 18px;
  color: blue;
  padding: 5px 0px 5px 10px;
  background: lightgrey;
  :focus {
    outline: none;
  }
  :active {
    outline: none;
  }
`;

const HeaderCtr = styled.div`
  background: red;
`;

const ListCtr = styled.div`
  background: yellow;
`;

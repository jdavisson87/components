import React from "react";
import styled from "@emotion/styled";

export default function ListFilter() {
  return (
    <ListFilterCtr>
      <ComponentTitle>List Filter Component</ComponentTitle>
      <InputCtr>
        <SelectorCtr>
          <SelectorTitle>Filter By:</SelectorTitle>
          <FilterInputs placeholder={"Name"} />
        </SelectorCtr>
        <SelectorCtr>
          <SelectorTitle>Position</SelectorTitle>
          <FilterSelector>
            <option>All</option>
            <option>QB</option>
            <option>RB</option>
            <option>FB</option>
            <option>WR</option>
            <option>TE</option>
            <option>OL</option>
            <option>DE</option>
            <option>DT</option>
            <option>LB</option>
            <option>CB</option>
            <option>S</option>
            <option>P</option>
            <option>K</option>
            <option>LS</option>
          </FilterSelector>
        </SelectorCtr>
        <SelectorCtr>
          <SelectorTitle>Min/Max Age</SelectorTitle>
          <MinMaxCtr>
            <FilterSelector>
              <option>Min</option>
              <option>21</option>
            </FilterSelector>
            <FilterSelector>
              <option>Max</option>
              <option>37</option>
            </FilterSelector>
          </MinMaxCtr>
        </SelectorCtr>
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
  height: 150px;
`;

const ComponentTitle = styled.h2`
  margin: 0;
`;

const InputCtr = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

const FilterInputs = styled.input`
  width: 200px;
  height: 24px;
  margin: 5px 20px;
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

const SelectorCtr = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 20px;
`;

const MinMaxCtr = styled.div`
  display: flex;
  width: 100%;
  & > select {
    width: 90px;
  }
`;

const SelectorTitle = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: bolder;
`;

const FilterSelector = styled.select`
  height: 34px;
  font-size: 18px;
  margin: 5px;
  background: lightgrey;
`;

const HeaderCtr = styled.div`
  background: red;
  width: 100%;
`;

const ListCtr = styled.div`
  background: yellow;
`;
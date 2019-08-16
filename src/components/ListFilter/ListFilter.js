import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import ListContainer from "./ListContainer";

const ListFilter = ({ PlayerInfo }) => {
  const { players } = PlayerInfo;
  const [showingPlayers, setShowingPlayers] = useState(players);
  const [position, setPosition] = useState("all");
  const [nameSearch, setNameSearch] = useState(Object.keys(players));
  const [search, setSearch] = useState("");
  const [positionSearch, setPositionSearch] = useState(Object.keys(players));
  const [minAge, setMinAge] = useState("0");
  const [maxAge, setMaxAge] = useState("40");

  const nameFilter = value => {
    if (value) {
      let newList = [];
      Object.keys(players).forEach(player => {
        if (players[player].name.toLowerCase().includes(value) === true) {
          newList.push(player);
        }
      });
      setNameSearch(newList);
    } else {
      setNameSearch(Object.keys(players));
    }
    setSearch(value);
  };

  const positionFilter = value => {
    if (value === "all") {
      setPositionSearch(Object.keys(players));
    } else {
      let newList = [];
      Object.keys(players).forEach(player => {
        if (players[player].position === value) {
          newList.push(player);
        }
      });
      setPositionSearch(newList);
    }
    setPosition(value);
  };

  const clear = () => {
    setPosition("all");
    setSearch("");
    setMinAge("0");
    setMaxAge("40");
    setNameSearch(Object.keys(players));
    setPositionSearch(Object.keys(players));
    setShowingPlayers(players);
  };

  useEffect(() => {
    let newList = {};
    Object.keys(players).forEach(player => {
      if (positionSearch.includes(player) && nameSearch.includes(player)) {
        if (
          players[player].age >= parseInt(minAge) &&
          players[player].age <= parseInt(maxAge)
        ) {
          newList[player] = players[player];
        }
      }
    });
    setShowingPlayers(newList);
  }, [nameSearch, positionSearch, players, minAge, maxAge]);

  return (
    <ListFilterCtr>
      <HeaderCtr>
        <ComponentTitle>List Filter Component</ComponentTitle>
        <InputCtr>
          <SelectorCtr>
            <SelectorTitle>Filter By:</SelectorTitle>
            <FilterInputs
              type="text"
              onChange={e => nameFilter(e.target.value)}
              placeholder={"Name"}
              value={search}
            />
          </SelectorCtr>
          <SelectorCtr>
            <SelectorTitle>Position</SelectorTitle>
            <FilterSelector
              onChange={e => positionFilter(e.target.value)}
              value={position}
            >
              <option value="all">All</option>
              <option value="QB">QB</option>
              <option value="RB">RB</option>
              <option value="FB">FB</option>
              <option value="WR">WR</option>
              <option value="TE">TE</option>
              <option value="OL">OL</option>
              <option value="DE">DE</option>
              <option value="DT">DT</option>
              <option value="LB">LB</option>
              <option value="CB">CB</option>
              <option value="S">S</option>
              <option value="P">P</option>
              <option value="K">K</option>
              <option value="LS">LS</option>
            </FilterSelector>
          </SelectorCtr>
          <SelectorCtr>
            <SelectorTitle>Min/Max Age</SelectorTitle>
            <MinMaxCtr>
              <FilterSelector
                onChange={e => setMinAge(e.target.value)}
                value={minAge}
              >
                <option value="0">Min</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
                <option value="32">32</option>
                <option value="33">33</option>
                <option value="34">34</option>
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
              </FilterSelector>
              <FilterSelector
                onChange={e => setMaxAge(e.target.value)}
                value={maxAge}
              >
                <option value="40">Max</option>
                <option value="37">37</option>
                <option value="36">36</option>
                <option value="35">35</option>
                <option value="34">34</option>
                <option value="33">33</option>
                <option value="32">32</option>
                <option value="31">31</option>
                <option value="30">30</option>
                <option value="29">29</option>
                <option value="28">28</option>
                <option value="27">27</option>
                <option value="26">26</option>
                <option value="25">25</option>
                <option value="24">24</option>
                <option value="23">23</option>
                <option value="22">22</option>
                <option value="21">21</option>
              </FilterSelector>
            </MinMaxCtr>
          </SelectorCtr>
          <ClearBtn onClick={() => clear()}>Clear</ClearBtn>
        </InputCtr>
      </HeaderCtr>
      <ListContainer players={showingPlayers} />
    </ListFilterCtr>
  );
};

export default ListFilter;

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
  color: rgb(0, 34, 68);
  padding: 5px 0px 5px 10px;
  background: rgb(134, 147, 151);
  ::placeholder {
    color: lightgrey;
  }
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

const ClearBtn = styled.button`
  width: 100px;
  height: 34px;
  margin-top: 20px;
  font-size: 18px;
  color: rgb(0, 34, 68);
  font-weight: bolder;
  background: rgb(134, 147, 151);
  border: none;
  border-radius: 5px;
  :hover {
    cursor: pointer;
    background: lightgrey;
  }
  :focus {
    outline: none;
  }
  :active {
    outline: none;
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
  background: rgb(134, 147, 151);
  color: rgb(0, 34, 68);
  font-weight: bolder;
  :focus {
    outline: none;
  }
  :active {
    outline: none;
  }
`;

const HeaderCtr = styled.div`
  width: 100%;
`;

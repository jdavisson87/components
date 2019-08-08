import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import ListContainer from "./ListContainer";

const ListFilter = ({ PlayerInfo }) => {
  const { players } = PlayerInfo;
  const [showingPlayers, setShowingPlayers] = useState(players);
  const [filteredNames, setFilteredNames] = useState(Object.keys(players));
  const [filteredPositions, setFilteredPositions] = useState(
    Object.keys(players)
  );
  const [position, setPosition] = useState("all");
  const [nameSearch, setNameSearch] = useState("");

  useEffect(() => {
    if (nameSearch) {
      let newList = [];
      Object.keys(players)
        .filter(player => {
          if (
            players[player].name.toLowerCase().includes(nameSearch) === true
          ) {
            return player;
          }
        })
        .forEach(player => newList.push(player));
      setFilteredNames(newList);
    } else {
      setFilteredNames(Object.keys(players));
    }

    setShowingPlayers(
      // filteredNames.filter(key => filteredPositions.includes(key) === true)
      console.log(filteredPositions)
    );
  }, [nameSearch]);

  useEffect(() => {
    if (position !== "all") {
      let newList = {};
      Object.keys(players)
        .filter(player => {
          if (players[player].position === position) {
            return player;
          }
        })
        .forEach(player => newList.push(player));
      setFilteredPositions(newList);
    } else {
      setFilteredPositions(players);
    }
    setShowingPlayers();
    // filteredNames.filter(key => filteredPositions.includes(key) === true)
  }, [position]);

  return (
    <ListFilterCtr>
      <HeaderCtr>
        <ComponentTitle>List Filter Component</ComponentTitle>
        <InputCtr>
          <SelectorCtr>
            <SelectorTitle>Filter By:</SelectorTitle>
            <FilterInputs
              type="text"
              onChange={e => setNameSearch(e.target.value)}
              placeholder={"Name"}
            />
          </SelectorCtr>
          <SelectorCtr>
            <SelectorTitle>Position</SelectorTitle>
            <FilterSelector
              onChange={e => setPosition(e.target.value)}
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
              <FilterSelector>
                <option>Min</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
                <option>32</option>
                <option>33</option>
                <option>34</option>
                <option>35</option>
                <option>36</option>
                <option>37</option>
              </FilterSelector>
              <FilterSelector>
                <option>Max</option>
                <option>37</option>
                <option>36</option>
                <option>35</option>
                <option>44</option>
                <option>33</option>
                <option>32</option>
                <option>31</option>
                <option>30</option>
                <option>29</option>
                <option>28</option>
                <option>27</option>
                <option>26</option>
                <option>25</option>
                <option>24</option>
                <option>23</option>
                <option>22</option>
                <option>21</option>
              </FilterSelector>
            </MinMaxCtr>
          </SelectorCtr>
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
`;

const HeaderCtr = styled.div`
  width: 100%;
`;

import React from "react";
import styled from "@emotion/styled";

export default function CustomizedTabs(props) {
  const { title, tabs } = props.TabInfo;
  return (
    <CustomizedTabCtr>
      <h1>{title}</h1>
      <TabCtr>
        {Object.keys(tabs).map(tab => {
          const { name } = tabs[tab];
          return (
            <Tab key={name}>
              <TabTitle>{name}</TabTitle>
              <BottomBorder />
            </Tab>
          );
        })}
      </TabCtr>
    </CustomizedTabCtr>
  );
}

const CustomizedTabCtr = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const TabCtr = styled.div`
  display:flex;
}
`;

const BottomBorder = styled.div`
  height: 2px;
  background: lightgrey;
  transition: all 0.7s linear;

  }
`;

const TabTitle = styled.p`
  margin: 2px 15px;
  font-size: 20px;
  font-weight: bolder;
`;

const Tab = styled.button`
  border: none;
  background: none;
  height: 50px;
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
  transition: all 0.7s linear;
  padding: 15px 0px;
  :hover {
    color: blue;
    cursor: pointer;
  }
  :focus {
    outline: none;
    color: blue;
    & > div {
      background: blue;
    }
  }
`;

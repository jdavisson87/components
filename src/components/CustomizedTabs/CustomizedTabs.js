import React from "react";
import styled from "@emotion/styled";

export default function CustomizedTabs(props) {
  const { title } = props.TabInfo;
  return (
    <CustomizedTabCtr>
      <h1>{title}</h1>
      <TabCtr>
        <Tab>Customized Tabs</Tab>
      </TabCtr>
    </CustomizedTabCtr>
  );
}

const CustomizedTabCtr = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const TabCtr = styled.div`
  height: 50px;
  background: grey;
`;

const Tab = styled.button`
  border: none;
  background: none;
`;

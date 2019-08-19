import React, { useState } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const CustomizedTabs = ({ TabInfo }) => {
  const [activeTab, isActiveTab] = useState(null);
  if (!TabInfo) return <p data-testId="loading">Loading....</p>;
  const { tabs } = TabInfo;
  return (
    <CustomizedTabCtr>
      <h1>Customized Tabs</h1>
      <TabCtr>
        <Tabs>
          {Object.keys(tabs).map(tab => {
            const { name, title } = tabs[tab];
            return (
              <Tab
                data-testId={`${title}`}
                key={name}
                onClick={() => isActiveTab(title)}
              >
                <TabTitle>{name}</TabTitle>
                <BottomBorder />
              </Tab>
            );
          })}
        </Tabs>
        <ContentCtr>
          {activeTab === null ? (
            <p data-testId="no-content">No tab selected</p>
          ) : (
            <p data-testId="active-content">{tabs[activeTab].content}</p>
          )}
        </ContentCtr>
      </TabCtr>
    </CustomizedTabCtr>
  );
};

CustomizedTabs.propTypes = {
  TabInfo: PropTypes.shape({
    link: PropTypes.shape({
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired,
    tabs: PropTypes.shape({
      tab1: PropTypes.shape({
        content: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      }).isRequired,
      tab2: PropTypes.shape({
        content: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      }).isRequired,
      tab3: PropTypes.shape({
        content: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};

export default CustomizedTabs;

const CustomizedTabCtr = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const TabCtr = styled.div`
  display:flex;
  flex-direction: column;
}
`;

const Tabs = styled.div`
  display: flex;
`;

const BottomBorder = styled.div`
  height: 2px;
  background: black;
  transition: all 0.5s linear;
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
    color: #2d79c6;
    cursor: pointer;
  }
  :focus {
    outline: none;
    color: #2d79c6;
    & > div {
      background: #9ed2ff;
    }
  }
`;

const ContentCtr = styled.div`
  width: 100%;
`;

import React, { useState } from "react";
import styled from "@emotion/styled";
import { FaAngleUp } from "react-icons/fa";
import { IconContext } from "react-icons";

const SectionList = ({ section, listType, list }) => {
  const [isToggled, setToggle] = useState(true);
  return (
    <SectionCtr>
      <HeaderCtr>
        <Head>{section}</Head>
        <ExpandBtnCtr toggle={isToggled}>
          <ExpandBtn onClick={() => setToggle(!isToggled)}>
            <IconContext.Provider value={{ size: "20px", color: "grey" }}>
              <FaAngleUp />
            </IconContext.Provider>
          </ExpandBtn>
        </ExpandBtnCtr>
      </HeaderCtr>
      {isToggled && (
        <ListSection listType={listType}>
          {list.map((item, index) => (
            <li key={`${section}${index}`}>{item}</li>
          ))}
        </ListSection>
      )}
    </SectionCtr>
  );
};

export default SectionList;

const SectionCtr = styled.div`
  font-family: sans-serif;
  font-weight: 300;
`;

const HeaderCtr = styled.div`
  width: 600px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px rgb(229, 229, 229);
  border-top: solid 1px rgb(229, 229, 229);
  background: rgb(237, 237, 237);
  height: 50px;
`;

const Head = styled.p`
  margin: 0;
  padding: 40px;
  font-size: 16px;
`;
const ExpandBtnCtr = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 10px;
  transform: ${props => (props.toggle ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.2s linear;
`;

const ExpandBtn = styled.button`
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  :hover {
    cursor: pointer;
    background: rgb(175, 175, 175);
  }
  :active {
    outline: none;
  }
  :focus {
    outline: none;
  }
`;

const ListSection = styled.ol`
  list-style: ${props => (props.listType === "square" ? "square" : "number")};
  width: 538px;
  margin: 0;
  padding: 5px 0px 10px 60px;
  & > li {
    font-size: 20px;
    padding: 8px 8px 0px 0px;
  }
`;

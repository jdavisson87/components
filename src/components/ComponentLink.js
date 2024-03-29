import React from "react";
import styled from "@emotion/styled";

export default function ComponentLink(props) {
  const { name, img, title } = props.info;
  return (
    <Card>
      <ImgCtr>
        <ComponentImg src={require(`./${name}/${img}`)} />
      </ImgCtr>
      <Title>{title}</Title>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  width: 250px;
  height: 275px;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin: 10px;
  -o-transition: 0.7s;
  -ms-transition: 0.7s;
  -moz-transition: 0.7s;
  -webkit-transition: 0.7s;
  box-shadow: 2px 4px #ccc;
  :hover {
    background: #00274a;
    -webkit-box-shadow: 3px 3px 5px 6px #ccc;
    -moz-box-shadow: 3px 3px 5px 6px #ccc;
    box-shadow: 3px 3px 5px 6px #ccc;
    color: #9ed2ff;
  }
`;

const ImgCtr = styled.div`
  display: flex;
  height: 200px;
  max-height: 200px;
  justify-content: center;
`;

const ComponentImg = styled.img`
  position: absolute;
  top: 20px;
  align-self: center;
  margin-top: 10px;
  border-radius: 5px;
  max-height: 200px;
  max-width: 200px;
  width: auto;
  height: auto;
`;

const Title = styled.p`
  position: absolute;
  font-size: 18px;
  font-weight: bolder;
  bottom: 0px;
  text-align: center;
  width: 100%;
`;

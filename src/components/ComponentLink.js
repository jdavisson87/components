import React from "react";
import styled from "@emotion/styled";

export default function ComponentLink(props) {
  const { name, img } = props.info;
  return (
    <Card>
      <ComponentImg src={img} />
      <p>{name}</p>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  width: 250px;
  border-radius: 10px;
  margin: 10px;
  -o-transition: 0.7s;
  -ms-transition: 0.7s;
  -moz-transition: 0.7s;
  -webkit-transition: 0.7s;
  :hover {
    background: rgb(214, 230, 255);
    -webkit-box-shadow: 3px 3px 5px 6px #ccc;
    -moz-box-shadow: 3px 3px 5px 6px #ccc;
    box-shadow: 3px 3px 5px 6px #ccc;
  }
`;

const ComponentImg = styled.img`
  width: 200px;
  align-self: center;
  margin-top: 10px;
`;

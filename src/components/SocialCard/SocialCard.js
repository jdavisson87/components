import React, { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import styled from "@emotion/styled";
import Data from "../../utils/_Data.json";

export default function SocialCard() {
  const [socialInfo, setSocialInfo] = useState({});
  const fetchSocialInfo = async () => {
    setSocialInfo(Data.SocialCard);
  };

  useEffect(() => {
    fetchSocialInfo();
  }, []);

  const {
    name,
    title,
    email,
    phone,
    linkedIn,
    position,
    github,
    img
  } = socialInfo;

  const [isFlipped, setFlipped] = useState(false);

  const transition = useTransition(isFlipped, null, {
    from: {
      position: "absolute",
      transform: "rotateY(180deg)",
      opacity: 0
    },
    enter: {
      transform: "rotateY(0deg)",
      opacity: 1
    },
    leave: {
      transform: "rotateY(180deg)",
      opacity: 0
    }
  });

  return (
    <SocialCardCtr>
      <Title>{title}</Title>
      {transition.map(({ item, key, props }) =>
        item ? (
          <animated.div key={key} style={props}>
            <CardCtr onClick={() => setFlipped(!isFlipped)}>
              <p>False</p>
            </CardCtr>
          </animated.div>
        ) : (
          <animated.div key={key} style={props}>
            <CardCtr onClick={() => setFlipped(!isFlipped)}>
              <InfoCtr>
                <AvatarPic src={img} />
                <PersonalInfo>
                  <Name>{name}</Name>
                  <Position>{position}</Position>
                </PersonalInfo>
              </InfoCtr>
            </CardCtr>
          </animated.div>
        )
      )}
    </SocialCardCtr>
  );
}

const SocialCardCtr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: bolder;
`;

const CardCtr = styled.div`
  display: flex;
  width: 600px;
  border: 1px solid black;
  border-radius: 5px;
  transform-style: preserve-3d;
  transition: all 0.7s linear;
  margin-top: 70px;
  :hover {
    cursor: pointer;
    background: rgb(214, 230, 255);
    -webkit-box-shadow: 3px 3px 5px 6px #ccc;
    -moz-box-shadow: 3px 3px 5px 6px #ccc;
    box-shadow: 3px 3px 5px 6px #ccc;
  }
`;

const AvatarPic = styled.img`
  width: 100px;
  border-radius: 50px;
  margin: 5px;
`;

const InfoCtr = styled.div`
  display: flex;
  padding: 7px;
`;

const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  & > p {
    margin: 0;
  }
`;

const Name = styled.p`
  font-weight: bolder;
  font-size: 16px;
`;

const Position = styled.p`
  font-size: 10px;
  font-weight: bold;
`;

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
      opacity: 0,
      transition: "all 0.5s linear"
    },
    enter: {
      transform: "rotateY(0deg)",
      opacity: 1,
      transition: "all 0.5s linear"
    },
    leave: {
      transform: "rotateY(180deg)",
      opacity: 0,
      transition: "all 0.5s linear"
    }
  });

  return (
    <SocialCardCtr>
      <Title>{title}</Title>
      {transition.map(({ item, key, props }) =>
        item ? (
          <animated.div key={key} style={props}>
            <CardCtr>
              <SocialCardHeader>
                <Name>Social Network Links</Name>
              </SocialCardHeader>
              <SocialMediaCtr>
                <SocialMedia>LinkedIn Website:</SocialMedia>
                <SocialMediaLink href={linkedIn}>{linkedIn}</SocialMediaLink>
                <SocialMedia>GitHub Website:</SocialMedia>
                <SocialMediaLink href={github}>{github}</SocialMediaLink>
              </SocialMediaCtr>
              <Footer onClick={() => setFlipped(!isFlipped)}>
                Click for Personal information
              </Footer>
            </CardCtr>
          </animated.div>
        ) : (
          <animated.div key={key} style={props}>
            <CardCtr>
              <SocialCardHeader>
                <Name>{name}</Name>
              </SocialCardHeader>
              <InfoCtr>
                <AvatarPic src={img} />
                <PersonalInfo>
                  <Position>{position}</Position>
                  <Phone>{phone}</Phone>
                  <Email href={`mailto:${email}`}>{email}</Email>
                </PersonalInfo>
              </InfoCtr>
              <Footer onClick={() => setFlipped(!isFlipped)}>
                Click here for Social Network information
              </Footer>
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

const SocialCardHeader = styled.div`
  background: blue;
  width: 100%;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: bolder;
`;

const CardCtr = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 200px;
  border: 1px solid black;
  border-radius: 5px;
  transform-style: preserve-3d;
  transition: all 0.7s linear;
  margin-top: 70px;
  :hover {
    background: rgb(214, 230, 255);
    -webkit-box-shadow: 3px 3px 5px 6px #ccc;
    -moz-box-shadow: 3px 3px 5px 6px #ccc;
    box-shadow: 3px 3px 5px 6px #ccc;
  }
`;

const AvatarPic = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin: 5px;
  box-shadow: 5px 10px 8px #888888;
`;

const InfoCtr = styled.div`
  display: flex;
  padding: 7px;
`;

const SocialMediaCtr = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7px;
`;

const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  & > p {
    margin: 0;
  }
`;

const Name = styled.p`
  font-weight: bolder;
  font-size: 20px;
  margin: 10px;
`;

const Position = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const Phone = styled.p`
  font-size: 16px;
  font-weight: less;
`;

const Email = styled.a`
  font-weight: bolder;
`;

const Footer = styled.p`
  width: 100%;
  margin: 0;
  font-weight: bolder;
  position: absolute;
  bottom: 5px;
  text-align: center;
  :hover {
    cursor: pointer;
  }
`;

const SocialMedia = styled.p`
  font-weight: bolder;
  margin: 2px 3px;
`;

const SocialMediaLink = styled.a`
  font-weight: less;
  margin: 0px 5px;
`;

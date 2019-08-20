import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import SectionList from "./SectionList";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IconContext } from "react-icons";

const RecipeCard = ({ RecipeInfo }) => {
  const [isLiked, setLiked] = useState(false);
  const {
    name,
    image,
    posted,
    prep,
    cook,
    difficulty,
    servings,
    favorite,
    ingredients,
    steps
  } = RecipeInfo;

  useEffect(() => {
    setLiked(favorite);
  }, [favorite]);

  return (
    <RecipeCtr>
      <TitleCtr>
        <Title>Recipe</Title>
      </TitleCtr>
      <FoodImg src={image} />
      <RecipeNameCtr>
        <RecipeName>{name}</RecipeName>
        <PostDate>Recipe Entered: {posted}</PostDate>
        <IconContext.Provider value={{ size: "2em", color: "red" }}>
          {isLiked === true ? (
            <LikeButton onClick={() => setLiked(!isLiked)}>
              <FaHeart />
            </LikeButton>
          ) : (
            <LikeButton onClick={() => setLiked(!isLiked)}>
              <FaRegHeart />
            </LikeButton>
          )}
        </IconContext.Provider>
      </RecipeNameCtr>
      <TimesCtr>
        <MiniTimesCtr>
          <MiniTimesTitle>Prep Time:</MiniTimesTitle>
          <MiniTimesDetail>{prep}</MiniTimesDetail>
        </MiniTimesCtr>
        <MiniTimesCtr>
          <MiniTimesTitle>Difficulty:</MiniTimesTitle>
          <MiniTimesDetail>{difficulty}</MiniTimesDetail>
        </MiniTimesCtr>
        <MiniTimesCtr>
          <MiniTimesTitle>Cook Time:</MiniTimesTitle>
          <MiniTimesDetail>{cook}</MiniTimesDetail>
        </MiniTimesCtr>
        <MiniTimesCtr>
          <MiniTimesTitle>Servings:</MiniTimesTitle>
          <MiniTimesDetail>
            {servings === 1 ? `1 Serving` : `${servings} Servings`}
          </MiniTimesDetail>
        </MiniTimesCtr>
      </TimesCtr>
      <SectionList section="INGREDIENTS" listType="square" list={ingredients} />
      <SectionList section="INSTRUCTIONS" listType="number" list={steps} />
      <BtnCtr>
        <RecipeButtons color={"red"}>Remove Recipe</RecipeButtons>
        <RecipeButtons color={"rgb(66, 134, 244)"}>Add Notes</RecipeButtons>
        <RecipeButtons color={"green"}>View Notes</RecipeButtons>
      </BtnCtr>
    </RecipeCtr>
  );
};

export default RecipeCard;

RecipeCard.propTypes = {
  RecipeInfo: PropTypes.object.isRequired
};

const RecipeCtr = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 40px;
  border-radius: 10px;
  border: 1px solid rgb(229, 229, 229);
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
  -moz-box-shadow: 3px 3px 5px 6px #ccc;
  box-shadow: 3px 3px 5px 6px #ccc;
`;

const TitleCtr = styled.div`
  width: 570px;
  padding: 15px;
  background: rgb(66, 134, 244);
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const Title = styled.p`
  font-size: 22px;
  margin: 0;
  color: white;
`;

const FoodImg = styled.img`
  width: 100%;
`;

const RecipeNameCtr = styled.div`
  border-bottom: 1px solid rgb(229, 229, 229);
  text-align: center;
`;
const RecipeName = styled.p`
  margin: 0;
  margin-top: 10px;
  font-size: 22px;
`;
const PostDate = styled.p`
  margin: 0;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 500;
`;

const TimesCtr = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MiniTimesCtr = styled.div`
  width: 45%;
  padding: 10px;
  text-align: center;
`;
const MiniTimesTitle = styled.p`
  font-weight: bold;
  margin: 0;
`;
const MiniTimesDetail = styled.p`
  margin: 0;
`;

const LikeButton = styled.button`
  background: none;
  border: none;
  padding: 10px;
  :hover {
    cursor: pointer;
  }
  :active {
    outline: none;
  }
  :focus {
    outline: none;
  }
`;

const BtnCtr = styled.div`
  display: flex;
  height: 60px;
  justify-content: space-around;
`;

const RecipeButtons = styled.button`
  border: none;
  background: ${props => props.color};
  font-size: 20px;
  height: 40px;
  color: white;
  font-weight: bolder;
  border-radius: 5px;
  margin: 10px;
  :hover {
    cursor: pointer;
  }
  :focus {
    outline: none;
  }
  :active {
    outline: none;
  }
`;

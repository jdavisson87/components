import React from "react";
import styled from "@emotion/styled";

const Home = () => (
  <HomeCtr>
    <Title>Jeffrey Davisson</Title>
    <Job>React Developer</Job>
    <ArticleCtr>
      <ArticleText>
        This is just filler for the moment. I want to see what this looks
        like.This is just filler for the moment. I want to see what this looks
        like.This is just filler for the moment. I want to see what this looks
        like.This is just filler for the moment. I want to see what this looks
        like.This is just filler for the moment. I want to see what this looks
        like.This is just filler for the moment. I want to see what this looks
        like.This is just filler for the moment. I want to see what this looks
        like.This is just filler for the moment. I want to see what this looks
        like.This is just filler for the moment. I want to see what this looks
        like.This is just filler for the moment. I want to see what this looks
        like.This is just filler for the moment. I want to see what this looks
        like.This is just filler for the moment. I want to see what this looks
        like.This is just filler for the moment. I want to see what this looks
        like.
      </ArticleText>
    </ArticleCtr>
  </HomeCtr>
);

export default Home;

const HomeCtr = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  margin: 0;
`;

const Job = styled.h3`
  text-align: center;
  margin: 20px 0 15px 0;
`;

const ArticleCtr = styled.div`
  text-align: justify;
  max-width: 800px;
  width: 75%;
`;

const ArticleText = styled.p`
  margin: 10px 0px;
`;

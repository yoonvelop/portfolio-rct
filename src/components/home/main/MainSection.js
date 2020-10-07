import React from "react";
import styled from "styled-components";
import palette from "../../../lib/styles/palette";
import Button from "../../common/Button";
import { FiArrowRight } from "react-icons/fi";
import BgSection from "../../common/BgSection";

const MainSection = () => {
  return (
    <BgSection bgName="main-bg2">
      <div>
        <Desc>Front-end developer</Desc>
        <Title>
          윤혜빈 <span>입니다.</span>
        </Title>
      </div>
      <Button to="/about">
        About More <FiArrowRight />
      </Button>
    </BgSection>
  );
};

const Title = styled.h1`
  color: ${palette.white};
  font-size: 2.5rem;
  font-weight: 900;
  margin: 0rem 0;

  & > span {
    font-weight: 500;
    font-size: 2.2rem;
  }
`;

const Desc = styled.p`
  color: ${palette.text_gray};
  font-size: 1.7rem;
  font-weight: 500;
  margin: 0;
`;

export default MainSection;

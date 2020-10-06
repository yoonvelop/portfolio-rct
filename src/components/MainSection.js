import React from "react";
import styled from "styled-components";
import palette from "../lib/styles/palette";
import Button from "./common/Button";
import { FiArrowRight } from "react-icons/fi";

const MainSection = () => {
  return (
    <MainBolok>
      <Bg />
      <GradientBox>
        <MainWrap>
          <div>
            <Desc>Front-end developer</Desc>
            <Title>윤혜빈 입니다.</Title>
            <Desc>소개소개</Desc>
          </div>
          <Button to="/about">
            About More <FiArrowRight />
          </Button>
        </MainWrap>
      </GradientBox>
    </MainBolok>
  );
};

const MainBolok = styled.section`
  width: 100%;
  height: 35rem;
  position: relative;
`;

const Bg = styled.div`
  position: absolute;
  background: url("../images/main-bg2.jpg");
  background-size: cover;
  width: 100%;
  height: 100%;
  background-position: center;
`;

const MainWrap = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  height: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GradientBox = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  height: 12rem;
  align-items: center;
  background: linear-gradient(
    360deg,
    rgba(0, 0, 0, 1) 8.98%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const Title = styled.h1`
  color: ${palette.white};
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0rem 0;
`;

const Desc = styled.p`
  color: ${palette.white};
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0;
`;

export default MainSection;

import React from "react";
import styled from "styled-components";
import palette from "../../../lib/styles/palette";
import Button from "../../common/Button";
import { FiArrowRight } from "react-icons/fi";
import BgSection from "../../common/BgSection";

const MainSection = () => {
  return (
    <>
      <BgSection />
      <MainBolok>
        <GradientBox>
          <MainWrap>
            <div>
              <Desc>Front-end developer</Desc>
              <Title>
                윤혜빈 <span>입니다.</span>
              </Title>
            </div>
            <Button to="/about">
              About More <FiArrowRight />
            </Button>
          </MainWrap>
        </GradientBox>
      </MainBolok>
    </>
  );
};

const MainBolok = styled.section`
  width: 100%;
  height: 32rem;
  position: relative;
`;

// const Bg = styled.div`
//   position: absolute;
//   background: url("../images/main-bg2.jpg");
//   background-size: cover;
//   width: 100%;
//   height: 100%;
//   background-position: center;
// `;

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
  height: 15rem;
  align-items: center;
  background: linear-gradient(
    360deg,
    rgba(0, 0, 0, 1) 8.98%,
    rgba(0, 0, 0, 0) 100%
  );
`;

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

import React from "react";
import styled from "styled-components";

const BgSection = ({ bgName, column, children }) => {
  return (
    <>
      <Bg bgName={bgName} />
      <MainBolok>
        <GradientBox>
          <MainWrap column={column}>{children}</MainWrap>
        </GradientBox>
      </MainBolok>
    </>
  );
};
const Bg = styled.div`
  width: 100%;
  height: 32rem;
  position: fixed;
  background: ${(props) => `url("../images/${props.bgName}.jpg")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  top: 0;
  @media only screen and (max-width: 480px) {
    height: 23rem;
  }
`;
const MainBolok = styled.section`
  width: 100%;
  height: 32rem;
  position: relative;
  @media only screen and (max-width: 480px) {
    height: 23rem;
  }
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
  ${(props) =>
    props.column && "flex-direction:column;  align-items: flex-start;"}
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
  @media only screen and (max-width: 480px) {
    height: 8rem;
  }
`;

export default BgSection;

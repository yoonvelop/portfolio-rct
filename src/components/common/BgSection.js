import React from "react";
import styled, { css } from "styled-components";

const BgSection = ({ bgName, children }) => {
  return (
    <>
      <Bg bgName={bgName} />
      <MainBolok>
        <GradientBox>
          <MainWrap>{children}</MainWrap>
        </GradientBox>
      </MainBolok>
    </>
  );
};
const Bg = styled.div`
  width: 100%;
  height: 32rem;
  position: fixed;
  ${(props) =>
    css`
      background: url("../images/${props.bgName}.jpg");
    `}
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  top: 0;
`;
const MainBolok = styled.section`
  width: 100%;
  height: 32rem;
  position: relative;
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
  height: 15rem;
  align-items: center;
  background: linear-gradient(
    360deg,
    rgba(0, 0, 0, 1) 8.98%,
    rgba(0, 0, 0, 0) 100%
  );
`;

export default BgSection;

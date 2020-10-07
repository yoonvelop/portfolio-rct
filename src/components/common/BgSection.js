import React from "react";
import styled from "styled-components";

const BgSection = () => {
  return (
    // <MainBolok>
    <Bg />
    // </MainBolok>
  );
};

// const MainBolok = styled.section`
//   width: 100%;
//   height: 35rem;
//   position: relative;
// `;

const Bg = styled.div`
  width: 100%;
  height: 35rem;
  position: fixed;
  background: url("../images/main-bg2.jpg");
  background-size: cover;
  background-position: center;
  top: 0;
`;

export default BgSection;

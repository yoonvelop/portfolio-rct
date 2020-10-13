import React from "react";
import styled from "styled-components";

const DetailWrap = ({ children, direction }) => {
  return <Wrap direction={direction}>{children}</Wrap>;
};

const Wrap = styled.div`
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;
  padding: 3rem 2rem;
  display: flex;
  align-items: center;
  flex-direction: ${(props) => props.direction};
  overflow: hidden;
  height: 100%;
  @media only screen and (max-width: 600px) {
    padding: 2rem 1rem;
  }
`;
export default DetailWrap;

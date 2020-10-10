import React from "react";
import styled from "styled-components";

const DetailWrap = ({ children, direction }) => {
  return <Wrap direction={direction}>{children}</Wrap>;
};

const Wrap = styled.div`
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: ${(props) => props.direction};
`;
export default DetailWrap;

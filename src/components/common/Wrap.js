import React from "react";
import styled from "styled-components";

const WrapBlock = styled.div`
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;
`;

const Wrap = ({ children }) => {
  return <WrapBlock>{children}</WrapBlock>;
};

export default Wrap;

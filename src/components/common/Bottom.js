import React from "react";
import styled from "styled-components";

const Bottom = () => {
  return <StyledBottom />;
};

const StyledBottom = styled.div`
  height: 10rem;
  @media only screen and (max-width: 850px) {
    height: 6rem;
  }
  @media only screen and (max-width: 600px) {
    height: 3rem;
  }
`;

export default Bottom;

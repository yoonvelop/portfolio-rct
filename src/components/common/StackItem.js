import React from "react";
import styled from "styled-components";

import palette from "../../lib/styles/palette";

const StackItem = ({ stack }) => {
  return <Stack>{stack}</Stack>;
};
const Stack = styled.span`
  font-size: 0.8rem;
  color: #ec5d5c;
  background: ${palette.gray};
  padding: 0.1rem 0.3rem;
  border-radius: 0.2rem;
  margin: 0.2rem;
`;
export default StackItem;

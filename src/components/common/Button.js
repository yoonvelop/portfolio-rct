import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import palette from "../../lib/styles/palette";

const Button = (props) => {
  return props.to ? (
    <StyledLink {...props}>{props.children}</StyledLink>
  ) : (
    <StyledButton {...props}></StyledButton>
  );
};

const buttonStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  background: transparent;
  border: 1px solid ${palette.white};
  border-radius: 2px;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease-in;
  color: ${palette.white};
  cursor: pointer;
  &:hover {
    background: ${palette.white};
    color: ${palette.black};
  }

  & + & {
    margin-left: 1rem;
  }
  & > svg {
    margin-left: 0.3rem;
  }
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;
const StyledButton = styled.button`
  ${buttonStyle}
`;

export default Button;

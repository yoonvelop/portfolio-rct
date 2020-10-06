import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import palette from "../../lib/styles/palette";

const Button = ({ children, to }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
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
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

export default Button;

import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import palette from "../../lib/styles/palette";

const Button = (props) => {
  return props.to ? (
    <StyledLink {...props}>{props.children}</StyledLink>
  ) : (
    <StyledButton {...props} disabled={props.disable}></StyledButton>
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
  cursor: ${(props) => (props.disable ? "disable" : "pointer")};
  font-size: ${(props) => (props.mini ? ".8rem" : "1rem")};
  ${(props) => props.mini && "height:2rem"};
  ${(props) => props.marginleft && "margin-left:.5rem"};

  &:hover {
    ${(props) =>
      props.disable
        ? ""
        : `background: ${palette.white};
    color: ${palette.black};`}
  }
  & + & {
    margin-left: 1rem;
  }
  & > svg {
    ${(props) => (props.iconright ? "margin-right" : "margin-left")}:0.3rem;
  }

  &:disabled {
    border-color: ${palette.gray};
    color: ${palette.text_gray};
  }
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;
const StyledButton = styled.button`
  ${buttonStyle}
`;

export default Button;

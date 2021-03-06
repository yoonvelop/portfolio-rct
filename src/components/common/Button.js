import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import palette from "../../lib/styles/palette";

const Button = (props) => {
  if (props.to) {
    return props.target ? (
      <StyledA href={props.to.pathname} {...props} disabled={props.disable}>
        {props.children}
      </StyledA>
    ) : (
      <StyledLink {...props}>{props.children}</StyledLink>
    );
  } else {
    return <StyledButton {...props} disabled={props.disable}></StyledButton>;
  }
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
  @media only screen and (max-width: 480px) {
    font-size: 0.8rem;
    ${(props) => props.mini && " padding: 0.2rem 0.5rem;"};
  }
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;
const StyledButton = styled.button`
  ${buttonStyle}
`;
const StyledA = styled.a`
  ${buttonStyle}
`;

export default React.memo(Button);

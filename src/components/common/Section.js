import React from "react";
import styled, { css } from "styled-components";
import palette from "../../lib/styles/palette";
import List from "./List";

const Section = ({
  title,
  sub,
  scroll,
  vertical,
  component: Component,
  content,
}) => {
  return (
    <SectionWrap>
      <SectionBlock sub={sub}>
        <SectionTitleBox sub={sub}>
          <Title sub={sub}>{title}</Title>
        </SectionTitleBox>
        <List
          scroll={scroll}
          content={content}
          component={Component}
          vertical={vertical}
        ></List>
      </SectionBlock>
    </SectionWrap>
  );
};

const SectionWrap = styled.section`
  width: 100%;
  background: ${palette.black};
  z-index: 100;
`;

const SectionBlock = styled.div`
  position: relative;
  padding: 3rem 1rem;
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;
  background: ${palette.black};
  z-index: 100;
  ${(props) =>
    props.sub &&
    css`
      padding: 2rem 1rem;
    `}
  @media only screen and (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

const SectionTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  ${(props) =>
    props.sub &&
    css`
      margin-bottom: 0.5rem;
    `}
  @media only screen and (max-width: 480px) {
    margin-bottom: 1rem;
  }
`;

const Title = styled.div`
  color: ${palette.white};
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  ${(props) =>
    props.sub &&
    css`
      font-size: 1.8rem;
    `}
  @media only screen and (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 0;
  }
`;

export default React.memo(Section);

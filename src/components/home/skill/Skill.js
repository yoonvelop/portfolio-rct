import React from "react";
import styled from "styled-components";
import palette from "../../../lib/styles/palette";
import { FcFlashOn } from "react-icons/fc";
const Skill = ({ item }) => {
  const list = [];
  for (let i = 0; i < item.level; i++) {
    list.push(<FcFlashOn key={i} />);
  }

  return (
    <SkillWrap>
      <SkillItem>
        <LeftBox>
          <IconBox color={item.color}>{item.icon}</IconBox>
          <TextBox>
            <Category>{item.category}</Category>
            <SkillName>{item.name}</SkillName>
          </TextBox>
        </LeftBox>
        <Level>{list}</Level>
      </SkillItem>
    </SkillWrap>
  );
};

const SkillWrap = styled.div`
  width: calc(100% / 4);
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 0.5rem;

  @media only screen and (max-width: 1200px) {
    width: calc(100% / 3);
  }

  @media only screen and (max-width: 850px) {
    width: calc(100% / 2);
  }

  @media only screen and (max-width: 600px) {
    width: calc(100% / 4);
    padding: 0.3rem;
  }
  @media only screen and (max-width: 480px) {
    width: calc(100% / 3);
  }
`;
const SkillItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: ${palette.white};
  border: 1px solid ${palette.gray};
  padding: 1rem;
  border-radius: 0.2rem;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
  /* & + & {
    margin-left: 0.5rem;
    @media only screen and (max-width: 480px) {
      margin-left: 0.5rem;
    }
  } */
  @media only screen and (max-width: 480px) {
    padding: 0.8rem;
  }
`;

const LeftBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  @media only screen and (max-width: 600px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  margin-right: 0.5rem;
  color: ${(props) => props.color || palette.white};
  @media only screen and (max-width: 600px) {
    font-size: 1.8rem;
    margin-right: 0;
  }
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 600px) {
    justify-content: center;
    margin: 0.3rem 0;
  }
`;

const Category = styled.span`
  font-size: 0.8rem;
  color: ${palette.text_gray};
  @media only screen and (max-width: 600px) {
    text-align: center;
    font-size: 0.7rem;
  }
`;

const SkillName = styled.span`
  font-size: 1rem;
  color: ${palette.white};
  margin-top: 0.2rem;
  @media only screen and (max-width: 600px) {
    text-align: center;
    margin-top: 0;
    font-size: 0.9rem;
  }
`;

const Level = styled.div`
  font-size: 0.8rem;
  width: 100%;
  display: flex;
  padding: 0 0.2rem;
  justify-content: flex-end;
  @media only screen and (max-width: 600px) {
    font-size: 0.7rem;
    justify-content: center;
  }
`;
export default React.memo(Skill);

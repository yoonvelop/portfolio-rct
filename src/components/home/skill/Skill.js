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
    <SkillItem>
      <div>
        <IconBox color={item.color}>{item.icon}</IconBox>
      </div>
      <Category>{item.category}</Category>
      <SkillName>{item.name}</SkillName>
      <Level>{list}</Level>
    </SkillItem>
  );
};

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 6rem;
  color: ${palette.white};
  border: 1px solid ${palette.gray};
  padding: 1rem;
  border-radius: 0.2rem;

  & + & {
    margin-left: 1rem;
    @media only screen and (max-width: 480px) {
      margin-left: 0.5rem;
    }
  }
  @media only screen and (max-width: 480px) {
    min-width: 5.5rem;
    padding: 0.8rem;
  }
`;

const IconBox = styled.div`
  font-size: 2rem;
  color: ${(props) => props.color || palette.white};
  margin-bottom: 0.5rem;
  @media only screen and (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 0.2rem;
  }
`;

const Category = styled.span`
  font-size: 0.8rem;
  color: ${palette.text_gray};
  @media only screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

const SkillName = styled.div`
  font-size: 1rem;
  color: ${palette.white};
  margin: 0.2rem 0 0.5rem;
  @media only screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Level = styled.div`
  font-size: 0.8rem;
  width: 100%;
  display: flex;
  padding: 0 0.2rem;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
`;
export default Skill;

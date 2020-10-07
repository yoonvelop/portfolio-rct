import React from "react";
import styled from "styled-components";
import palette from "../../../lib/styles/palette";
import { FcFlashOn } from "react-icons/fc";
const Skill = ({ skill }) => {
  const list = [];
  for (let i = 0; i < skill.level; i++) {
    list.push(<FcFlashOn key={i} />);
  }

  return (
    <SkillItem>
      <div>
        <IconBox color={skill.color}>{skill.icon}</IconBox>
      </div>
      <Category>{skill.category}</Category>
      <SkillName>{skill.name}</SkillName>
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
  }
`;

const IconBox = styled.div`
  font-size: 2rem;
  color: ${(props) => props.color || palette.white};
  margin-bottom: 0.5rem;
`;

const Category = styled.span`
  font-size: 0.8rem;
  color: ${palette.text_gray};
`;

const SkillName = styled.div`
  font-size: 1rem;
  color: ${palette.white};
  margin: 0.2rem 0 0.5rem;
`;

const Level = styled.div`
  font-size: 0.8rem;
  width: 100%;
  display: flex;
  padding: 0 0.2rem;
  justify-content: flex-end;
`;
export default Skill;

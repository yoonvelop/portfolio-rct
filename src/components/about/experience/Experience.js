import React from "react";
import styled from "styled-components";
import palette from "../../../lib/styles/palette";
const Experience = ({ item }) => {
  return (
    <ExperienceItem>
      <img src={`images/company/${item.thumbnail}.png`} alt="experience logo" />
      <MetaBox>
        <MataTitle>{item.title}</MataTitle>
        <MetaDesc>{item.desc}</MetaDesc>
        <MetaDesc>{item.date}</MetaDesc>
      </MetaBox>
    </ExperienceItem>
  );
};

const ExperienceItem = styled.div`
  display: flex;
  align-items: center;
  & > img {
    width: 5rem;
    margin-right: 1rem;
    @media only screen and (max-width: 450px) {
      width: 4rem;
    }
  }
  & + & {
    margin-top: 1rem;
  }
`;

const MetaBox = styled.div`
  display: flex;
  flex-direction: column;
  color: ${palette.white};
`;
const MataTitle = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
  @media only screen and (max-width: 450px) {
    font-size: 1rem;
  }
`;
const MetaDesc = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  margin: 0;
  color: ${palette.text_gray};
  @media only screen and (max-width: 450px) {
    font-size: 0.8rem;
  }
`;

export default React.memo(Experience);

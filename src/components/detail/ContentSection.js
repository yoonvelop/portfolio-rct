import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import DetailWrap from "../common/DetailWrap";
import StackItem from "../common/StackItem";

const ContentSection = ({ project }) => {
  return (
    <ContentBlock>
      <DetailWrap direction="column">
        <SubSection>
          <ImageList>
            {project.image.map((img, index) => (
              <img
                key={index}
                src={`../images/project/${img}.png`}
                alt="project"
              ></img>
            ))}
          </ImageList>
        </SubSection>
        <SubSection>
          <h1>소개 및 역할</h1>
          <DescBox>{project.desc}</DescBox>
        </SubSection>
        <SubSection>
          <h1>활용기술</h1>
          {project.stack.map((stack, index) => (
            <StackItem key={index} stack={stack} />
          ))}
        </SubSection>
      </DetailWrap>
    </ContentBlock>
  );
};

const ContentBlock = styled.section`
  flex: 1;
`;
const SubSection = styled.div`
  width: 100%;
  color: ${palette.white};
`;

const ImageList = styled.div`
  display: flex;
  overflow-x: auto;
  height: 20rem;
  padding-bottom: 1rem;
  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.1);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 6px;
  }

  img {
    height: 100%;
    margin-right: 1rem;
  }
`;

const DescBox = styled.div``;

export default ContentSection;

import React from "react";
import styled from "styled-components";
import palette from "../../../lib/styles/palette";

const Project = ({ project }) => {
  return (
    <ProjectItem>
      <ImageBox>
        <img src={project.image} alt="project thumbnail" />
      </ImageBox>
      <Title>{project.title}</Title>
      <SubText>{project.stack}</SubText>
      <SubText>{project.desc}</SubText>
    </ProjectItem>
  );
};

const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 18rem;
  color: ${palette.white};
  padding: 1rem;

  & + & {
    margin-left: 0.5rem;
  }
`;

const ImageBox = styled.div`
  margin-bottom: 0.5rem;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  & > img {
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 1.1rem;
  color: ${palette.white};
  font-weight: 600;
  margin: 0.2rem 0 0.5rem;
`;

const SubText = styled.span`
  font-size: 1rem;
  color: ${palette.text_gray};
`;

export default Project;

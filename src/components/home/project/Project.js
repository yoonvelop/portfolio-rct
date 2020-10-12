import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "../../../lib/styles/palette";
import StackItem from "../../common/StackItem";

const Project = ({ item }) => {
  return (
    <ProjectItem to={`/detail/${item.id}`}>
      <ImageBox>
        <img src={item.thumbnail} alt="project thumbnail" />
      </ImageBox>
      <Title>{item.title}</Title>
      <SubText>{item.summary}</SubText>
      <StackBox>
        {item.stack.map((stack, index) => (
          <StackItem key={index} stack={stack} />
        ))}
      </StackBox>
    </ProjectItem>
  );
};

const ProjectItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 18rem;
  color: ${palette.white};
  padding: 1rem;
  cursor: pointer;

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

const StackBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default Project;

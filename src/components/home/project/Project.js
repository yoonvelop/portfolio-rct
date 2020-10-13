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
      <TypeText>{item.type} project</TypeText>
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
  width: 24%;
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
  height: 10rem;
  border-radius: 10px;
  overflow: hidden;
  & > img {
    width: 100%;
  }
`;
const TypeText = styled.span`
  color: ${palette.white};
  font-size: 0.8rem;
`;

const Title = styled.div`
  font-size: 1.1rem;
  color: ${palette.white};
  font-weight: 600;
  margin: 0.1rem 0 0.5rem;
`;

const SubText = styled.span`
  font-size: 1rem;
  color: ${palette.text_gray};
  word-break: keep-all;
  margin-bottom: 0.2rem;
`;

const StackBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default Project;

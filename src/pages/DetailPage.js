import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Content from "../components/detail/Content";
import Summary from "../components/detail/Summary";
import { useProjectState } from "../contexts/projects";
const DetailPage = () => {
  const { projectId } = useParams();
  const state = useProjectState();
  const project = state.filter(
    (project) => project.id === parseInt(projectId)
  )[0];
  return (
    <DetailBlock>
      <Summary project={project} />
      <Content project={project} />
    </DetailBlock>
  );
};

const DetailBlock = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  overflow: hidden;
`;
export default DetailPage;

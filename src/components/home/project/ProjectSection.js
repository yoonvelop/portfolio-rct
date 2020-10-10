import React from "react";

import { useProjectState } from "../../../contexts/projects";

import Section from "../../common/Section";
import Project from "./Project";

const ProjectSection = () => {
  const state = useProjectState();
  return (
    <Section title="Projects" component={Project} content={state}></Section>
  );
};

export default ProjectSection;

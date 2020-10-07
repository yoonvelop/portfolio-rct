import React from "react";
import Section from "../../common/Section";
import Project from "./Project";

const ProjectSection = () => {
  return (
    <Section
      title="Projects"
      categories={categories}
      component={Project}
      content={projects}
    ></Section>
  );
};

const categories = [
  {
    id: 1,
    category: "All",
  },
  {
    id: 2,
    category: "Front-End",
  },
  {
    id: 3,
    category: "Back-End",
  },
  {
    id: 4,
    category: "Etc",
  },
];
const projects = [
  {
    id: 1,
    title: "프로젝트 이름",
    stack: "react javascript",
    desc: "프로젝트 소개",
    image: "../images/project-sample.png",
  },
];
export default ProjectSection;

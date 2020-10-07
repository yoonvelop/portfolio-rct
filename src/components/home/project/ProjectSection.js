import React from "react";
import Section from "../../common/Section";
import ProjectList from "./ProjectList";

const ProjectSection = () => {
  return (
    <Section
      title="Projects"
      categories={categories}
      component={ProjectList}
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

export default ProjectSection;

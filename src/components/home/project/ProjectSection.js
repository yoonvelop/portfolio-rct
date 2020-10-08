import React from "react";
import Section from "../../common/Section";
import Project from "./Project";

const ProjectSection = () => {
  return (
    <Section title="Projects" component={Project} content={projects}></Section>
  );
};

const projects = [
  {
    id: 1,
    category: "Front-end",
    title: "개발팀 랜딩 페이지",
    stack: ["HTML", "CSS", "Javascript", "Jquery", "AWS"],
    summary: "프로젝트 소개",
    desc: "프로젝트 소개~~~",
    thumbnail: "../images/project/stevelabs_thumbnail.png",
    image: [
      "stevelabs01",
      "stevelabs02",
      "stevelabs03",
      "stevelabs04",
      "stevelabs05",
    ],
  },
  {
    id: 2,
    category: "Back-end",
    title: "COAL 코로나 알리미",
    stack: ["PHP", "MySql", "AWS", "Firebase", "HTML", "CSS", "Javascript"],
    summary: "프로젝트 소개",
    desc: "프로젝트 소개~~~",
    thumbnail: "../images/project/stevelabs_thumbnail.png",
    image: [
      "stevelabs01",
      "stevelabs02",
      "stevelabs03",
      "stevelabs04",
      "stevelabs05",
    ],
  },
];
export default ProjectSection;

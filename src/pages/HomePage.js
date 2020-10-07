import React from "react";
import Bottom from "../components/common/Bottom";
import MainSection from "../components/home/main/MainSection";
import ProjectSection from "../components/home/project/ProjectSection";
import SkillSection from "../components/home/skill/SkillSection";

const HomePage = () => {
  return (
    <>
      <MainSection />
      <SkillSection />
      <ProjectSection />
      <Bottom />
    </>
  );
};

export default HomePage;

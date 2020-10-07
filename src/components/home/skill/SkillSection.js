import React from "react";
import Section from "../../common/Section";
import SkillList from "./SkillList";

const SkillSection = () => {
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
  return (
    <Section
      title="Skills"
      categories={categories}
      component={SkillList}
    ></Section>
  );
};

export default SkillSection;

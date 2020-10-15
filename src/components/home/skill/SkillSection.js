import React from "react";
import Section from "../../common/Section";
import Skill from "./Skill";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiJquery,
  SiPhp,
  SiReact,
  SiNodeDotJs,
  SiAmazon,
  SiMysql,
  SiMongodb,
  SiGit,
  SiLinux,
} from "react-icons/si";
const SkillSection = () => {
  return <Section title="Skills" component={Skill} content={skills}></Section>;
};

const skills = [
  {
    id: 1,
    icon: <SiJavascript />,
    color: "#F7DF1B",
    category: "Front-end",
    name: "JavaScript",
    level: 4,
  },

  {
    id: 2,
    icon: <SiReact />,
    color: "#5ED4F4",
    category: "Front-end",
    name: "React.js",
    level: 3,
  },

  {
    id: 3,
    icon: <SiHtml5 />,
    color: "#E96328",
    category: "Front-end",
    name: "HTML",
    level: 5,
  },
  {
    id: 4,
    icon: <SiCss3 />,
    color: "#2A65F0",
    category: "Front-end",
    name: "CSS",
    level: 4,
  },
  {
    id: 5,
    icon: <SiJquery />,
    color: "#0F66A9",
    category: "Front-end",
    name: "JQuery",
    level: 4,
  },

  {
    id: 6,
    icon: <SiPhp />,
    color: "#787BB3",
    category: "Back-end",
    name: "PHP",

    level: 4,
  },
  {
    id: 7,
    icon: <SiNodeDotJs />,
    color: "#73AF5A",
    category: "Back-end",
    name: "Node.js",
    level: 2,
  },
  {
    id: 8,
    icon: <SiLinux />,
    color: "#F0B810",
    category: "Back-end",
    name: "Linux",
    level: 2,
  },
  {
    id: 9,
    icon: <SiAmazon />,
    color: "#FCAD24",
    category: "Cloud",
    name: "AWS",
    level: 3,
  },
  {
    id: 10,
    icon: <SiMysql />,
    color: "#43759B",
    category: "Database",
    name: "MySql",
    level: 4,
  },
  {
    id: 11,
    icon: <SiMongodb />,
    color: "#489242",
    category: "Database",
    name: "MongoDB",
    level: 2,
  },
  {
    id: 12,
    icon: <SiGit />,
    color: "#E94F31",
    category: "Etc",
    name: "Git",
    level: 3,
  },
];

export default React.memo(SkillSection);

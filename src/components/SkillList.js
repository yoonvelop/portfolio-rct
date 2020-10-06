import React, { useRef } from "react";
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
} from "react-icons/si";
import styled from "styled-components";
import Skill from "./Skill";

const SkillList = () => {
  const onWheel = (e) => {
    const container = scrollRef.current;
    const containerScrollPosition = scrollRef.current.scrollLeft;
    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
    });
  };

  const scrollRef = useRef(null);

  return (
    <SkillListBlock onWheel={onWheel} ref={scrollRef}>
      {skills.map((skill) => (
        <Skill key={skill.id} skill={skill}></Skill>
      ))}
      ;
    </SkillListBlock>
  );
};

const SkillListBlock = styled.div`
  display: flex;
  overflow-x: scroll;
  padding-bottom: 1rem;
  &::-webkit-scrollbar {
    /* visibility: hidden; */
    width: 4px;
    height: 4px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.1);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 6px;
  }
`;

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
    color: "#F7DF1B",
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
    color: "#F7DF1B",
    category: "Front-end",
    name: "JQuery",
    level: 4,
  },

  {
    id: 6,
    icon: <SiPhp />,
    color: "#F7DF1B",
    category: "Back-end",
    name: "PHP",

    level: 4,
  },
  {
    id: 7,
    icon: <SiNodeDotJs />,
    color: "#F7DF1B",
    category: "Back-end",
    name: "Node.js",
    level: 1,
  },
  {
    id: 8,
    icon: <SiAmazon />,
    color: "#F7DF1B",
    category: "Cloud",
    name: "AWS",
    level: 3,
  },
  {
    id: 9,
    icon: <SiMysql />,
    color: "#F7DF1B",
    category: "Database",
    name: "MySql",
    level: 4,
  },
  {
    id: 10,
    icon: <SiMongodb />,
    color: "#F7DF1B",
    category: "Database",
    name: "MongoDB",
    level: 2,
  },
  {
    id: 11,
    icon: <SiGit />,
    color: "#F7DF1B",
    category: "Etc",
    name: "Git",
    level: 3,
  },
];

export default SkillList;

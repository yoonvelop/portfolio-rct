import React from "react";
import Section from "../../common/Section";
import Experience from "./Experience";

const ExperienceSection = () => {
  return (
    <Section
      title="Experience"
      sub
      vertical
      component={Experience}
      content={experiences}
    ></Section>
  );
};

const experiences = [
  {
    id: 1,
    title: "웹개발팀",
    desc: "HTML, CSS, Javascript, JQuery, PHP, MySQL, MariaDB, AWS",
    thumbnail: "codberg",
    date: "2019.04 - 2020.07",
  },
  {
    id: 2,
    title: "빅데이터를 활용한 응용프로그래머 개발자 양성 과정",
    desc: "JAVA, JSP, Spring, MySQL, Oracle, ibatis, mybatis, R",
    thumbnail: "academy",
    date: "2018.09 - 2019.02",
  },
];

export default ExperienceSection;

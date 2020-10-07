import React from "react";
import Section from "../../common/Section";
import Certification from "./Certification";

const CertificationSection = () => {
  return (
    <Section
      title="Certification"
      sub
      component={Certification}
      content={certifications}
    ></Section>
  );
};

const certifications = [
  {
    id: 1,
    title: "정보처리기사",
    thumbnail: "hrd_logo",
    date: "2019.05",
  },
  {
    id: 2,
    title: "리눅스마스터 2급",
    thumbnail: "kait_logo",
    date: "2018.12",
  },
  {
    id: 3,
    title: "네트워크관리사 2급",
    thumbnail: "icqa_logo",
    date: "2018.12",
  },
  {
    id: 4,
    title: "정보처리산업기사",
    thumbnail: "hrd_logo",
    date: "2018.11",
  },
];

export default CertificationSection;

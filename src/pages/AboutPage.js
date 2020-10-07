import React from "react";
import CertificationSection from "../components/about/certification/CertificationSection";
import ExperienceSection from "../components/about/experience/ExperienceSection";
import Head from "../components/about/Head";
import Bottom from "../components/common/Bottom";

const AboutPage = () => {
  return (
    <>
      <Head />
      <ExperienceSection />
      <CertificationSection />
      <Bottom />
    </>
  );
};

export default AboutPage;

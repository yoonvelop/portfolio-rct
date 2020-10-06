import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";

const Section = ({ title, component: Component }) => {
  return (
    <SectionBlock>
      <SectionTitle>{title}</SectionTitle>
      <Component></Component>
    </SectionBlock>
  );
};

const SectionBlock = styled.section`
  padding: 1rem;
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;
`;

const SectionTitle = styled.div`
  color: ${palette.white};
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;
export default Section;

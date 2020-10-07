import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Button from "./Button";

const Section = ({ title, categories, component: Component }) => {
  console.log(categories);
  return (
    <SectionBlock>
      <SectionTitleBox>
        <Title>{title}</Title>
        {categories && (
          <Categories>
            {categories.map((category) => (
              <Category key={category.id} category={category} />
            ))}
          </Categories>
        )}
      </SectionTitleBox>
      <Component></Component>
    </SectionBlock>
  );
};

const Category = ({ category }) => {
  return (
    <CategoryItem>
      <Button category>{category.category}</Button>
    </CategoryItem>
  );
};

const SectionBlock = styled.section`
  padding: 3rem 1rem;
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;
  background: ${palette.black};
  z-index: 100;
`;

const SectionTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Title = styled.div`
  color: ${palette.white};
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Categories = styled.div`
  display: flex;
  align-items: center;
`;
const CategoryItem = styled.div`
  & + & {
    margin-left: 0.5rem;
  }
`;

export default Section;

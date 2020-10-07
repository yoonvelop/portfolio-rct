import React, { useRef } from "react";
import styled, { css } from "styled-components";
const List = ({ vertical, content, component: Component }) => {
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
    <SkillListBlock onWheel={onWheel} ref={scrollRef} vertical={vertical}>
      {content &&
        content.map((item) => (
          <Component key={item.id} item={item}></Component>
        ))}
    </SkillListBlock>
  );
};

const SkillListBlock = styled.div`
  display: flex;
  ${(props) =>
    props.vertical &&
    css`
      flex-direction: column;
    `}

  overflow-x: auto;
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

export default List;

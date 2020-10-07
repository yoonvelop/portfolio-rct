import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import palette from "../../lib/styles/palette";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
const List = ({ vertical, content, component: Component }) => {
  const scrollRef = useRef(null);
  const [hasScroll, setHasScroll] = useState();
  // const [scrollHeight, setScrollHeight] = useState();
  const [leftLocation, setlleftLocation] = useState(false);

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, [hasScroll]);

  const resizeWindow = () => {
    const hasHorizontalScrollbar =
      scrollRef.current.scrollWidth > scrollRef.current.clientWidth;
    setHasScroll(hasHorizontalScrollbar);
  };

  const onScroll = () => {
    scrollRef.current.scrollLeft === 0
      ? setlleftLocation(false)
      : setlleftLocation(true);
  };
  const onClick = (e) => {
    const left = leftLocation ? 0 : scrollRef.current.scrollWidth;
    scrollRef.current.scrollTo({
      top: window.scrollTop,
      left: left,
      behavior: "smooth",
    });
    setlleftLocation(!leftLocation);
  };

  return (
    <SkillListBlock ref={scrollRef} vertical={vertical} onScroll={onScroll}>
      {hasScroll && (
        <MoveButton left={leftLocation} onClick={onClick}>
          {leftLocation ? <RiArrowLeftSLine /> : <RiArrowRightSLine />}
        </MoveButton>
      )}
      {content &&
        content.map((item) => (
          <Component key={item.id} item={item}></Component>
        ))}
    </SkillListBlock>
  );
};

const MoveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 50%;
  background: ${palette.white};
  cursor: pointer;
  color: ${palette.gray};
  align-self: center;
  outline: 0;
  border: 0;
  position: absolute;
  font-size: 1.5rem;
  right: -1.5rem;
  ${(props) =>
    props.left &&
    css`
      left: -1.5rem;
    `}
`;

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
    visibility: hidden;
  }
`;

export default List;

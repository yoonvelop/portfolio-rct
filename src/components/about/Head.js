import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import BgSection from "../common/BgSection";
import Button from "../common/Button";
import { FaBars, FaGithub, FaVimeo } from "react-icons/fa";

const Head = () => {
  return (
    <BgSection bgName="main-bg4">
      <div>
        <Title>About</Title>
      </div>
      <ButtonBox>
        {links.map((link) => (
          <ButtonLink key={link.id} link={link} />
        ))}
      </ButtonBox>
    </BgSection>
  );
};

const ButtonLink = ({ link }) => {
  return (
    <Button
      to={{
        pathname: link.path,
      }}
      target="_blank"
    >
      {link.name}
      {link.icon}
    </Button>
  );
};

const Title = styled.h1`
  color: ${palette.white};
  font-size: 2.7rem;
  font-weight: 700;
  margin: 0rem 0;

  & > span {
    font-weight: 500;
    font-size: 2.2rem;
  }
`;
const ButtonBox = styled.div`
  display: flex;
`;

const links = [
  {
    id: 1,
    name: "Resume",
    path:
      "https://www.notion.so/yoonvelop/Hyebin-Yoon-c06bf6b603034b38872610b1e4b4c5c0",
    icon: <FaBars />,
  },
  {
    id: 2,
    name: "Github",
    path: "https://github.com/yoonvelop",
    icon: <FaGithub />,
  },
  {
    id: 3,
    name: "Velog",
    path: "https://velog.io/@yoonvelop",
    icon: <FaVimeo />,
  },
];
export default Head;

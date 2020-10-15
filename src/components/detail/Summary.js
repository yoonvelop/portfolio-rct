import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import DetailWrap from "../common/DetailWrap";
import Button from "../common/Button";
import { useHistory } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { FaGithub, FaVimeo } from "react-icons/fa";

const Summary = ({ project }) => {
  const history = useHistory();
  function goBack() {
    history.goBack();
  }

  return (
    <SummaryBlock>
      <DetailWrap direction="row">
        <ImgBox>
          <img src={`../${project.thumbnail}`} alt="thumnail" />
        </ImgBox>
        <DescBox>
          <Title>{project.title}</Title>
          <p>{project.summary}</p>
          <LinkBox>
            <Button onClick={goBack} iconright="true" mini="true">
              <RiArrowGoBackLine />
              돌아가기
            </Button>
            {project.demo && (
              <Button
                to={{
                  pathname: project.demo,
                }}
                target="_blank"
                iconright="true"
                mini="true"
                marginleft="true"
              >
                <AiOutlinePlaySquare />
                Demo
              </Button>
            )}
            {project.velog && (
              <Button
                to={{
                  pathname: project.velog,
                }}
                target="_blank"
                iconright="true"
                mini="true"
                marginleft="true"
              >
                <FaVimeo />
                Velog
              </Button>
            )}
            <Button
              to={
                project.github
                  ? {
                      pathname: project.github,
                    }
                  : ""
              }
              target="_blank"
              iconright="true"
              mini="true"
              marginleft="true"
              disable={project.github ? false : true}
            >
              <FaGithub />
              {project.github ? "GitHub" : "Private"}
            </Button>
          </LinkBox>
        </DescBox>
      </DetailWrap>
    </SummaryBlock>
  );
};

const SummaryBlock = styled.section`
  width: 100%;
  height: 25%;
  display: flex;
  border-bottom: 1px solid ${palette.gray};
  color: ${palette.white};
  @media only screen and (max-width: 850px) {
    height: 23%;
  }
  @media only screen and (max-width: 600px) {
    height: 15%;
  }
  @media only screen and (max-width: 450px) {
    height: unset;
  }
`;

const ImgBox = styled.div`
  height: 100%;
  overflow: hidden;

  & > img {
    height: 100%;
  }
  @media only screen and (max-width: 450px) {
    display: none;
  }
`;
const DescBox = styled.div`
  margin-left: 2rem;
  & > p {
    font-size: 0.9rem;
    margin: 0.7rem 0;
    color: ${palette.text_gray};
    @media only screen and (max-width: 600px) {
      font-size: 0.8rem;
      margin: 0.5rem 0;
    }
  }
  @media only screen and (max-width: 450px) {
    margin-left: 0;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.8rem;
  @media only screen and (max-width: 850px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

const LinkBox = styled.div`
  display: flex;
`;

export default React.memo(Summary);

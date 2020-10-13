import React from "react";
import styled from "styled-components";
import palette from "../../../lib/styles/palette";
const Certification = ({ item }) => {
  return (
    <CertificationItem>
      <ImgBox>
        <img
          src={`../images/certification/${item.thumbnail}.png`}
          alt="certification logo"
        />
      </ImgBox>

      <MetaBox>
        <MataTitle>{item.title}</MataTitle>
        <MetaDesc>{item.date}</MetaDesc>
      </MetaBox>
    </CertificationItem>
  );
};

const CertificationItem = styled.div`
  display: flex;
  width: 23%;
  flex-direction: column;
  & + & {
    margin-left: 1rem;
    @media only screen and (max-width: 850px) {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 850px) {
    width: 47%;
    margin-bottom: 1rem;
  }
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  height: 3rem;
  border-radius: 0.2rem;
  background: ${palette.white};
  margin-bottom: 0.7rem;
  & > img {
    height: 80%;
  }
  @media only screen and (max-width: 450px) {
    height: 2.2rem;
  }
`;

const MetaBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${palette.white};
`;
const MataTitle = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
  @media only screen and (max-width: 450px) {
    font-size: 1rem;
  }
`;
const MetaDesc = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  margin: 0;
  color: ${palette.text_gray};
  @media only screen and (max-width: 450px) {
    font-size: 0.8rem;
  }
`;

export default Certification;

import React from "react";
import Section from "../common/Section";
import { FiMail } from "react-icons/fi";
import styled from "styled-components";
import palette from "../../lib/styles/palette";

const Contact = () => {
  return <Section title="Contact" sub component={ContactItem}></Section>;
};

const ContactItem = () => {
  return (
    <ContactBox>
      <FiMail />
      yoonvelop@gmail.com
    </ContactBox>
  );
};

const ContactBox = styled.div`
  display: flex;
  color: ${palette.white};
  align-items: flex-end;
  font-size: 1.1rem;
  font-weight: 500;
  & > svg {
    margin-right: 0.5rem;
  }
`;
export default React.memo(Contact);

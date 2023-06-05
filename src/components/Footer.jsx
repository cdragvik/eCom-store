import React from 'react';
import { styled } from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #5b7053;
  color: #fff;
  padding: 20px;
`;

const FooterText = styled.p`
  text-align: center;
  margin: 0;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterText>© 2023 Designed and built by Christiane Nanette Dragvik</FooterText>
    </FooterContainer>
  );
};


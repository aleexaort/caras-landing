import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${theme.colors.primary};
  padding: 15px 6%;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  display: inline-block;
  img {
    width: 130px;
    display: block;
  }
`;

const HeaderLink = styled.a`
  color: ${theme.colors.light};
  font-family: ${theme.fonts.sans};
  font-size: 15px;
  font-weight: 600;
  border-bottom: 1px solid ${theme.colors.light};
  padding-bottom: 3px;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
  }
`;

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo href="#">
          <img src="/img/logo-caras.png" alt="CARAS México" />
        </Logo>
        <HeaderLink href="#newsletter">
          Suscríbete
        </HeaderLink>
      </HeaderContent>
    </HeaderContainer>
  );
};
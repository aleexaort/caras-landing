import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const FooterContainer = styled.footer`
  padding: 70px 6% 25px;
  background-color: ${theme.colors.darkSecondary};
  color: ${theme.colors.light};
`;

const FooterTop = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  padding-bottom: 60px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-wrap: wrap;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 35px;
  }
`;

const FooterBrand = styled.div`
  width: 30%;

  img {
    width: 150px;
    margin-bottom: 15px;
  }

  p {
    font-family: ${theme.fonts.sans};
    font-size: 14px;
    color: #aaa;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    font-family: ${theme.fonts.sans};
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${theme.colors.primary};
    margin-bottom: 8px;
  }

  a {
    font-family: ${theme.fonts.sans};
    font-size: 14px;
    color: #ddd;
    text-decoration: none;

    &:hover {
      color: ${theme.colors.primary};
    }
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: auto;
  padding-top: 25px;
  border-top: 1px solid ${theme.colors.grayDark};
  display: flex;
  justify-content: space-between;
  gap: 20px;

  p, a {
    font-family: ${theme.fonts.sans};
    font-size: 12px;
    color: #999;
    text-decoration: none;
  }

  div {
    display: flex;
    gap: 20px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;

    div {
      flex-direction: column;
      gap: 8px;
    }
  }
`;

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <FooterBrand>
          <img src="/img/logo-caras.png" alt="CARAS México" />
          <p>Revista CARAS México</p>
        </FooterBrand>

        <FooterColumn>
          <h3>Descubre</h3>
          <a href="#">Lifestyle</a>
          <a href="#">Moda</a>
          <a href="#">Belleza</a>
          <a href="#">Entretenimiento</a>
        </FooterColumn>

        <FooterColumn>
          <h3>Más CARAS</h3>
          <a href="#">Personalidades</a>
          <a href="#">Travel</a>
          <a href="#">Revista</a>
        </FooterColumn>

        <FooterColumn>
          <h3>Síguenos</h3>
          <a href="https://www.instagram.com/carasmexico/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://twitter.com/carasmexico" target="_blank" rel="noreferrer">X</a>
          <a href="https://www.facebook.com/Revista.Caras" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://www.tiktok.com/@revistacarasmx" target="_blank" rel="noreferrer">TikTok</a>
        </FooterColumn>
      </FooterTop>

      <FooterBottom>
        <p>© 2026 CARAS México</p>
        <div>
          <a href="#">Aviso de privacidad</a>
          <a href="#">Términos de servicio</a>
        </div>
      </FooterBottom>
    </FooterContainer>
  );
};
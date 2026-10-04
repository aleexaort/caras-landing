import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const HeroContainer = styled.section`
  position: relative;
  min-height: 650px;
  overflow: hidden;
  background-color: ${theme.colors.dark};
  color: ${theme.colors.light};
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 55%;
  height: 100%;
  background-color: ${theme.colors.primary};

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 100%;
    height: 45%;
    bottom: 0;
    top: auto;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  min-height: 650px;
  margin: auto;
  padding: 80px 6%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 90px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
    padding: 70px 5%;
    min-height: auto;
  }
`;

const HeroText = styled.div`
  width: 50%;
  padding-right: 20px;

  .section-name {
    color: ${theme.colors.primary};
  }

  h1 {
    max-width: 550px;
    font-size: 65px;
    line-height: 1;
    margin-bottom: 25px;
  }

  p {
    max-width: 480px;
    font-size: 19px;
    line-height: 1.6;
    margin-bottom: 35px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 100%;
    padding-right: 0;

    h1, p {
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    h1 {
      font-size: 43px;
    }
    p {
      font-size: 16px;
    }
  }
`;

const HeroCover = styled.div`
  width: 330px;
  height: 470px;
  transform: rotate(3deg);
  box-shadow: 15px 18px 0 ${theme.colors.light};
  background-size: cover;
  background-position: center;

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 250px;
    height: 360px;
  }
`;

const ButtonWhite = styled.a`
  display: inline-block;
  padding: 15px 25px;
  font-family: ${theme.fonts.sans};
  font-size: 14px;
  font-weight: 700;
  background-color: ${theme.colors.light};
  color: ${theme.colors.primary};
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.colors.grayLight};
  }
`;

export const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <HeroBackground />
      <HeroContent>
        <HeroText>
          <p className="section-name">CARAS MÉXICO</p>
          <h1>Nuevas ideas siempre en tu correo</h1>
          <p>
            Suscríbete a nuestro newsletter y recibe el mejor contenido semana a semana.
          </p>
          <ButtonWhite href="#newsletter">
            Quiero suscribirme
          </ButtonWhite>
        </HeroText>

        <HeroCover
          style={{ backgroundImage: "url('/img/caras-septiembre-2026.jpg')" }}
          role="img"
          aria-label="Portada de la revista CARAS México"
        />
      </HeroContent>
    </HeroContainer>
  );
};
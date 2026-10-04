import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { ContentItemData } from '../types';

// Datos para las tarjetas de contenido
const contentItems: ContentItemData[] = [
  {
    id: 1,
    categoria: '01',
    titulo: 'Moda',
    imagenUrl: '/img/caras-moda.jpg',
  },
  {
    id: 2,
    categoria: '02',
    titulo: 'Entretenimiento',
    descripcion: 'Historias, entrevistas y protagonistas de la actualidad.',
  },
  {
    id: 3,
    categoria: '03',
    titulo: 'Personalidades',
    descripcion: 'Conoce las historias detrás de quienes están dando de qué hablar.',
    esOscuro: true,
  },
];

const SectionContainer = styled.section`
  padding: 110px 6%;
  background-color: ${theme.colors.bgLight};
`;

const TitleBox = styled.div`
  max-width: 750px;
  margin: 0 auto 60px;
  text-align: center;

  h2 {
    font-size: 48px;
    line-height: 1.1;
    margin-bottom: 20px;
  }

  p:last-child {
    font-size: 17px;
    line-height: 1.6;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    h2 {
      font-size: 36px;
    }
  }
`;

const Grid = styled.div`
  max-width: 1150px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const Card = styled.article<{ $isDark?: boolean }>`
  width: calc(50% - 13px);
  min-height: 280px;
  padding: 40px;
  background-color: ${({ $isDark }) => ($isDark ? theme.colors.dark : theme.colors.light)};
  color: ${({ $isDark }) => ($isDark ? theme.colors.light : theme.colors.dark)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-size: 40px;
    margin-bottom: 15px;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

const CardImage = styled.article`
  width: calc(50% - 13px);
  min-height: 450px;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
    min-height: 380px;
  }
`;

const ContentLabel = styled.div`
  position: absolute;
  bottom: 25px;
  left: 25px;
  right: 25px;
  padding: 20px;
  background-color: ${theme.colors.light};

  span {
    font-family: ${theme.fonts.sans};
    font-size: 12px;
    color: ${theme.colors.primary};
  }

  h3 {
    font-size: 30px;
    color: ${theme.colors.dark};
  }
`;

const NumberText = styled.div`
  font-family: ${theme.fonts.sans};
  font-size: 14px;
  color: ${theme.colors.primary};
`;

const FeaturedWrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 6%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    gap: 60px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 50px;
    padding: 80px 5%;
  }
`;

const FeaturedCover = styled.div`
  width: 330px;
  height: 470px;
  position: relative;
  background-size: cover;
  background-position: center;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.primary};
    left: 25px;
    top: 25px;
    z-index: -1;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 260px;
    height: 375px;
  }
`;

const FeaturedText = styled.div`
  max-width: 500px;

  h2 {
    font-size: 52px;
    line-height: 1.05;
    margin-bottom: 25px;

    span {
      color: ${theme.colors.primary};
    }
  }

  p:not(.section-name) {
    font-size: 17px;
    line-height: 1.7;
    margin-bottom: 30px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    h2 {
      font-size: 40px;
    }
  }
`;

const ButtonRed = styled.a`
  display: inline-block;
  padding: 15px 25px;
  font-family: ${theme.fonts.sans};
  font-size: 14px;
  font-weight: 700;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.light};
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.colors.primaryHover};
  }
`;

export const FeaturedSection: React.FC = () => {
  return (
    <>
      {/* Sección de Bloques de Contenido */}
      <SectionContainer>
        <TitleBox>
          <p className="section-name">DESCUBRE CARAS</p>
          <h2>El contenido que quieres conocer.</h2>
          <p>
            Moda, belleza, entretenimiento, lifestyle, personalidades y mucho más forman parte del universo editorial de CARAS.
          </p>
        </TitleBox>

        <Grid>
          {/* Card Moda con Imagen */}
          <CardImage style={{ backgroundImage: "url('/img/caras-moda.jpg')" }}>
            <ContentLabel>
              <span>01</span>
              <h3>Moda</h3>
            </ContentLabel>
          </CardImage>

          {/* Card Entretenimiento */}
          <Card>
            <NumberText>02</NumberText>
            <div>
              <p className="section-name">CARAS</p>
              <h3>Entretenimiento</h3>
              <p>Historias, entrevistas y protagonistas de la actualidad.</p>
            </div>
          </Card>

          {/* Card Personalidades */}
          <Card $isDark>
            <NumberText style={{ color: '#fff' }}>03</NumberText>
            <div>
              <p className="section-name">CARAS</p>
              <h3>Personalidades</h3>
              <p>Conoce las historias detrás de quienes están dando de qué hablar.</p>
            </div>
          </Card>

          {/* Card Entretenimiento */}
          <CardImage style={{ backgroundImage: "url('/img/caras-entretenimiento.jpg')" }} />
        </Grid>
      </SectionContainer>

      {/* Sección Edición Destacada */}
      <FeaturedWrapper>
        <FeaturedCover style={{ backgroundImage: "url('/img/caras-destacada.jpg')" }} />
        <FeaturedText>
          <p className="section-name">EDICIÓN DESTACADA</p>
          <h2>
            Una nueva historia, <span>cada semana.</span>
          </h2>
          <p>
            CARAS reúne historias de actualidad, personalidades, moda, belleza, entretenimiento, lifestyle y viajes.
          </p>
          <ButtonRed href="#newsletter">Recibir contenido</ButtonRed>
        </FeaturedText>
      </FeaturedWrapper>
    </>
  );
};
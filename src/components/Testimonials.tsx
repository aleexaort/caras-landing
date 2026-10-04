import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { TestimonialData } from '../types';

const testimonialsData: TestimonialData[] = [
  {
    id: 1,
    nombre: 'Sofía',
    comentario: '“Me encanta descubrir nuevas historias y tenerlas directamente en mi correo.”',
    avatarUrl: '/img/avatar-1.png',
  },
  {
    id: 2,
    nombre: 'Daniel',
    comentario: '“Es una forma sencilla de mantenerme al día con lo que está pasando.”',
    avatarUrl: '/img/avatar-2.png',
    esRojo: true,
  },
  {
    id: 3,
    nombre: 'David',
    comentario: '“Me gusta encontrar contenido diferente cada semana.”',
    avatarUrl: '/img/avatar-3.jpg',
  },
];

const SectionContainer = styled.section`
  padding: 110px 6%;
  background-color: ${theme.colors.dark};
  color: ${theme.colors.light};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 80px 5%;
  }
`;

const Heading = styled.div`
  max-width: 750px;
  margin: auto auto 60px;
  text-align: center;

  h2 {
    font-size: 48px;
    line-height: 1.1;

    span {
      color: ${theme.colors.primary};
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    h2 {
      font-size: 36px;
    }
  }
`;

const Grid = styled.div`
  max-width: 1100px;
  margin: auto;
  display: flex;
  gap: 25px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const Card = styled.article<{ $isRed?: boolean }>`
  flex: 1;
  padding: 35px;
  background-color: ${({ $isRed }) => ($isRed ? theme.colors.primary : theme.colors.light)};
  color: ${({ $isRed }) => ($isRed ? theme.colors.light : theme.colors.dark)};
  display: flex;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Avatar = styled.div`
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
`;

const Quote = styled.p`
  font-size: 17px;
  line-height: 1.6;
  margin-bottom: 18px;
`;

const PersonName = styled.p`
  font-family: ${theme.fonts.sans};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
`;

export const Testimonials: React.FC = () => {
  return (
    <SectionContainer>
      <Heading>
        <p className="section-name">COMENTARIOS</p>
        <h2>
          CARAS también se disfruta <span>desde tu bandeja.</span>
        </h2>
      </Heading>

      <Grid>
        {testimonialsData.map((t) => (
          <Card key={t.id} $isRed={t.esRojo}>
            <Avatar style={{ backgroundImage: `url(${t.avatarUrl})` }} />
            <div>
              <Quote>{t.comentario}</Quote>
              <PersonName>{t.nombre}</PersonName>
            </div>
          </Card>
        ))}
      </Grid>
    </SectionContainer>
  );
};
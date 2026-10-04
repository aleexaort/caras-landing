import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { SubscriptionFormData, FormErrors } from '../types';

const SectionWrapper = styled.section`
  position: relative;
  padding: 110px 6%;
  background-color: ${theme.colors.light};
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 80px 5%;
  }
`;

const CircleDecoration = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  border: 45px solid ${theme.colors.primary};
  border-radius: 50%;
  right: -100px;
  top: 80px;
`;

const Container = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1100px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 80px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const IntroText = styled.div`
  width: 50%;

  h2 {
    font-size: 48px;
    line-height: 1.05;
    margin-bottom: 25px;

    span {
      color: ${theme.colors.primary};
    }
  }

  p {
    max-width: 500px;
    font-size: 17px;
    line-height: 1.7;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 100%;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    h2 {
      font-size: 36px;
    }
  }
`;

const FormBox = styled.form`
  width: 430px;
  padding: 40px;
  background-color: ${theme.colors.dark};
  color: ${theme.colors.light};
  box-shadow: 15px 15px 0 ${theme.colors.primary};

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 100%;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 30px 25px;
    box-shadow: 8px 8px 0 ${theme.colors.primary};
  }
`;

const FormGroup = styled.div`
  margin-bottom: 22px;

  label {
    display: block;
    font-family: ${theme.fonts.sans};
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    padding: 14px;
    border: none;
    border-bottom: 2px solid ${theme.colors.light};
    background-color: transparent;
    color: ${theme.colors.light};
    font-family: ${theme.fonts.sans};
    font-size: 15px;
    outline: none;

    &::placeholder {
      color: ${theme.colors.grayText};
    }

    &:focus {
      border-bottom-color: ${theme.colors.primary};
    }
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px 25px;
  border: none;
  font-family: ${theme.fonts.sans};
  font-size: 14px;
  font-weight: 700;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.light};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.colors.primaryHover};
  }
`;

const PrivacyText = styled.p`
  margin-top: 18px;
  color: ${theme.colors.grayText};
  font-family: ${theme.fonts.sans};
  font-size: 11px;
  line-height: 1.5;
`;

const ErrorSpan = styled.span`
  display: block;
  font-family: ${theme.fonts.sans};
  font-size: 12px;
  color: ${theme.colors.primary};
  font-weight: 700;
  margin-top: 6px;
`;

const StatusMessage = styled.div<{ $isSuccess?: boolean }>`
  font-family: ${theme.fonts.sans};
  margin-top: 15px;
  font-size: ${({ $isSuccess }) => ($isSuccess ? '17px' : '15px')};
  text-align: center;
  font-weight: 700;
  color: ${({ $isSuccess }) => ($isSuccess ? theme.colors.success : theme.colors.primary)};
`;

export const SubscriptionForm: React.FC = () => {
  // Capturar los valores de los inputs
  const [formData, setFormData] = useState<SubscriptionFormData>({
    nombre: '',
    correo: '',
  });

  // Guardar los mensajes de error de validación
  const [errors, setErrors] = useState<FormErrors>({});

  // Mensaje de respuesta global (Éxito o Error)
  const [formStatus, setFormStatus] = useState<{ message: string; isSuccess: boolean } | null>(null);

  // Actualizar el estado cuando el usuario escribe
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: FormErrors = {};
    let isValid = true;

    // Validar Nombre
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'Por favor escribe tu nombre.';
      isValid = false;
    }

    // Validar Correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.correo.trim()) {
      newErrors.correo = 'El correo es obligatorio.';
      isValid = false;
    } else if (!emailRegex.test(formData.correo.trim())) {
      newErrors.correo = 'Revisa que tu correo sea válido.';
      isValid = false;
    }

    setErrors(newErrors);

    // Mensajes de resultado
    if (isValid) {
      setFormStatus({
        message: '¡Gracias por suscribirte! Revisa tu bandeja pronto.',
        isSuccess: true,
      });
      // Limpiar campos tras el éxito
      setFormData({ nombre: '', correo: '' });
    } else {
      setFormStatus({
        message: 'Hay algunos detalles por corregir en el formulario.',
        isSuccess: false,
      });
    }
  };

  return (
    <SectionWrapper id="newsletter">
      <CircleDecoration />
      <Container>
        <IntroText>
          <p className="section-name">NEWSLETTER</p>
          <h2>
            CARAS, <span>directamente a tu correo.</span>
          </h2>
          <p>
            Recibe el mejor contenido de CARAS semana a semana. Mantente cerca de las historias,
            personalidades y tendencias que forman parte de nuestro universo editorial.
          </p>
        </IntroText>

        <FormBox onSubmit={handleSubmit} noValidate>
          <FormGroup>
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Escribe tu nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
            {errors.nombre && <ErrorSpan>{errors.nombre}</ErrorSpan>}
          </FormGroup>

          <FormGroup>
            <label htmlFor="correo">Correo electrónico</label>
            <input
              type="email"
              id="correo"
              name="correo"
              placeholder="Ingresa tu email"
              value={formData.correo}
              onChange={handleChange}
            />
            {errors.correo && <ErrorSpan>{errors.correo}</ErrorSpan>}
          </FormGroup>

          <SubmitButton type="submit">Suscribirme al newsletter</SubmitButton>

          {formStatus && (
            <StatusMessage $isSuccess={formStatus.isSuccess}>
              {formStatus.message}
            </StatusMessage>
          )}

          <PrivacyText>
            Al ingresar tu correo electrónico estás de acuerdo con nuestro aviso de privacidad.
          </PrivacyText>
        </FormBox>
      </Container>
    </SectionWrapper>
  );
};
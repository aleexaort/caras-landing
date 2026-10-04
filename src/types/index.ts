// Interfaces

// Datos del formulario de suscripción
export interface SubscriptionFormData {
  nombre: string;
  correo: string;
}

// Errores de validación del formulario
export interface FormErrors {
  nombre?: string;
  correo?: string;
}

// Elementos de la sección de contenido/destacados
export interface ContentItemData {
  id: number;
  categoria: string;
  titulo: string;
  descripcion?: string;
  imagenUrl?: string;
  esOscuro?: boolean;
}

// Testimonios de los suscriptores
export interface TestimonialData {
  id: number;
  nombre: string;
  comentario: string;
  avatarUrl: string;
  esRojo?: boolean;
}
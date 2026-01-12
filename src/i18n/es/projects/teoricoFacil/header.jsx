import { PROYECT_LINKS } from '../../../../constants/informationLinks';

export const header = {
  title: 'TEÓRICO COCHE FÁCIL',
  subtitle: 'Prepara el examen teórico de conducir',
  status: 'Activo',
  statusKey: 'active',
  link: PROYECT_LINKS.teoricoFacil,

  bulletPoints: {
    title: 'IMPACTO DEL PROYECTO',
    items: [
      <>
        <strong>Plataforma real</strong> centrada en el usuario utilizada por
        +5000 estudiantes,
        <strong>mejorando la experiencia de aprendizaje de este sector</strong>.
      </>,
      <>
        <strong>Arquitectura</strong> de la información completa{' '}
        <strong>con flujos claros y jerarquía intuitiva</strong> para facilitar
        la navegación.
      </>,
      <>
        <strong>Mapa gamificado</strong> que motiva a los usuarios y{' '}
        <strong>visualiza su progreso </strong>
        de manera interactiva.
      </>,
      <>
        <strong>Sistema de tests inteligentes</strong> diseñado para ofrecer
        retroalimentación inmediata y mejorar la comprensión del estudiante.
      </>,
      <>
        <strong>Diseño escalable y consistente</strong> con interfaces
        responsive y componentes reutilizables que aseguran coherencia en toda
        la aplicación.
      </>
    ]
  },

  description: (
    <>
      <strong>
        Análisis de necesidades → Flujo del usuario → Creación del sistema de
        diseño → Diseño de wireframes → Flujo entre pantallas → Prototipado
      </strong>
    </>
  ),
  goal: (
    <>
      <strong>El objetivo:</strong> mejorar la motivación y la comprensión del
      alumno mediante gamificación, microinteracciones y un mapa interactivo.
    </>
  )
};

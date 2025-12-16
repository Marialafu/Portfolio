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
        <strong>Plataforma real</strong> usada por +1000 estudiantes.
      </>,
      <>
        <strong>Arquitectura completa</strong> diseño → frontend → backend →
        base de datos.
      </>,
      <>
        <strong>Mapa gamificado</strong> que mejora la motivación y el progreso
        del alumno.
      </>,
      <>
        <strong>Sistema de tests inteligentes</strong> con corrección en tiempo
        real o al finalizar test.
      </>,
      <>
        <strong>Aplicación escalable</strong> con React + Node + MongoDB +
        Firebase.
      </>
    ]
  },

  description: (
    <>
      <strong>Diseñé y desarrollé end-to-end</strong> una plataforma educativa{' '}
      <strong>real</strong> para preparar el examen teórico de conducir.
    </>
  ),
  goal: (
    <>
      <strong>El objetivo:</strong> mejorar la motivación y la comprensión del
      alumno mediante gamificación, microinteracciones y un mapa interactivo.
    </>
  )
};

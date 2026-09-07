import { PROYECT_LINKS } from '../../constants/informationLinks';

export const teoricoFacil = {
  intro: {
    title: 'TEÓRICO COCHE FÁCIL',
    href: PROYECT_LINKS.teoricoFacil,
    openLabel: 'Abrir el proyecto en una pestaña nueva',
    paragraphs: [
      'El problema no es estudiar. Es cómo están hechas las plataformas del sector.',
      'Este proyecto replantea la experiencia del teórico con un enfoque más visual, amigable e interactivo pensado para enganchar desde el primer minuto.'
    ],
    stack: ['Figma', 'React JS', 'Styled-components']
  },
  inCar: {
    background: {
      src: '/images/teoricoFacil/luxury-car-interior-steering-wheel-shift-lever-dashboard-computer.jpg',
      alt: 'Interior de un coche'
    },
    phones: [
      {
        src: '/images/teoricoFacil/mockup-map.webp',
        alt: 'Pantalla del mapa de progreso'
      },
      {
        src: '/images/teoricoFacil/mockup-study-test-selected.webp',
        alt: 'Pantalla de test con una opción seleccionada'
      },
      {
        src: '/images/teoricoFacil/mockup-study-test-corrected.webp',
        alt: 'Pantalla de test con la corrección'
      }
    ]
  },
  flexible: {
    paragraphs: [
      'El responsive se diseñó pensando en los distintos momentos y formas de estudiar con Teórico Fácil.',
      'En móvil, se prioriza un acceso rápido y sencillo a la teoría, los tests y el mapa, para poder estudiar desde cualquier lugar.',
      'En desktop, se aprovecha el espacio y el tamaño de pantalla para consultar la teoría de forma más cómoda y visual.',
      'La estructura se mantiene consistente, pero cada dispositivo prioriza las funciones más relevantes para estudiar de forma cómoda.'
    ],
    city: {
      src: '/images/teoricoFacil/japan-urban-landscape.jpg',
      alt: 'Paisaje urbano'
    },
    laptop: {
      src: '/images/teoricoFacil/close-up-girl-learning-with-laptop.webp',
      alt: 'Persona estudiando el teórico en un portátil'
    }
  }
};

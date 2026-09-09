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
    stack: ['Figma', 'Illustrator', 'React JS', 'Styled-components']
  },
  inCar: {
    background: {
      src: '/images/teoricoFacil/teorico-in-car-bg.webp',
      alt: 'Manos en el volante conduciendo'
    },
    phones: [
      {
        src: '/images/teoricoFacil/mockup-map.webp',
        alt: 'Pantalla del mapa de progreso'
      },
      {
        src: '/images/teoricoFacil/mockup-exam-test.webp',
        alt: 'Pantalla de examen'
      },
      {
        src: '/images/teoricoFacil/mockup-test-results.webp',
        alt: 'Pantalla de resultados del test'
      }
    ]
  },
  responsive: {
    paragraphs: [
      'El responsive se diseñó pensando en los distintos momentos y formas de estudiar con Teórico Fácil.',
      'En móvil, se prioriza un acceso rápido y sencillo para poder estudiar desde cualquier lugar. En ordenador, se aprovecha el espacio y tamaño de la pantalla para permitir una consulta de la teoría más cómoda.',
      'La estructura se mantiene consistente, pero cada dispositivo prioriza las funciones más relevantes para estudiar de forma cómoda.'
    ],
    city: {
      src: '/images/teoricoFacil/teorico-responsive-highway.webp',
      alt: 'Carretera larga entre árboles'
    },
    laptop: {
      src: '/images/teoricoFacil/teorico-responsive-computer.webp',
      alt: 'Persona estudiando el teórico en un portátil'
    }
  },
  'mockup-statistics': {
    src: '/images/teoricoFacil/teorico-statistics.jpg',
    srcMobile: '/images/teoricoFacil/teorico-phone-statistics.jpg',
    alt: 'Estadísticas de estudio en el móvil',
    paragraphs: [
      'Convierte el progreso en una colección de pequeños objetivos: Avanzar por el mapa, mejorar cada parada, consigue tornillos y desbloquea contenido educativo exclusivo.',
      'Porque si aprobar es el destino, también hay que hacer que apetezca recorrer el camino.'
    ]
  },
  mosaico: {
    background: {
      src: '/images/teoricoFacil/teorico-mosaic-bg.webp',
      alt: 'Mujer haciendo el examen práctico del carnet de conducir'
    },
    mosaic: {
      src: '/images/teoricoFacil/teorico-mosaico.png',
      alt: 'Mosaico de pantallas de Teórico Fácil'
    },
    lines: [
      'Haz test',
      'Mejora tus resultados',
      'Y aprueba el examen'
    ]
  },
  level: {
    background: {
      src: '/images/teoricoFacil/japan-urban-landscape.webp',
      alt: 'Paisaje urbano'
    },
    gif: {
      src: '/images/teoricoFacil/cambio_nivel.gif',
      alt: 'Animación del mapa de progreso'
    },
    header: {
      src: '/images/teoricoFacil/header.png',
      alt: 'Cabecera de Teórico Fácil'
    },
    mapFooter: {
      src: '/images/teoricoFacil/map-footer.png',
      alt: 'Navegación de la app'
    }
  }
};

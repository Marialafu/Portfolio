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
      src: '/images/teoricoFacil/hands-wheel-when-driving-high-speed-from-inside-car.webp',
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
  flexible: {
    paragraphs: [
      'El responsive se diseñó pensando en los distintos momentos y formas de estudiar con Teórico Fácil.',
      'En móvil, se prioriza un acceso rápido y sencillo para poder estudiar desde cualquier lugar. En ordenador, se aprovecha el espacio y tamaño de la pantalla para permitir una consulta de la teoría más cómoda.',
      'La estructura se mantiene consistente, pero cada dispositivo prioriza las funciones más relevantes para estudiar de forma cómoda.'
    ],
    city: {
      src: '/images/teoricoFacil/long-highway-lined-with-trees-countryside-with-colorful-afternoon-sky.webp',
      alt: 'Carretera larga entre árboles'
    },
    laptop: {
      src: '/images/teoricoFacil/close-up-girl-learning-with-laptop.webp',
      alt: 'Persona estudiando el teórico en un portátil'
    }
  },
  'mockup-statistics': {
    src: '/images/teoricoFacil/mockup-statistics-with-phone.webp',
    alt: 'Estadísticas de estudio en el móvil',
    paragraphs: [
      'Aprobar el examen es una meta, pero no tiene por qué ser la única.',
      'Teórico Fácil convierte el progreso en una colección de pequeños objetivos:'
    ],
    goals: [
      'Avanzar por el mapa,',
      'Mejorar cada parada',
      'Conseguir tornillos',
      'Desbloquear contenido educativo exclusivo.'
    ],
    closing: [
      'Cada paso aporta una recompensa y hace que el siguiente objetivo esté un poco más cerca.',
      'Porque si aprobar es el destino, también hay que hacer que apetezca recorrer el camino.'
    ]
  },
  mosaico: {
    background: {
      src: '/images/teoricoFacil/vertical-shot-curvy-road-down-hill-with-buildings-distance.webp',
      alt: 'Carretera con curvas en una ladera'
    },
    mosaic: {
      src: '/images/teoricoFacil/teorico-mosaico.png',
      alt: 'Mosaico de pantallas de Teórico Fácil'
    },
    lines: [
      'Haz test',
      'Mejora los resultados',
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

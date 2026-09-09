import { PROYECT_LINKS } from '../../constants/informationLinks';

export const teoricoFacil = {
  intro: {
    title: 'TEÓRICO COCHE FÁCIL',
    href: PROYECT_LINKS.teoricoFacil,
    openLabel: 'Open the project in a new tab',
    paragraphs: [
      'The problem is not studying. It is how industry platforms are built.',
      'This project rethinks the theory-test experience with a more visual, friendly and interactive approach designed to hook students from the first minute.'
    ],
    stack: ['Figma', 'Illustrator', 'React JS', 'Styled-components']
  },
  inCar: {
    background: {
      src: '/images/teoricoFacil/teorico-in-car-bg.webp',
      alt: 'Hands on the steering wheel while driving'
    },
    phones: [
      {
        src: '/images/teoricoFacil/mockup-map.webp',
        alt: 'Progress map screen'
      },
      {
        src: '/images/teoricoFacil/mockup-exam-test.webp',
        alt: 'Exam screen'
      },
      {
        src: '/images/teoricoFacil/mockup-test-results.webp',
        alt: 'Test results screen'
      }
    ]
  },
  responsive: {
    paragraphs: [
      'The responsive design was built around the different moments and ways of studying with Teórico Fácil.',
      'On mobile, theory, tests and the map stay quick and easy to reach, so studying can happen from anywhere.',
      'On desktop, the extra space and screen size make theory more comfortable and visual to browse.',
      'The structure stays consistent, while each device puts first the functions that make studying comfortable.'
    ],
    city: {
      src: '/images/teoricoFacil/teorico-responsive-highway.webp',
      alt: 'Long highway lined with trees'
    },
    laptop: {
      src: '/images/teoricoFacil/teorico-responsive-computer.webp',
      alt: 'Person studying the theory test on a laptop'
    }
  },
  'mockup-statistics': {
    src: '/images/teoricoFacil/teorico-statistics.webp',
    alt: 'Study statistics on a phone',
    paragraphs: [
      'Turn progress into a collection of small objectives: Move forward on the map, improve each stop, collect screws and unlock exclusive educational content.',
      'Because if passing is the destination, the path also has to be worth walking.'
    ]
  },
  mosaico: {
    background: {
      src: '/images/teoricoFacil/teorico-mosaic-bg.webp',
      alt: 'Woman taking her driver’s license test in a vehicle'
    },
    mosaic: {
      src: '/images/teoricoFacil/teorico-mosaico.png',
      alt: 'Teórico Fácil screen mosaic'
    },
    lines: [
      'Take tests',
      'Improve your results',
      'And pass the exam'
    ]
  },
  level: {
    background: {
      src: '/images/teoricoFacil/japan-urban-landscape.webp',
      alt: 'Urban landscape'
    },
    gif: {
      src: '/images/teoricoFacil/cambio_nivel.gif',
      alt: 'Progress map animation'
    },
    header: {
      src: '/images/teoricoFacil/header.png',
      alt: 'Teórico Fácil header'
    },
    mapFooter: {
      src: '/images/teoricoFacil/map-footer.png',
      alt: 'App navigation'
    }
  }
};

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
      src: '/images/teoricoFacil/luxury-car-interior-steering-wheel-shift-lever-dashboard-computer.webp',
      alt: 'Car interior'
    },
    phones: [
      {
        src: '/images/teoricoFacil/mockup-map.webp',
        alt: 'Progress map screen'
      },
      {
        src: '/images/teoricoFacil/mockup-study-test-selected.webp',
        alt: 'Test screen with a selected option'
      },
      {
        src: '/images/teoricoFacil/mockup-study-test-corrected.webp',
        alt: 'Test screen with the correction'
      }
    ]
  },
  flexible: {
    paragraphs: [
      'The responsive design was built around the different moments and ways of studying with Teórico Fácil.',
      'On mobile, theory, tests and the map stay quick and easy to reach, so studying can happen from anywhere.',
      'On desktop, the extra space and screen size make theory more comfortable and visual to browse.',
      'The structure stays consistent, while each device puts first the functions that make studying comfortable.'
    ],
    city: {
      src: '/images/teoricoFacil/japan-urban-landscape.webp',
      alt: 'Urban landscape'
    },
    laptop: {
      src: '/images/teoricoFacil/close-up-girl-learning-with-laptop.webp',
      alt: 'Person studying the theory test on a laptop'
    }
  }
};

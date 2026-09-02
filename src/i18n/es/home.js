import { PROYECT_LINKS } from '../../constants/informationLinks';

export const home = {
  projects: [
    {
      title: 'TEÓRICO COCHE FÁCIL',
      description:
        'Transforma temario aburrido en una experiencia visual, interactiva y adictiva para los alumnos.',
      href: PROYECT_LINKS.teoricoFacil,
      preview: {
        left: '/images/teoricoFacil/features1.png',
        center: '/images/teoricoFacil/features2.png',
        right: '/images/teoricoFacil/features5.png'
      },
      stack: [
        { src: '/images/stackIcons/figma.svg', alt: 'Figma' },
        { src: '/images/stackIcons/ilustrador-adobe.svg', alt: 'Adobe Illustrator' },
        { src: '/images/stackIcons/html-5.svg', alt: 'HTML' },
        { src: '/images/stackIcons/css.svg', alt: 'CSS' }
      ]
    },
    {
      title: 'MEDICIÓN DE CONSUMO',
      description:
        'Diseño de una plataforma para autónomos y empresas que simplifica el control y análisis de gastos de consumo en un solo vistazo.',
      href: '#',
      preview: {
        left: '/images/teoricoFacil/features3.png',
        center: '/images/teoricoFacil/features4.png',
        right: '/images/teoricoFacil/features6.png'
      },
      stack: [
        { src: '/images/stackIcons/figma.svg', alt: 'Figma' },
        { src: '/images/stackIcons/ilustrador-adobe.svg', alt: 'Adobe Illustrator' },
        { src: '/images/stackIcons/node.svg', alt: 'Node.js' },
        { src: '/images/stackIcons/mongoDB.svg', alt: 'MongoDB' }
      ]
    }
  ]
};

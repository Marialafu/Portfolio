import { ROUTES } from '../../lib/config/router/routes';
import { PROYECT_LINKS } from '../../constants/informationLinks';

export const home = {
  projects: [
    {
      title: 'TEÓRICO COCHE FÁCIL',
      description:
        'Transforma temario aburrido en una experiencia visual, interactiva y adictiva para los alumnos.',
      href: PROYECT_LINKS.teoricoFacil,
      path: ROUTES.teoricoFacil,
      preview: {
        left: '/images/teoricoFacil/teorico-left.webp',
        center: '/images/teoricoFacil/teorico-center.webp',
        right: '/images/teoricoFacil/teorico-rigth.webp'
      },
      stack: [
        { src: '/images/stackIcons/figma.svg', alt: 'Figma' },
        { src: '/images/stackIcons/adobe-illustrator.svg', alt: 'Adobe Illustrator' },
        { src: '/images/stackIcons/react.svg', alt: 'React' },
        { src: '/images/stackIcons/javascript.svg', alt: 'JavaScript' }
      ]
    },
    {
      title: 'MEDICIÓN DE CONSUMO',
      description:
        'Simplifica el control y análisis de gastos de consumo en un solo vistazo.',
      href: '#',
      preview: {
        left: '/images/consumptionTraking/consumption-traking-left.webp',
        center: '/images/consumptionTraking/consumption-traking-center.webp',
        right: '/images/consumptionTraking/consumption-traking-right.webp'
      },
      stack: [
        { src: '/images/stackIcons/figma.svg', alt: 'Figma' },
        { src: '/images/stackIcons/javascript.svg', alt: 'JavaScript' },
        { src: '/images/stackIcons/chartjs.svg', alt: 'Chart.js' }
      ]
    }
  ]
};

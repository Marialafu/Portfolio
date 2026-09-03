import { PROYECT_LINKS } from '../../constants/informationLinks';

export const home = {
  projects: [
    {
      title: 'TEÓRICO COCHE FÁCIL',
      description:
        'Turn boring theory content into a visual, interactive and addictive experience for students.',
      href: PROYECT_LINKS.teoricoFacil,
      preview: {
        left: '/images/teoricoFacil/teorico-left.png',
        center: '/images/teoricoFacil/teorico-center.png',
        right: '/images/teoricoFacil/teorico-rigth.png'
      },
      stack: [
        { src: '/images/stackIcons/figma.svg', alt: 'Figma' },
        { src: '/images/stackIcons/adobe-illustrator.svg', alt: 'Adobe Illustrator' },
        { src: '/images/stackIcons/react.svg', alt: 'React' },
        { src: '/images/stackIcons/javascript.svg', alt: 'JavaScript' }
      ]
    },
    {
      title: 'CONSUMPTION TRACKING',
      description:
        'Design of a platform for freelancers and companies that simplifies monitoring and analysing consumption costs at a glance.',
      href: '#',
      preview: {
        left: '/images/consumptionTraking/consumptionTracking-left.png',
        center: '/images/consumptionTraking/consumptionTracking-center.png',
        right: '/images/consumptionTraking/consumptionTracking-rigth.png'
      },
      stack: [
        { src: '/images/stackIcons/figma.svg', alt: 'Figma' },
        { src: '/images/stackIcons/javascript.svg', alt: 'JavaScript' },
        { src: '/images/stackIcons/chartjs.svg', alt: 'Chart.js' }
      ]
    }
  ]
};

import { PROYECT_LINKS } from '../../constants/informationLinks';

export const home = {
  projects: [
    {
      title: 'TEÓRICO COCHE FÁCIL',
      description:
        'Turn boring theory content into a visual, interactive and addictive experience for students.',
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
      title: 'CONSUMPTION TRACKING',
      description:
        'Design of a platform for freelancers and companies that simplifies monitoring and analysing consumption costs at a glance.',
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

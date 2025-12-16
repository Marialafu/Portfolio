import { useContext } from 'react';
import { LanguageContext } from '../../../context/LanguageContext';
import Header from './header/Header';
import './TeoricoInHome.css';
import Marquee from '../commons/marquee/Marquee';
import Carousel from '../commons/carousel/Carousel';
import Cards from '../commons/cards/Cards';
import HighlightLabel from './highlightLabel/HighlightLabel';
import ProjectsDivider from '../commons/projectsDivider/ProjectsDivider';

const TeoricoInHome = () => {
  const { text } = useContext(LanguageContext);
  const { header, stack, features, role } = text.projects.teoricofacil;

  return (
    <div className='teoricoInHome-container'>
      <Header />

      <Marquee stack={stack} />
      <Carousel features={features} />
      <Cards cards={role} />
      <HighlightLabel />

      <div className='teoricoInHome-footer'>
        <a
          href={header.link}
          target='_blank'
          rel='noopener noreferrer'
          className='button secondary large'
        >
          <img
            src='/images/social/web.svg'
            alt='web'
          />
          {text.common.buttons.platform}
        </a>
      </div>
      <ProjectsDivider />
    </div>
  );
};

export default TeoricoInHome;

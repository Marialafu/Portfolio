import { useContext } from 'react';
import { LanguageContext } from '../../../context/LanguageContext';
import Header from './header/Header';
import './TeoricoInHome.css';
import Marquee from '../commons/marquee/Marquee';
import Carousel from '../commons/carousel/Carousel';
import Cards from '../commons/cards/Cards';
import HighlightLabel from './highlightLabel/HighlightLabel';

const TeoricoInHome = () => {
  const { text } = useContext(LanguageContext);
  const { stack, features, role } = text.proyects.teoricofacil;

  return (
    <div className='teoricoInHome-container'>
      <Header />
      <Marquee stack={stack} />
      <Carousel features={features} />
      <Cards cards={role} />
      <HighlightLabel />
    </div>
  );
};

export default TeoricoInHome;

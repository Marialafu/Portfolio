import './HeroHeader.css';
import { useContext } from 'react';
import { LanguageContext } from '../../../context/LanguageContext';
import useIsDesktop from '../../../hooks/responsive/responsive';

const HeroHeader = () => {
  const { text } = useContext(LanguageContext);
  const { hero } = text;

  const isDesktop = useIsDesktop();

  return (
    <div className='heroSection-container'>
      {!isDesktop && (
        <div className='heroTag-container'>
          {hero.tag.map((tag, i) => (
            <div
              key={tag}
              className='heroTag-item'
            >
              <label>{tag}</label>
              {i < hero.tag.length - 1 && <span className='divider' />}
            </div>
          ))}
        </div>
      )}

      <img
        className='hero-img'
        src='/images/stackIcons/figma.svg'
        alt='Mi perfil'
      />
    </div>
  );
};

export default HeroHeader;

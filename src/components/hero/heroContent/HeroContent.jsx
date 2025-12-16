import './HeroContent.css';
import { useContext } from 'react';
import { LanguageContext } from '../../../context/LanguageContext';
import { v4 } from 'uuid';

const HeroContent = () => {
  const { text } = useContext(LanguageContext);
  const { hero } = text;

  return (
    <div className='heroContent-container'>
      <div className='flex-column small-gap hero-intro-container'>
        <label className='label'>{hero.intro}</label>
        <h1 className='heading-1'> {hero.name} </h1>
        <p className='body'>{hero.description}</p>
      </div>

      <div className='hero-stack-container'>
        {hero.stack.map((item, i) => (
          <div
            key={v4()}
            className='hero-item-stack-container'
          >
            <label className='label'>{item}</label>
            {i < hero.stack.length - 1 && <div className='divider' />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroContent;

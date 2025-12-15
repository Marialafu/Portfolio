import './HeroFooter.css';
import { useContext } from 'react';
import { LanguageContext } from '../../../context/LanguageContext';

const HeroFooter = () => {
  const { text } = useContext(LanguageContext);
  const { hero } = text;

  return (
    <div className='flex-column small-gap'>
      <div className='social-container'>
        <div className='item-social-container'>
          <img
            className='social-img'
            src='/images/social/github.svg'
            alt='github'
          />
          <label className='label'>Github</label>
        </div>
        <div className='item-social-container'>
          <img
            className='social-img'
            src='/images/social/linkedin.svg'
            alt='linkedin'
          />
          <label className='label'>Linkedin</label>
        </div>
      </div>

      <button className='button secondary large hero-footer-button'>
        <img
          src='/images/icons/down_arrow.svg'
          alt='flecha'
        />
        {hero.primaryCTA}
      </button>
    </div>
  );
};

export default HeroFooter;

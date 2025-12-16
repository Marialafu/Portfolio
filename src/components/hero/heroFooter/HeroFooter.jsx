import './HeroFooter.css';
import { useContext } from 'react';
import { LanguageContext } from '../../../context/LanguageContext';
import { PERSONAL_DATA } from '../../../constants/informationLinks';

const HeroFooter = () => {
  const { text } = useContext(LanguageContext);
  const { hero } = text;

  return (
    <div className='flex-column small-gap'>
      <div className='social-container'>
        <a
          className='item-social-container'
          href={PERSONAL_DATA.github}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            className='social-img'
            src='/images/social/github.svg'
            alt='github'
          />
          <label className='label'>Github</label>
        </a>
        <a
          className='item-social-container'
          href={PERSONAL_DATA.linkedin}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            className='social-img'
            src='/images/social/linkedin.svg'
            alt='linkedin'
          />
          <label className='label'>Linkedin</label>
        </a>
        <a
          className='item-social-container'
          href={`mailto:${PERSONAL_DATA.email}`}
        >
          <img
            className='social-img'
            src='/images/social/email.png'
            alt='email'
          />
          <label className='label'>Email</label>
        </a>
      </div>

      <button
        className='button secondary large hero-footer-button'
        onClick={() => {
          document
            .getElementById('projects')
            ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }}
      >
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

import './Footer.css';
import { PERSONAL_DATA } from '../../constants/informationLinks';

const Footer = () => {
  return (
    <footer className='flex-row center footer-container'>
      <a
        className='button secondary'
        href={PERSONAL_DATA.linkedin}
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          className='footer-icon'
          src='/images/social/linkedin.svg'
          alt='LinkedIn'
        />
      </a>
      <a
        className='button secondary'
        href={`mailto:${PERSONAL_DATA.email}`}
      >
        <img
          className='footer-icon'
          src='/images/social/email.svg'
          alt='Email'
        />
      </a>
      <a
        className='button secondary'
        href={PERSONAL_DATA.github}
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          className='footer-icon'
          src='/images/social/github.svg'
          alt='GitHub'
        />
      </a>
    </footer>
  );
};

export default Footer;

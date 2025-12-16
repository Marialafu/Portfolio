import './CTButtons.css';
import { useContext } from 'react';
import { LanguageContext } from '../../../context/LanguageContext';
import { PERSONAL_DATA } from '../../../constants/informationLinks';

const CTAButtons = () => {
  const { text, lang } = useContext(LanguageContext);
  const { cta } = text.navbar;

  return (
    <div className='flex-row CTAButtons-container'>
      <a
        className='button primary large'
        href={`mailto:${PERSONAL_DATA.email}`}
      >
        {cta.contact}
      </a>
      <a
        className='button secondary small'
        href={`/documents/MariaLafuente_CV_${lang}.pdf`}
        target='_blank'
        rel='noopener noreferrer'
      >
        {cta.cv}
      </a>
    </div>
  );
};

export default CTAButtons;

import './LanguageSwitcher.css';
import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

const LanguageSwitcher = () => {
  const { setLang, lang } = useContext(LanguageContext);

  const spanish = 'es';
  const english = 'en';

  const defineClass = language =>
    `language-button heading-3 ${lang === language ? '' : 'unselected'}`;

  return (
    <div className='language-container'>
      <button
        className={defineClass(spanish)}
        onClick={() => setLang(spanish)}
      >
        {spanish}
      </button>
      <span className='divider' />
      <button
        className={defineClass(english)}
        onClick={() => setLang(english)}
      >
        {english}
      </button>
    </div>
  );
};

export default LanguageSwitcher;

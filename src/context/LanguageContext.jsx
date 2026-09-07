import { createContext, useState } from 'react';
import { hero as esHero } from '../i18n/es/hero';
import { navbar as esNavbar } from '../i18n/es/navbar';
import { common as esCommon } from '../i18n/es/common';
import { home as esHome } from '../i18n/es/home';
import { teoricoFacil as esTeoricoFacil } from '../i18n/es/teoricoFacil';

import { navbar as enNavbar } from '../i18n/en/navbar';
import { hero as enHero } from '../i18n/en/hero';
import { common as enCommon } from '../i18n/en/common';
import { home as enHome } from '../i18n/en/home';
import { teoricoFacil as enTeoricoFacil } from '../i18n/en/teoricoFacil';

export const LanguageContext = createContext();

const texts = {
  es: {
    hero: esHero,
    navbar: esNavbar,
    common: esCommon,
    home: esHome,
    teoricoFacil: esTeoricoFacil
  },
  en: {
    hero: enHero,
    navbar: enNavbar,
    common: enCommon,
    home: enHome,
    teoricoFacil: enTeoricoFacil
  }
};

const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('es');

  return (
    <LanguageContext.Provider value={{ lang, setLang, text: texts[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;

import { createContext, useState } from 'react';
import { hero as esHero } from '../i18n/es/hero';
import { navbar as esNavbar } from '../i18n/es/navbar';
import { common as esCommon } from '../i18n/es/common';
import { features as esFeatures } from '../i18n/es/proyects/teoricoFacil/features';
import { header as esHeader } from '../i18n/es/proyects/teoricoFacil/header';
import { highlights as esHighlights } from '../i18n/es/proyects/teoricoFacil/highlights';
import { role as esRole } from '../i18n/es/proyects/teoricoFacil/role';
import { stack as esStack } from '../i18n/es/proyects/teoricoFacil/stack';

import { navbar as enNavbar } from '../i18n/en/navbar';

export const LanguageContext = createContext();

const texts = {
  es: {
    hero: esHero,
    navbar: esNavbar,
    common: esCommon,
    proyects: {
      teoricofacil: {
        features: esFeatures,
        header: esHeader,
        highlights: esHighlights,
        role: esRole,
        stack: esStack
      }
    }
  },
  en: {
    navbar: enNavbar
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

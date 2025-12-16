import { createContext, useState } from 'react';
import { hero as esHero } from '../i18n/es/hero';
import { navbar as esNavbar } from '../i18n/es/navbar';
import { common as esCommon } from '../i18n/es/common';
import { features as esFeatures } from '../i18n/es/projects/teoricoFacil/features';
import { header as esHeader } from '../i18n/es/projects/teoricoFacil/header';
import { highlights as esHighlights } from '../i18n/es/projects/teoricoFacil/highlights';
import { role as esRole } from '../i18n/es/projects/teoricoFacil/role';
import { stack as esStack } from '../i18n/es/projects/teoricoFacil/stack';
import { footer as esFooter } from '../i18n/es/footer';

import { navbar as enNavbar } from '../i18n/en/navbar';
import { hero as enHero } from '../i18n/en/hero';
import { common as enCommon } from '../i18n/en/common';
import { footer as enFooter } from '../i18n/en/footer';
import { features as enFeatures } from '../i18n/en/projects/teoricoFacil/features';
import { header as enHeader } from '../i18n/en/projects/teoricoFacil/header';
import { highlights as enHighlights } from '../i18n/en/projects/teoricoFacil/highlights';
import { role as enRole } from '../i18n/en/projects/teoricoFacil/role';
import { stack as enStack } from '../i18n/en/projects/teoricoFacil/stack';

export const LanguageContext = createContext();

const texts = {
  es: {
    hero: esHero,
    navbar: esNavbar,
    common: esCommon,
    footer: esFooter,
    projects: {
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
    hero: enHero,
    navbar: enNavbar,
    common: enCommon,
    footer: enFooter,
    projects: {
      teoricofacil: {
        features: enFeatures,
        header: enHeader,
        highlights: enHighlights,
        role: enRole,
        stack: enStack
      }
    }
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

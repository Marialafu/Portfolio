import { BrowserRouter } from 'react-router-dom';
import Router from './lib/config/router/Router';
import './styles/index.css';
import './styles/typography.css';
import './styles/variables.css';
import './styles/buttons.css';
import './styles/containers.css';
import './styles/UI.css';
import LanguageProvider from './context/LanguageContext';
import ScrollToTop from './components/scrollToTop/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <ScrollToTop />
        <Router />
      </LanguageProvider>
    </BrowserRouter>
  );
};

export default App;

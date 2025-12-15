import { BrowserRouter } from 'react-router-dom';
import Router from './lib/config/router/Router';
import './styles/index.css';
import './styles/typography.css';
import './styles/variables.css';
import './styles/buttons.css';
import './styles/containers.css';
import './styles/UI.css';
import LanguageProvider from './context/LanguageContext';

const App = () => {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Router />
      </LanguageProvider>
    </BrowserRouter>
  );
};

export default App;

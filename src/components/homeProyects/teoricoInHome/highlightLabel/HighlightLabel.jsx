import { useContext } from 'react';
import './HighlightLabel.css';
import { LanguageContext } from '../../../../context/LanguageContext';

const HighlightLabel = () => {
  const { text } = useContext(LanguageContext);
  const { highlights } = text.proyects.teoricofacil;

  return (
    <div className='highlight-container'>
      <span className='body-highlights highlight-label'>
        {highlights.highlight}
      </span>
    </div>
  );
};

export default HighlightLabel;

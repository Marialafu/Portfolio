import './CTButtons.css';
import { useContext } from 'react';
import { LanguageContext } from '../../../context/LanguageContext';

const CTAButtons = () => {
  const { text } = useContext(LanguageContext);
  const { cta } = text.navbar;

  return (
    <div className='flex-row CTAButtons-container'>
      <button className='button primary large'>{cta.contact}</button>
      <button className='button secondary small'>{cta.cv}</button>
    </div>
  );
};

export default CTAButtons;

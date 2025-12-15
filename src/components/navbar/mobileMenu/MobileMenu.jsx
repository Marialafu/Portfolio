import { useState } from 'react';
import './MobileMenu.css';
import LanguageSwitcher from '../../languageSwitcher/LanguageSwitcher';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={`burger ${isOpen ? 'open' : ''} `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span />
        <span />
        <span />
      </button>
      {isOpen && (
        <div className='menu-container'>
          <LanguageSwitcher />
        </div>
      )}
    </>
  );
};

export default MobileMenu;

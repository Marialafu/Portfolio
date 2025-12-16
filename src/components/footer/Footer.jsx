import './Footer.css';
import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { v4 } from 'uuid';

const Footer = () => {
  const { text } = useContext(LanguageContext);
  const { footer } = text;

  return (
    <div className='flex-column small-gap footer-container'>
      <div className='footerTag-container'>
        {footer.tag.map((tag, i) => (
          <div
            key={v4()}
            className='footerTag-item'
          >
            <label>{tag}</label>
            {i < footer.tag.length - 1 && <span className='divider' />}
          </div>
        ))}
      </div>
      <div className='footerTag-container'>
        <span>{footer.contact.phone}</span>
        <span>{footer.contact.email}</span>
      </div>
    </div>
  );
};

export default Footer;

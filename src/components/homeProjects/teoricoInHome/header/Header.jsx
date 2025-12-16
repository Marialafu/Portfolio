import { useContext } from 'react';
import { LanguageContext } from '../../../../context/LanguageContext';
import './Header.css';
import Title from '../../commons/title/Title';
import BulletPoints from '../../../bulletPoints/BulletPoints';

const Header = () => {
  const { text } = useContext(LanguageContext);
  const { header } = text.projects.teoricofacil;

  return (
    <section
      id='projects'
      className='flex-column large-gap'
    >
      <Title
        title={header.title}
        subtitle={header.subtitle}
        status={header.status}
        statusKey={header.statusKey}
      />
      <div className='header-content-container'>
        <BulletPoints
          title={header.bulletPoints.title}
          bulletPoints={header.bulletPoints.items}
        />

        <div className='flex-column small-gap'>
          <p className='body'>{header.description}</p>
          <p className='body'>{header.goal}</p>
        </div>
      </div>
    </section>
  );
};

export default Header;

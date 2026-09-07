import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import ProjectIntro from '../../components/projectIntro/ProjectIntro';
import TeoricoInCar from '../../components/teoricoFacil/TeoricoInCar';
import TeoricoFlexible from '../../components/teoricoFacil/TeoricoFlexible';
import './TeoricoFacil.css';

const TeoricoFacil = () => {
  const { intro, inCar, flexible } = useContext(LanguageContext).text.teoricoFacil;

  return (
    <div>
      <Navbar />
      <main className='teoricoFacil'>
        <ProjectIntro
          title={intro.title}
          href={intro.href}
          openLabel={intro.openLabel}
          paragraphs={intro.paragraphs}
          stack={intro.stack}
        />
        <TeoricoInCar
          background={inCar.background}
          phones={inCar.phones}
        />
        <TeoricoFlexible
          paragraphs={flexible.paragraphs}
          city={flexible.city}
          laptop={flexible.laptop}
        />
      </main>
      <Footer />
    </div>
  );
};

export default TeoricoFacil;

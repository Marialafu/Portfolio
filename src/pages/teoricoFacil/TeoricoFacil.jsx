import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import ProjectIntro from '../../components/projectIntro/ProjectIntro';
import TeoricoInCar from '../../components/teoricoFacil/TeoricoInCar';
import TeoricoFlexible from '../../components/teoricoFacil/TeoricoFlexible';
import TeoricoMosaico from '../../components/teoricoFacil/TeoricoMosaico';
import TeoricoProgress from '../../components/teoricoFacil/TeoricoProgress';
import TeoricoLevel from '../../components/teoricoFacil/TeoricoLevel';
import './TeoricoFacil.css';

const TeoricoFacil = () => {
  const teoricoFacil = useContext(LanguageContext).text.teoricoFacil;
  const { intro, inCar, flexible, mosaico, level } = teoricoFacil;
  const mockupStatistics = teoricoFacil['mockup-statistics'];

  return (
    <div className='teoricoFacil-shell'>
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
        <div className='mockup-statistics'>
          <img
            src={mockupStatistics.src}
            alt={mockupStatistics.alt}
          />
        </div>
        <TeoricoProgress
          paragraphs={mockupStatistics.paragraphs}
          goals={mockupStatistics.goals}
          closing={mockupStatistics.closing}
        />
        <TeoricoMosaico
          background={mosaico.background}
          mosaic={mosaico.mosaic}
          lines={mosaico.lines}
        />
        <TeoricoFlexible
          paragraphs={flexible.paragraphs}
          city={flexible.city}
          laptop={flexible.laptop}
        />
        <TeoricoLevel
          background={level.background}
          gif={level.gif}
          header={level.header}
          mapFooter={level.mapFooter}
        />
      </main>
      <Footer />
    </div>
  );
};

export default TeoricoFacil;

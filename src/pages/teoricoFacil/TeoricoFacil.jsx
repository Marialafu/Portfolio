import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import ProjectIntro from '../../components/projectIntro/ProjectIntro';
import TeoricoInCar from '../../components/teoricoFacil/TeoricoInCar';
import TeoricoResponsive from '../../components/teoricoFacil/TeoricoResponsive';
import TeoricoMosaico from '../../components/teoricoFacil/TeoricoMosaico';
import TeoricoProgress from '../../components/teoricoFacil/TeoricoProgress';
import TeoricoLevel from '../../components/teoricoFacil/TeoricoLevel';
import './TeoricoFacil.css';

const TeoricoFacil = () => {
  const teoricoFacil = useContext(LanguageContext).text.teoricoFacil;
  const { intro, inCar, responsive, mosaico, level } = teoricoFacil;
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
          <picture>
            <source
              media='(min-width: 764px)'
              srcSet={mockupStatistics.src}
            />
            <img
              src={mockupStatistics.srcMobile}
              srcSet={mockupStatistics.srcMobile}
              alt={mockupStatistics.alt}
            />
          </picture>
        </div>
        <TeoricoProgress paragraphs={mockupStatistics.paragraphs} />
        <TeoricoMosaico
          background={mosaico.background}
          mosaic={mosaico.mosaic}
          lines={mosaico.lines}
        />
        <TeoricoResponsive
          paragraphs={responsive.paragraphs}
          city={responsive.city}
          laptop={responsive.laptop}
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

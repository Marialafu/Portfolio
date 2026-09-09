import './TeoricoMosaico.css';

const TeoricoMosaico = ({ background, mosaic }) => {
  return (
    <section className='teoricoMosaico'>
      <img
        className='teoricoMosaico-bg'
        src={background.src}
        alt={background.alt}
      />
      <img
        className='teoricoMosaico-overlay'
        src={mosaic.src}
        alt={mosaic.alt}
      />
    </section>
  );
};

export default TeoricoMosaico;

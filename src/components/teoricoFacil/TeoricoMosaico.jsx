import './TeoricoMosaico.css';

const TeoricoMosaico = ({ background, mosaic, lines = [] }) => {
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
      <p className='title teoricoMosaico-copy'>
        {lines.map(line => (
          <span key={line}>{line}</span>
        ))}
      </p>
    </section>
  );
};

export default TeoricoMosaico;

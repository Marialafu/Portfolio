import './TeoricoLevel.css';

const TeoricoLevel = ({ background, gif, header, mapFooter }) => {
  return (
    <section className='teoricoLevel'>
      <img
        className='teoricoLevel-bg'
        src={background.src}
        alt={background.alt}
      />
      <div className='teoricoLevel-screen'>
        <img
          className='teoricoLevel-gif'
          src={gif.src}
          alt={gif.alt}
        />
        <img
          className='teoricoLevel-header'
          src={header.src}
          alt={header.alt}
        />
        <img
          className='teoricoLevel-mapFooter'
          src={mapFooter.src}
          alt={mapFooter.alt}
        />
      </div>
    </section>
  );
};

export default TeoricoLevel;

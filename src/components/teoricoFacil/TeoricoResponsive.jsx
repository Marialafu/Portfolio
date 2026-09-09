import './TeoricoResponsive.css';

const TeoricoResponsive = ({ paragraphs, city, laptop }) => {
  return (
    <section className='teoricoResponsive'>
      <div className='teoricoResponsive-city'>
        <img
          src={city.src}
          alt={city.alt}
        />
      </div>

      <div className='teoricoResponsive-side'>
        <div className='teoricoResponsive-copy'>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className='body'>{paragraph}</p>
          ))}
        </div>
        <div className='teoricoResponsive-laptop'>
          <img
            src={laptop.src}
            alt={laptop.alt}
          />
        </div>
      </div>
    </section>
  );
};

export default TeoricoResponsive;

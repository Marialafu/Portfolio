import './TeoricoFlexible.css';

const TeoricoFlexible = ({ paragraphs, city, laptop }) => {
  return (
    <section className='teoricoFlexible'>
      <div className='teoricoFlexible-city'>
        <img
          src={city.src}
          alt={city.alt}
        />
      </div>

      <div className='teoricoFlexible-side'>
        <div className='teoricoFlexible-copy'>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className='body'>{paragraph}</p>
          ))}
        </div>
        <div className='teoricoFlexible-laptop'>
          <img
            src={laptop.src}
            alt={laptop.alt}
          />
        </div>
      </div>
    </section>
  );
};

export default TeoricoFlexible;

import './TeoricoInCar.css';

const TeoricoInCar = ({ background, phones = [] }) => {
  return (
    <section className='teoricoInCar'>
      <div className='teoricoInCar-bgWrap'>
        <img
          className='teoricoInCar-bg'
          src={background.src}
          alt={background.alt}
        />
      </div>
      <div className='teoricoInCar-phones'>
        {phones.map(phone => (
          <img
            key={phone.src}
            src={phone.src}
            alt={phone.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default TeoricoInCar;

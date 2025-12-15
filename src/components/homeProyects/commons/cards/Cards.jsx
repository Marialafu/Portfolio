import { v4 } from 'uuid';
import './Cards.css';

const Cards = ({ cards }) => {
  return (
    <div className='flex-column small-gap'>
      {cards?.title && <h3 className='heading-3'>{cards.title}</h3>}
      <div className='cards-wrapper'>
        {cards?.cards.map(card => {
          return (
            <div
              key={v4()}
              className='card-container'
            >
              <h4 className='header-4'>{card.title}</h4>
              <div className='flex-column item-container'>
                {card.items.map(item => (
                  <span
                    key={v4()}
                    className='body'
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;

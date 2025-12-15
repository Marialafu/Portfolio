import './Carousel.css';
import { useState, useMemo, useEffect } from 'react';

const CARD_WIDTH_REM = 12.75;
const REM_IN_PX = 16;
const CARD_WIDTH = CARD_WIDTH_REM * REM_IN_PX;

const Carousel = ({ features }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);

  const slides = features?.featuresSlides;
  const caption = features?.caption;
  const currentSlide = slides[currentIndex];
  console.log(currentSlide);

  const slidesIndexLength = slides.length;

  const prevIndex = (currentIndex - 1) % slidesIndexLength;
  const nextIndex = (currentIndex + 1) % slidesIndexLength;

  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const offset = useMemo(() => {
    return containerWidth / 2 - CARD_WIDTH / 2 - currentIndex * CARD_WIDTH;
  }, [currentIndex, containerWidth]);

  const handleClick = index => {
    if (index === prevIndex) {
      setCurrentIndex(prevIndex);
    } else if (index === nextIndex) {
      setCurrentIndex(nextIndex);
    }
  };

  if (!slides.length) return null;

  return (
    <div className='flex-column large-gap'>
      <div className='carousel-track-container'>
        <div
          className='carousel-track'
          style={{ transform: `translateX(${offset}px)` }}
        >
          {slides.map((slide, index) => {
            let position = '';

            if (index === currentIndex) position = 'card-center';
            else if (index === prevIndex || index === nextIndex)
              position = 'card-side';
            else position = 'hidden';

            return (
              <img
                key={slide.key}
                src={slide.img}
                className={`carousel-card ${position}`}
                onClick={() => handleClick(index)}
                alt='slide'
              />
            );
          })}
        </div>

        <span className='caption'>{caption}</span>
      </div>
      <div className='flex-column small-gap'>
        <h3 className='heading-3 card-title'>{currentSlide.title}</h3>
        <ul className='bullets-wrapper'>
          {currentSlide.description.map(item => (
            <li className='body'>{item}</li>
          ))}
        </ul>

        <p className='body'>{currentSlide.apprenticeship}</p>
      </div>
    </div>
  );
};

export default Carousel;

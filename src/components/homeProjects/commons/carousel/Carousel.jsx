import './Carousel.css';
import { useState, useMemo, useEffect } from 'react';
import useIsDesktop from '../../../../hooks/responsive/responsive';
import { v4 } from 'uuid';

const REM_IN_PX = 16;

const getCardWidth = viewportWidth =>
  viewportWidth >= 768 ? 15.0625 * REM_IN_PX : 15 * REM_IN_PX;

const Carousel = ({ features }) => {
  const isDesktop = useIsDesktop();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const cardWidth = useMemo(() => getCardWidth(viewportWidth), [viewportWidth]);

  const slides = features?.featuresSlides ?? [];
  const caption = features?.caption ?? '';
  const currentSlide = slides[currentIndex];

  const slidesLength = slides.length;

  const prevIndex = (currentIndex - 1 + slidesLength) % slidesLength;
  const nextIndex = (currentIndex + 1) % slidesLength;

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const offset = useMemo(() => {
    return viewportWidth / 2 - cardWidth / 2 - currentIndex * cardWidth;
  }, [viewportWidth, cardWidth, currentIndex]);

  const handleCardClick = index => {
    if (index === prevIndex || index === nextIndex) {
      setCurrentIndex(index);
    }
  };

  if (!slidesLength) return null;

  return (
    <div className='carousel-component-container'>
      <div className='carousel-track-container'>
        <div
          className='carousel-track'
          style={{ transform: `translateX(${offset}px)` }}
        >
          {slides.map((slide, index) => {
            const position =
              index === currentIndex
                ? 'card-center'
                : index === prevIndex || index === nextIndex
                ? 'card-side'
                : 'hidden';

            return (
              <img
                key={slide.key}
                src={slide.img}
                alt='slide'
                className={`carousel-card ${position}`}
                onClick={() => handleCardClick(index)}
              />
            );
          })}
        </div>

        <span className='caption'>{caption}</span>
      </div>

      <div
        className={`text-container flex-column ${
          isDesktop ? 'large-gap' : 'medium-gap'
        }`}
      >
        <h3 className='heading-3 card-title'>{currentSlide.title}</h3>

        <ul className='bullets-wrapper'>
          {currentSlide.description.map(item => (
            <li
              key={v4()}
              className='body'
            >
              {item}
            </li>
          ))}
        </ul>

        <p className='body'>{currentSlide.apprenticeship}</p>
      </div>
    </div>
  );
};

export default Carousel;

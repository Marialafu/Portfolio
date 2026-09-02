import './Hero.css';
import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import useIsDesktop from '../../hooks/responsive/responsive';

const VIDEO_MAX_WIDTH = 800;

const Hero = () => {
  const { text } = useContext(LanguageContext);
  const { hero } = text;
  const isWide = useIsDesktop(VIDEO_MAX_WIDTH);

  return (
    <section className='flex-column'>
      <div className='heroHeader'>
        <video
          className='heroHeader-collage'
          autoPlay
          muted
          loop
          playsInline
          preload='auto'
        >
          <source
            src='/images/hero/hero.mp4'
            type='video/mp4'
          />
        </video>
      </div>

      <div className='flex-column large-gap center'>
        <div className='flex-column center'>
          <h2 className='flex-column center heroHeader-title'>
            <span className='heroHeader-kicker'>{hero.headlineKicker}</span>
            <span className='heroHeader-headline'>{hero.headline}</span>
          </h2>
          <p className='heroHeader-signature'>{hero.signature}</p>
        </div>

        <div
          className={
            isWide
              ? 'flex-row medium-gap center'
              : 'flex-column small-gap center'
          }
        >
          {hero.tag.map((tag, i) => (
            <div
              key={tag}
              className={
                isWide
                  ? 'flex-row medium-gap center'
                  : 'flex-column small-gap center'
              }
            >
              {i > 0 && (
                <span
                  className={isWide ? 'divider vertical' : 'divider horizontal'}
                  aria-hidden='true'
                />
              )}
              <span className='body'>{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

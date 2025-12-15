import './Hero.css';
import HeroHeader from './heroHeader/HeroHeader';
import HeroContent from './heroContent/HeroContent';
import HeroFooter from './heroFooter/HeroFooter';

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-wrapper'>
        <HeroHeader />
        <HeroContent />
      </div>

      <HeroFooter />
    </div>
  );
};

export default Hero;

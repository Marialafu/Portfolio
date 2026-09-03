import Hero from '../../components/hero/Hero';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import HomeProjects from '../../components/homeProjects/HomeProjects';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div className='home-firstScreen'>
        <Navbar />
        <Hero />
      </div>
      <HomeProjects />
      <Footer />
    </div>
  );
};

export default Home;

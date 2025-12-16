import './Home.css';
import Hero from '../../components/hero/Hero';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import TeoricoInHome from '../../components/homePorjects/teoricoInHome/TeoricoInHome';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <div className='flex-column large-gap home-projects'>
        <TeoricoInHome />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

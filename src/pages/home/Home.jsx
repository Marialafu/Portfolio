import './Home.css';
import Hero from '../../components/hero/Hero';
import Navbar from '../../components/navbar/Navbar';
import TeoricoInHome from '../../components/homeprojects/teoricoInHome/TeoricoInHome';
import Footer from '../../components/footer/Footer';

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

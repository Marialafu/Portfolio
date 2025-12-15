import './Home.css';
import Hero from '../../components/hero/Hero';
import Navbar from '../../components/navbar/Navbar';
import TeoricoInHome from '../../components/homeProyects/teoricoInHome/TeoricoInHome';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <div className='flex-column large-gap home-proyects'>
        <TeoricoInHome />
      </div>
    </div>
  );
};

export default Home;

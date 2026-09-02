import Hero from '../../components/hero/Hero';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import HomeProjects from '../../components/homeProjects/HomeProjects';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HomeProjects />
      <Footer />
    </div>
  );
};

export default Home;

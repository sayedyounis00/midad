import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Categories from './components/Categories';
import HowItWorks from './components/HowItWorks';
import WhyUs from './components/WhyUs';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      <Stats />
      <Categories />
      <HowItWorks />
      <WhyUs />
      <FAQ />
      <Footer />
    </div>
  );
}

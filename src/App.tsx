import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Reviews from './components/Reviews';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-[#6B8E23] selection:text-white">
      <Navigation />
      <Hero />
      <Services />
      <WhyChooseUs />
      <About />
      <Reviews />
      <Process />
      <FAQ />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

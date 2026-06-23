import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Drivers from './components/Drivers';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-md lg:max-w-none mx-auto relative">
        <main>
          <Navbar />
          <Hero />
          <Destinations />
          <Drivers />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
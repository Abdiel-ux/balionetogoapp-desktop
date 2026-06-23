import { useState, useEffect } from 'react';
import logo from '../assets/images/brand_logo.png';

export default function Navbar() {
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('home')?.offsetHeight || window.innerHeight;
      setIsPastHero(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    const heroSection = document.getElementById('home');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-30 transition-all duration-500 ease-in-out">
      <div className="flex items-center justify-center py-6" style={{ paddingLeft: 'clamp(1rem, 4vw, 1.5rem)', paddingRight: 'clamp(1rem, 4vw, 1.5rem)' }}>
        <div
          onClick={handleLogoClick}
          className={`relative flex items-center border-2 max-w-full transition-all duration-500 cursor-pointer ${
            isPastHero ? 'border-white/30' : 'border-white'
          }`}
          style={{
            gap: 'clamp(0.875rem, 4.71vw, 1.25rem)',
            paddingLeft: 'clamp(1.1rem, 6.59vw, 1.75rem)',
            paddingRight: 'clamp(1.1rem, 6.59vw, 1.75rem)',
            paddingTop: 'clamp(0.5rem, 2.82vw, 0.75rem)',
            paddingBottom: 'clamp(0.5rem, 2.82vw, 0.75rem)',
          }}
        >
          {/* Blue glow blur - hanya aktif setelah scroll melewati hero */}
          <div
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-56 lg:w-72 h-32 lg:h-40 rounded-full bg-[#106BAA] blur-2xl transition-opacity duration-700 -z-10 ${
              isPastHero ? 'opacity-100' : 'opacity-0'
            }`}
          />

          <img
            src={logo}
            alt="BaliOneToGo Logo"
            className="relative z-10 flex-shrink-0"
            style={{ width: 'clamp(2.25rem, 13.18vw, 3.5rem)', height: 'clamp(2.25rem, 13.18vw, 3.5rem)' }}
          />
          <h2
            className="relative text-white font-normal tracking-wide z-10 whitespace-nowrap"
            style={{ fontSize: 'clamp(1.45rem, 8.47vw, 2.25rem)' }}
          >
            BaliOneToGo
          </h2>
        </div>
      </div>
    </header>
  );
}
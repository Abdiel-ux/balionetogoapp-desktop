import { useState, useEffect } from 'react';
import arrowIcon from '../assets/images/Arrow 1.png';

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Daftar gambar background - tambahkan gambar Anda di sini
  const backgroundImages = [
    'src/assets/images/pura_lempuyang.png',
    'src/assets/images/pura_taman_ayun.png',
    'src/assets/images/nusa_penida 2.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section
      id="home"
      className="relative min-h-[88vh] lg:min-h-[92vh] flex flex-col items-center justify-between pb-12 lg:pb-20 overflow-hidden pt-6"
    >
      <div className="absolute inset-0 bg-black/50 z-10" />
      <img
        key={currentImageIndex}
        src={backgroundImages[currentImageIndex]}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-1000"
      />

      {/* Spacer agar konten tidak tertutup Navbar fixed */}
      <div className="h-[88px] lg:h-[112px]" />

      {/* Content */}
      <div className="relative z-20 max-w-md lg:max-w-2xl mx-auto px-6 w-full">
        <h1 className="text-white text-4xl lg:text-6xl font-bold leading-tight lg:leading-tight mb-4 lg:mb-6">
          Providing<br />
          professional and<br />
          experienced<br />
          drivers.
        </h1>
        <p className="text-white/70 text-sm lg:text-base leading-relaxed mb-8 lg:mb-10 max-w-xs lg:max-w-md">
          BaliOneToGo (BOTG) is a professional driver service in Bali dedicated to
          providing comfortable, safe, and enjoyable travel experiences for both local
          and international tourists.
        </p>
        <a href="#contact" className="inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 border-2 border-white transition-transform duration-300 hover:scale-110" aria-label="Get in touch">
          <img src={arrowIcon} alt="arrow" className="w-6 h-4 lg:w-7 lg:h-5" />
        </a>
      </div>
    </section>
  );
}
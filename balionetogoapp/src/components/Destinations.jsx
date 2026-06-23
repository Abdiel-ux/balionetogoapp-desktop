import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: 'Pura Lempuyang',
    location: 'East Bali',
    image: 'https://images.unsplash.com/photo-1604999333679-b86d54738315?w=600&q=80',
  },
  {
    id: 2,
    name: 'Tanah Lot',
    location: 'Tabanan',
    image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=80',
  },
  {
    id: 3,
    name: 'Tegallalang',
    location: 'Ubud',
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&q=80',
  },
  {
    id: 4,
    name: 'Uluwatu Temple',
    location: 'South Bali',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',
  },
  {
    id: 5,
    name: 'Seminyak Beach',
    location: 'Seminyak',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
  },
];

export default function Destinations() {
  const [current, setCurrent] = useState(1);
  const trackRef = useRef(null);
  const autoRef = useRef(null);

  const resetAuto = () => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % destinations.length);
    }, 3500);
  };

  useEffect(() => {
    resetAuto();
    return () => clearInterval(autoRef.current);
  }, []);

  const prev = () => { setCurrent((c) => (c - 1 + destinations.length) % destinations.length); resetAuto(); };
  const next = () => { setCurrent((c) => (c + 1) % destinations.length); resetAuto(); };

  return (
    <section id="destinations" className="py-14 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-md lg:max-w-2xl mx-auto">
        {/* Header */}
        <div className="px-6 mb-8 lg:mb-12">
          <h2 className="font-display text-[#0A1628] text-2xl lg:text-4xl font-bold">
            Where do you want to go?
          </h2>
        </div>

        {/* Carousel track */}
        <div className="relative">
          <div className="flex items-center justify-center gap-4 lg:gap-6 px-6 transition-all duration-500">
            {[-1, 0, 1].map((offset) => {
              const idx = (current + offset + destinations.length) % destinations.length;
              const dest = destinations[idx];
              const isCenter = offset === 0;
              return (
                <div
                  key={dest.id}
                  onClick={() => { if (offset !== 0) { setCurrent(idx); resetAuto(); } }}
                  className={`relative flex-shrink-0 overflow-hidden transition-all duration-500 cursor-pointer 
                    ${isCenter
                      ? 'w-40 h-56 lg:w-64 lg:h-80 shadow-lg shadow-[#0A1628]/20 scale-100'
                      : 'w-40 h-56 lg:w-64 lg:h-80 opacity-100 scale-100'
                    }`}
                >
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover"
                  />
                  {isCenter && (
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-transparent to-transparent" />
                  )}
                  {isCenter && (
                    <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6">
                      <p className="text-white font-semibold text-base lg:text-xl">{dest.name}</p>
                      <p className="text-white/70 text-xs lg:text-sm mt-0.5">{dest.location}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>  
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-6 lg:mt-8">
          {destinations.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); resetAuto(); }}
              className={`rounded-full transition-all duration-300 ${
                i === current ? 'w-6 h-2 bg-[#0A1628]' : 'w-2 h-2 bg-[#0A1628]/20 hover:bg-[#0A1628]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

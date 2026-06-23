import { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/flagged/photo-1565065550129-9d08baa3e42c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Uluwatu Temple' },
  { id: 2, src: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=80', alt: 'Tegallalang Rice Terrace' },
  { id: 3, src: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&q=80', alt: 'Tanah Lot Sunset' },
  { id: 4, src: 'https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Sekumpul Waterfall' },
  { id: 5, src: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Diamond Beach' },
  { id: 6, src: 'https://images.unsplash.com/photo-1557106160-c533b9d00071?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Kelingking Beach' },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? galleryImages : galleryImages.slice(0, 4);

  return (
    <section id="gallery" className="py-14 lg:py-24 bg-white">
      <div className="max-w-md lg:max-w-2xl mx-auto px-6">
        {/* Header */}
        <h2 className="font-display text-[#0A1628] text-2xl lg:text-4xl font-bold mb-2 lg:mb-3">Our Gallery</h2>
        <p className="text-[#0A1628]/60 text-sm lg:text-base leading-relaxed mb-8 lg:mb-12">
          Explore our gallery and discover memorable moments, beautiful destinations,
          and comfortable travel experiences with BaliOneToGo.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3 lg:gap-4 mb-8 lg:mb-10">
          {visible.map((img, i) => (
            <button
              key={img.id}
              onClick={() => setSelected(img)}
              className={`relative overflow-hidden group ${i === 0 ? 'col-span-2 h-52 lg:h-80' : 'h-36 lg:h-56'}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#0A1628]/0 group-hover:bg-[#0A1628]/20 transition-colors duration-300 rounded-2xl" />
            </button>
          ))}
        </div>

        {/* More button */}
        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="w-full py-3.5 lg:py-4 border border-[#0A1628] text-[#0A1628] font-semibold text-sm lg:text-base hover:bg-[#0A1628] hover:text-white transition-colors"
          >
            View More
          </button>
        )}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-[#0A1628]/90 z-50 flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white"
            onClick={() => setSelected(null)}
          >
            <X size={20} />
          </button>
          <img
            src={selected.src}
            alt={selected.alt}
            className="max-w-full max-h-[80vh] lg:max-h-[85vh] rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-8 text-white/70 text-sm">{selected.alt}</p>
        </div>
      )}
    </section>
  );
}

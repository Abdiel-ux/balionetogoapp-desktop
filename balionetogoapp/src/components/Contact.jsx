import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-14 lg:py-24 bg-[#000000]">
      <div className="max-w-md lg:max-w-2xl mx-auto px-6">
        {/* Header */}
        <h2 className="font-display text-white text-2xl lg:text-4xl font-bold mb-3 lg:mb-4">Contact Us</h2>
        <p className="text-white/60 text-sm lg:text-base leading-relaxed mb-10 lg:mb-14">
          If you need an experienced driver to take you and explore Bali, please contact us.
        </p>

        {/* Contact cards */}
        <div className="space-y-4 lg:space-y-5 mb-10 lg:mb-14">
          <a
            href="https://wa.me/6285857648051"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:bg-white/10 border border-white  px-5 py-4 transition-colors group justify-center"
          > 
            <div>
              <p className="text-white font-semibold text-xl lg:text-2xl tracking-wide">+62 858 5764 8051</p>
            </div>
          </a>

          <div className="flex items-center gap-3 text-white/30 text-xs">
            <div className="flex-1 h-px bg-white/10" />
            <span>or</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <a
            href="mailto:balionetogo@gmail.com?subject=Order&body=Hello%2C%20I%20want%20to%20order%20for%20__days%0AAt%20(date%20of%20pre-order)%20%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A"
            className="flex items-center gap-4 hover:bg-white/10 border border-white px-5 py-4 transition-colors group justify-center"
          >
            <div>
              <p className="text-white font-semibold text-xl lg:text-2xl">balionetogo@gmail.com</p>
            </div>
          </a>
        </div>

        {/* Location note */}
        <div className="flex items-start gap-3 lg:gap-4 bg-brand-white/10 px-5 lg:px-6 py-4 lg:py-5 border border-brand-white/20">
          <MapPin size={18} className="text-brand-white flex-shrink-0 mt-0.5 lg:w-5 lg:h-5" />
          <p className="text-white/70 text-sm lg:text-base leading-relaxed">
            Based in <span className="text-white font-medium">Bali, Indonesia</span> — serving all areas across the island for day trips, airport transfers, and multi-day tours.
          </p>
        </div>
      </div>
    </section>
  );
}

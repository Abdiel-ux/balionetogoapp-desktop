import footerLogo from '../assets/images/footer_logo.png';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Gallery', href: '#gallery' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-white/5 pt-10 lg:pt-16 pb-6 lg:pb-10">
      <div className="max-w-md lg:max-w-2xl mx-auto px-6">
        {/* Nav links */}
        <div className="grid gap-y-3 lg:gap-y-4 mb-10 lg:mb-14">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-black text-sm lg:text-base transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Brand */}
        <div className="flex items-center gap-2.5 mb-6 lg:mb-8">
          <img src={footerLogo} alt="BaliOneToGo Logo" className="lg:scale-110 lg:origin-left"/>
        </div>

        {/* Copyright */}
        <p className="text-black text-xs lg:text-sm">
          ©2026 by BaliOneToGo
        </p>
      </div>
    </footer>
  );
}

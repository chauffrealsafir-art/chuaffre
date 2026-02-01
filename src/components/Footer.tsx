import { Link } from 'react-router-dom';
import { Instagram, MessageCircle } from 'lucide-react';
import TikTokIcon from './TikTokIcon';

const XIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width={size}
    height={size}
    aria-hidden
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Branding */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl md:text-3xl font-bold text-amber-500 uppercase tracking-wide">
                AL SAFIR
              </span>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed max-w-xs">
              London&apos;s premier luxury chauffeur service. Professional, discreet, and reliable
              transport for every journey.
            </p>
            <div className="flex gap-4">
              <a
                href="https://x.com/SafirChauffeurs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-amber-500 transition-colors"
                aria-label="X (Twitter)"
              >
                <XIcon size={22} />
              </a>
              <a
                href="https://tiktok.com/@SafirChauffeurs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-amber-500 transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon size={22} />
              </a>
              <a
                href="https://instagram.com/saafir_chauffeur"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-amber-500 transition-colors"
                aria-label="Instagram @saafir_chauffeur"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://wa.me/447546238066"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-amber-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={22} />
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-sans font-bold text-white text-xs uppercase tracking-logo mb-4">
              Pages
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', to: '/' },
                { label: 'About', to: '/about' },
                { label: 'Services & Fleet', to: '/services' },
                { label: 'Book', to: '/book' },
                { label: 'Contact', to: '/contact' },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-white/80 hover:text-amber-500 text-sm uppercase tracking-wide transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans font-bold text-white text-xs uppercase tracking-logo mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                'Airport Transfers',
                'Corporate Travel',
                'Special Events',
                'Private Hire',
              ].map((label) => (
                <li key={label}>
                  <Link
                    to="/services"
                    className="text-white/80 hover:text-amber-500 text-sm uppercase tracking-wide transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-bold text-white text-xs uppercase tracking-logo mb-4">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-white/60 text-xs uppercase tracking-wide mb-1">Phone</p>
                <a
                  href="tel:+447546238066"
                  className="text-white/90 hover:text-amber-500 text-sm transition-colors"
                >
                  +44 (0) 7546 238066
                </a>
              </div>
              <div>
                <p className="text-white/60 text-xs uppercase tracking-wide mb-1">Email</p>
                <a
                  href="mailto:info@alsafirchauffeurs.co.uk"
                  className="text-white/90 hover:text-amber-500 text-sm transition-colors break-all"
                >
                  info@alsafirchauffeurs.co.uk
                </a>
              </div>
              <div>
                <p className="text-white/60 text-xs uppercase tracking-wide mb-1">Location</p>
                <p className="text-white/90 text-sm">London, United Kingdom</p>
              </div>
              <div className="pt-2">
                <Link
                  to="/book"
                  className="btn-animate inline-flex items-center gap-2 border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black px-4 py-2 rounded-full text-sm font-medium uppercase tracking-logo"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center space-y-2">
          <p className="text-white/50 text-xs uppercase tracking-wide">
            &copy; {currentYear} Al Safir Chauffeurs. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            <Link to="/privacy" className="hover:text-amber-500 transition-colors">Privacy Policy</Link>
            {' · '}
            <Link to="/terms" className="hover:text-amber-500 transition-colors">Terms & Conditions</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

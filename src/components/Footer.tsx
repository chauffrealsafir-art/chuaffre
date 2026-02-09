import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import TikTokIcon from './TikTokIcon';
import { fleet } from '../data/fleet';

/** Split array into N roughly equal columns (for footer fleet) */
function chunkByColumns<T>(arr: T[], columns: number): T[][] {
  const len = arr.length;
  const baseSize = Math.floor(len / columns);
  const remainder = len % columns;
  const chunks: T[][] = [];
  let i = 0;
  for (let c = 0; c < columns; c++) {
    const size = baseSize + (c < remainder ? 1 : 0);
    chunks.push(arr.slice(i, i + size));
    i += size;
  }
  return chunks;
}

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

// WhatsAppIcon temporarily hidden
// const WhatsAppIcon = ({ size = 24 }: { size?: number }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     width={size}
//     height={size}
//     aria-hidden
//   >
//     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
//   </svg>
// );

const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width={size}
    height={size}
    aria-hidden
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 md:pt-20 pb-10 sm:pb-14 md:pb-20">
        {/* Logo + social icons: full-width top strip with clear space */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8 pb-10 sm:pb-12 md:pb-14 border-b border-white/10">
          <Link to="/" className="flex justify-center sm:justify-start focus:outline-none focus:ring-2 focus:ring-amber-500/50 rounded">
            <img
              src="/al-safir-logo-straight.png"
              alt="Al Safir Luxury Chauffeurs"
              className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain"
            />
          </Link>
          <div className="flex gap-4 sm:gap-5 flex-wrap justify-center sm:justify-end">
            <a
              href="https://x.com/SafirChauffeurs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-amber-500 transition-colors"
              aria-label="X (Twitter)"
            >
              <XIcon size={24} />
            </a>
            <a
              href="https://www.facebook.com/SafirChauffeurs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-amber-500 transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon size={24} />
            </a>
            <a
              href="https://instagram.com/saafir_chauffeur"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-amber-500 transition-colors"
              aria-label="Instagram @saafir_chauffeur"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://tiktok.com/@SafirChauffeurs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-amber-500 transition-colors"
              aria-label="TikTok"
            >
              <TikTokIcon size={24} />
            </a>
          </div>
        </div>

        {/* Links grid: Pages, Fleet x3, Get in Touch */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 items-start pt-10 sm:pt-12">
          {/* Pages */}
          <div className="text-center sm:text-left">
            <h4 className="font-sans font-bold text-white text-xs uppercase tracking-logo mb-5">
              Pages
            </h4>
            <ul className="space-y-3.5">
              {[
                { label: 'Home', to: '/' },
                { label: 'About', to: '/about' },
                { label: 'Fleet', to: '/fleet' },
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

          {/* Fleet - three separate columns, each with Fleet heading */}
          {chunkByColumns(fleet, 3).map((column, colIndex) => (
            <div key={colIndex} className="text-center sm:text-left">
              <h4 className="font-sans font-bold text-white text-xs uppercase tracking-logo mb-5">
                Fleet
              </h4>
              <ul className="space-y-3.5">
                {column.map((vehicle) => (
                  <li key={vehicle.name}>
                    <Link
                      to={`/fleet?vehicle=${encodeURIComponent(vehicle.name)}`}
                      className="text-white/80 hover:text-amber-500 text-sm uppercase tracking-wide transition-colors line-clamp-2"
                    >
                      {vehicle.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h4 className="font-sans font-bold text-white text-xs uppercase tracking-logo mb-5">
              Get in Touch
            </h4>
            <div className="space-y-4">
              {/* Phone section temporarily hidden */}
              {/* <div>
                <p className="text-white/60 text-xs uppercase tracking-wide mb-1">Phone</p>
                <a
                  href="tel:+447546238066"
                  className="text-white/90 hover:text-amber-500 text-sm transition-colors"
                >
                  +44 (0) 7546 238066
                </a>
              </div> */}
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
              <div className="pt-2 flex justify-center sm:justify-start">
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

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 text-center space-y-2 px-2">
          <p className="text-white/50 text-xs sm:text-sm uppercase tracking-wide">
            &copy; {currentYear} Al Safir Chauffeurs. All rights reserved.
          </p>
          <p className="text-white/40 text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-0">
            <Link to="/privacy" className="hover:text-amber-500 transition-colors">Privacy Policy</Link>
            <span className="hidden sm:inline">{' · '}</span>
            <Link to="/terms" className="hover:text-amber-500 transition-colors">Terms & Conditions</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

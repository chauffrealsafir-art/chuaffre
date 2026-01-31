import { Instagram, Music } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-amber-500/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="font-script text-4xl md:text-5xl text-white leading-tight mb-1">
            AL SAFIR
          </h3>
          <p className="font-sans text-amber-500 text-sm uppercase tracking-logo font-medium mb-0.5">
            Luxury Chauffeurs
          </p>
          <p className="font-sans text-amber-500/90 text-xs uppercase tracking-tagline mb-6">
            Driven By Excellence
          </p>

          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://instagram.com/SafirChauffeurs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-amber-500 transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://tiktok.com/@SafirChauffeurs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-amber-500 transition-colors duration-200"
              aria-label="TikTok"
            >
              <Music size={24} />
            </a>
          </div>

          <p className="text-white/50 text-xs">
            &copy; {new Date().getFullYear()} Al Safir Chauffeurs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

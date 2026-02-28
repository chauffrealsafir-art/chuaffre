import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Fleet', path: '/fleet' },
    { name: 'Book', path: '/book' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/al-safir-logo-straight.png"
              alt="Al Safir Luxury Chauffeurs"
              className="h-12 sm:h-16 md:h-24 w-auto object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm uppercase tracking-logo transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-amber-500 font-semibold'
                    : 'text-white hover:text-amber-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-animate flex items-center gap-2 border border-white rounded-full px-5 py-2.5 text-sm font-medium uppercase tracking-logo text-white hover:bg-white hover:text-black shrink-0"
            >
              Contact Us
              <ArrowRight size={18} className="shrink-0" />
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden text-white p-3 min-w-[48px] min-h-[48px] flex items-center justify-center -mr-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden bg-black/98 backdrop-blur-sm border-t border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0'
        }`}
        role="navigation"
        aria-label="Main menu"
      >
        <div className={`px-4 pt-4 pb-6 space-y-0 transition-all duration-300 ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
        }`}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center min-h-[48px] py-3 text-base uppercase tracking-logo transition-colors duration-200 border-b border-white/5 active:bg-white/5 ${
                  location.pathname === link.path
                    ? 'text-amber-500 font-semibold'
                    : 'text-white hover:text-amber-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-animate flex items-center justify-center gap-2 w-full mt-4 min-h-[48px] border border-white rounded-full px-5 py-3.5 text-sm font-medium uppercase tracking-logo text-white hover:bg-white hover:text-black"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;

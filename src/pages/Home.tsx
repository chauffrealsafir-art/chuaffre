import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageMeta from '../components/PageMeta';

const EXCEPTIONAL_FLEET_INDEX = 3;

const bannerImages = ['/banners/1.png', '/banners/2.png', '/banners/3.png', '/banners/4.png', '/banners/5.png'];

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [exceptionalFleetInView, setExceptionalFleetInView] = useState(false);
  const [hero0Entered, setHero0Entered] = useState(false);
  const exceptionalFleetRef = useRef<HTMLElement | null>(null);

  // When landing on home (navigation or load), scroll to top so entrance animation runs from top
  useEffect(() => {
    window.scrollTo(0, 0);
    setScrollY(0);
  }, []);

  // Entrance animation for first hero when landing on home (full load or navigation)
  useEffect(() => {
    const t = requestAnimationFrame(() => {
      requestAnimationFrame(() => setHero0Entered(true));
    });
    return () => cancelAnimationFrame(t);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const el = exceptionalFleetRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setExceptionalFleetInView(true);
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const heroSections = [
    {
      image: bannerImages[0],
      title: 'London',
      subtitle: 'We Serve Only in London',
    },
    {
      image: bannerImages[1],
      title: 'Luxury Redefined',
      subtitle: 'Experience Premium Travel',
    },
    {
      image: bannerImages[2],
      title: 'Professional Service',
      subtitle: 'Punctual. Discreet. Reliable.',
    },
    {
      image: bannerImages[3],
      title: 'Exceptional Fleet',
      subtitle: 'Premium Vehicles at Your Service',
    },
    {
      image: bannerImages[4],
      title: 'Al Safir Chauffeurs',
      subtitle: 'Driven By Excellence',
    },
  ];

  return (
    <>
      <PageMeta
        title="Al Safir Chauffeurs - Driven By Excellence"
        description="London's premier luxury chauffeur service. Professional, discreet, and reliable transport across the capital."
      />
      <div className="bg-black pb-12 sm:pb-16 md:pb-24">
      {heroSections.map((section, index) => (
        <section
          key={index}
          ref={index === EXCEPTIONAL_FLEET_INDEX ? exceptionalFleetRef : undefined}
          className="relative h-screen w-full flex flex-col overflow-hidden -mb-px"
        >
          {/* Full-screen background image - no black block covering it */}
          <div
            className="absolute inset-0 bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${section.image})`,
              backgroundPosition: index === 0 ? 'center 75%' : 'center center',
              backgroundSize: 'cover',
            }}
          />
          {/* Subtle overlay so text stays readable - image still clearly visible */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" aria-hidden />

          {/* Main text - overlaid on image, no solid black section */}
          <div
            className={`relative z-10 flex flex-1 min-h-0 items-center justify-center text-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 transition-all duration-1000 ${
              index === 0
                ? hero0Entered
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
                : index === EXCEPTIONAL_FLEET_INDEX
                  ? exceptionalFleetInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                  : scrollY > index * window.innerHeight - 200
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="w-full max-w-4xl min-w-0">
              <h1 className={`mb-3 sm:mb-4 font-serif text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-white tracking-wider px-2 break-words ${index === 2 ? 'sm:whitespace-nowrap' : ''}`}>
                {index === 0 ? (
                  <>
                    <span className="text-white">Al Safir </span>
                    <span className="text-amber-500">Chauffeurs</span>
                  </>
                ) : (
                  section.title.split(' ').map((word, i) => (
                    <span
                      key={i}
                      className={i === section.title.split(' ').length - 1 ? 'text-amber-500' : ''}
                    >
                      {word}{' '}
                    </span>
                  ))
                )}
              </h1>
              <p className={`text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl uppercase tracking-tagline px-2 break-words ${index === 0 ? 'font-serif text-amber-500 font-medium' : 'font-sans text-white/90 font-light'}`}>
                {section.subtitle}
              </p>
              {index === 0 && (
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 px-2">
                  <Link
                    to="/book"
                    className="btn-animate inline-flex items-center justify-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-black font-medium uppercase tracking-logo px-5 sm:px-6 min-h-[48px] py-3 sm:py-3 rounded-full text-xs sm:text-sm transition-colors whitespace-nowrap w-full sm:w-auto"
                  >
                    Book Now
                    <ArrowRight size={14} className="shrink-0" />
                  </Link>
                  <Link
                    to="/fleet"
                    className="btn-animate inline-flex items-center justify-center gap-1.5 border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black font-medium uppercase tracking-logo px-5 sm:px-6 min-h-[48px] py-3 sm:py-3 rounded-full text-xs sm:text-sm transition-colors whitespace-nowrap w-full sm:w-auto"
                  >
                    Fleet
                    <ArrowRight size={14} className="shrink-0" />
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mouse icon - bottom right (first hero only) */}
          {index === 0 && (
            <div className="absolute bottom-6 right-4 sm:bottom-8 sm:right-6 md:bottom-10 md:right-10 z-20 animate-bounce pointer-events-none" aria-hidden>
              <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-amber-500 rounded-full flex items-start justify-center p-1.5 sm:p-2">
                <div className="w-1 h-2 sm:h-3 bg-amber-500 rounded-full"></div>
              </div>
            </div>
          )}
        </section>
      ))}
    </div>
    </>
  );
};

export default Home;

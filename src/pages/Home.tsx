import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import heroImage from '../../assets/hero-image.jpg';

const EXCEPTIONAL_FLEET_INDEX = 3;

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [exceptionalFleetInView, setExceptionalFleetInView] = useState(false);
  const exceptionalFleetRef = useRef<HTMLElement | null>(null);

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
      image: heroImage,
      title: 'Al Safir Chauffeurs',
      subtitle: 'Driven By Excellence',
    },
    {
      image: 'https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Luxury Redefined',
      subtitle: 'Experience Premium Travel',
    },
    {
      image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Professional Service',
      subtitle: 'Punctual. Discreet. Reliable.',
    },
    {
      image: 'https://images.pexels.com/photos/6894428/pexels-photo-6894428.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Exceptional Fleet',
      subtitle: 'Premium Vehicles at Your Service',
    },
  ];

  return (
    <>
      <PageMeta
        title="Al Safir Chauffeurs - Driven By Excellence"
        description="London's premier luxury chauffeur service. Professional, discreet, and reliable transport across the capital."
      />
      <div className="bg-black pb-16 md:pb-24">
      {heroSections.map((section, index) => (
        <section
          key={index}
          ref={index === EXCEPTIONAL_FLEET_INDEX ? exceptionalFleetRef : undefined}
          className="relative h-screen w-full flex flex-col overflow-hidden"
        >
          {/* Car / hero image - takes upper portion */}
          <div
            className="relative flex-[0_0_65%] min-h-0 bg-cover bg-center transition-transform duration-100"
            style={{
              backgroundImage: `url(${section.image})`,
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Main text - below the car */}
          <div
            className={`relative z-10 flex flex-1 items-center justify-center bg-black text-center px-4 py-8 transition-all duration-1000 ${
              index === EXCEPTIONAL_FLEET_INDEX
                ? exceptionalFleetInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
                : scrollY > index * window.innerHeight - 200
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
            }`}
          >
            <div>
              <h1 className={`${index === 0 ? 'mb-1.5 font-script text-4xl md:text-6xl lg:text-7xl text-white leading-tight' : 'mb-4 font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-wider'}`}>
                {index === 0 ? (
                  <>
                    <span className="text-white">Al Safir </span>
                    <span className="font-sans text-amber-500 uppercase tracking-logo text-3xl md:text-5xl lg:text-6xl font-medium">Chauffeurs</span>
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
              <p className={`text-xl md:text-3xl font-sans uppercase tracking-tagline ${index === 0 ? 'text-amber-500 font-medium' : 'text-white/90 font-light'}`}>
                {section.subtitle}
              </p>
              {index === 0 && (
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
                  <Link
                    to="/book"
                    className="btn-animate inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-black font-medium uppercase tracking-logo px-4 py-2 rounded-full text-xs sm:text-sm transition-colors whitespace-nowrap"
                  >
                    Book Now
                    <ArrowRight size={14} className="shrink-0" />
                  </Link>
                  <Link
                    to="/services"
                    className="btn-animate inline-flex items-center gap-1.5 border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black font-medium uppercase tracking-logo px-4 py-2 rounded-full text-xs sm:text-sm transition-colors whitespace-nowrap"
                  >
                    Services & Fleet
                    <ArrowRight size={14} className="shrink-0" />
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mouse icon - bottom right (first hero only) */}
          {index === 0 && (
            <div className="absolute bottom-10 right-10 z-20 animate-bounce pointer-events-none" aria-hidden>
              <div className="w-6 h-10 border-2 border-amber-500 rounded-full flex items-start justify-center p-2">
                <div className="w-1 h-3 bg-amber-500 rounded-full"></div>
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

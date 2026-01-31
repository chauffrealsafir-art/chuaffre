import { useEffect, useState } from 'react';
import heroImage from '../../assets/hero-image.jpg';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    <div className="bg-black">
      {heroSections.map((section, index) => (
        <section
          key={index}
          className="relative h-screen w-full flex items-center justify-center overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-100"
            style={{
              backgroundImage: `url(${section.image})`,
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div
            className={`relative z-10 text-center px-4 transition-all duration-1000 ${
              scrollY > index * window.innerHeight - 200
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className={`mb-4 ${index === 0 ? 'font-script text-5xl md:text-7xl lg:text-8xl text-white leading-tight' : 'font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-wider'}`}>
              {index === 0 ? (
                <>
                  <span className="text-white">Al Safir </span>
                  <span className="font-sans text-amber-500 uppercase tracking-logo text-4xl md:text-6xl lg:text-7xl font-medium">Chauffeurs</span>
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
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-amber-500 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-amber-500 rounded-full"></div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Home;

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import FadeInSection from '../components/FadeInSection';
import Marquee from '../components/Marquee';

const testimonials = [
  {
    name: 'Alexis Carter',
    location: 'Dubai, UAE',
    quote:
      'Exceptional service from start to finish. The driver was punctual, the car was immaculate, and the whole experience felt truly premium. I would recommend Al Safir to anyone who values reliability and comfort.',
    initials: 'AC',
  },
  {
    name: 'Sarah Mitchell',
    location: 'London, UK',
    quote:
      'We use Al Safir for all our executive transfers. Professional, discreet, and always on time. They have become an essential part of how we do business.',
    initials: 'SM',
  },
  {
    name: 'James Williams',
    location: 'Manchester, UK',
    quote:
      'From airport pickups to special occasions, Al Safir never disappoints. The attention to detail and the quality of the vehicles is outstanding.',
    initials: 'JW',
  },
];

const About = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const current = testimonials[testimonialIndex];

  const goPrev = () => {
    setTestimonialIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  };
  const goNext = () => {
    setTestimonialIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  };

  return (
    <>
      <PageMeta
        title="About Us - Al Safir Chauffeurs"
        description="Learn about Al Safir Chauffeurs: London's luxury chauffeur service. Professional, discreet, and reliable transport for airport transfers, corporate travel, and special occasions."
      />
      <div className="min-h-screen bg-black pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <FadeInSection className="text-center mb-10 sm:mb-12 md:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-3 sm:mb-4">
              <span className="text-white">About </span>
              <span className="text-amber-500">Us</span>
            </h1>
          </FadeInSection>

        {/* Our Story - intro block */}
        <FadeInSection as="section">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 md:w-12 bg-amber-500 shrink-0" />
            <span className="font-sans text-amber-500 text-xs md:text-sm uppercase tracking-logo font-medium">
              Our Story
            </span>
          </div>
          <div className="bg-zinc-900/50 border border-amber-500/20 rounded-lg p-6 sm:p-8 md:p-10 lg:p-12 hover:border-amber-500/30 transition-all duration-300">
            <h2 className="text-white/90 text-xl sm:text-2xl md:text-3xl font-serif font-bold text-center mb-4 sm:mb-6">
              Driven by Excellence
            </h2>
            <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-center max-w-3xl mx-auto">
              Al Safir Chauffeurs is a luxury chauffeur service business delivering professional, discreet, and reliable transport across the capital and surrounding areas.
            </p>
            <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto mt-4 sm:mt-6">
              We specialise in airport transfers, executive business travel, private appointments, and special occasions, offering a seamless door-to-door experience built around punctuality, comfort, and exceptional service standards.
            </p>
            <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto mt-4 sm:mt-6">
              Every journey is tailored to the individual client. From real-time flight monitoring and meet-and-greet services to carefully selected luxury vehicles, our chauffeurs ensure a smooth, refined travel experience from start to finish.
            </p>
            <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto mt-4 sm:mt-6">
              At Al Safir Chauffeurs, discretion, reliability, and attention to detail are not optional — they are the foundation of every journey we deliver.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection className="grid sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-10 sm:mt-12 md:mt-16">
          <div className="text-center p-6 sm:p-8 bg-zinc-900/50 border border-amber-500/10 rounded-lg hover:border-amber-500/30 transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold text-amber-500 mb-2">10+</div>
            <p className="text-white/70 text-xs sm:text-sm tracking-wide">Years Experience</p>
          </div>
          <div className="text-center p-6 sm:p-8 bg-zinc-900/50 border border-amber-500/10 rounded-lg hover:border-amber-500/30 transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold text-amber-500 mb-2">24/7</div>
            <p className="text-white/70 text-xs sm:text-sm tracking-wide">Available Service</p>
          </div>
          <div className="text-center p-6 sm:p-8 bg-zinc-900/50 border border-amber-500/10 rounded-lg hover:border-amber-500/30 transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold text-amber-500 mb-2">100%</div>
            <p className="text-white/70 text-xs sm:text-sm tracking-wide">Client Satisfaction</p>
          </div>
        </FadeInSection>

        {/* Fleet */}
        <FadeInSection as="section" className="mt-24 md:mt-32">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 md:w-12 bg-amber-500 shrink-0" />
            <span className="font-sans text-amber-500 text-xs md:text-sm uppercase tracking-logo font-medium">
              Fleet
            </span>
          </div>
          <h2 className="font-serif font-bold text-white text-3xl md:text-4xl mb-12">
            What We Provide
          </h2>

          <div className="space-y-10">
            <div>
              <h3 className="font-sans text-amber-500 text-sm uppercase tracking-logo font-medium mb-6">
                What We Offer
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-zinc-900/50 border border-amber-500/20 rounded-lg p-6 hover:border-amber-500/30 transition-all duration-300">
                  <h4 className="font-serif font-bold text-white text-lg mb-2">Airport Transfers</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Meet-and-greet and seamless transfers to and from London airports, with flight monitoring.
                  </p>
                </div>
                <div className="bg-zinc-900/50 border border-amber-500/20 rounded-lg p-6 hover:border-amber-500/30 transition-all duration-300">
                  <h4 className="font-serif font-bold text-white text-lg mb-2">Corporate Travel</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Executive transport for business meetings, conferences and corporate events.
                  </p>
                </div>
                <div className="bg-zinc-900/50 border border-amber-500/20 rounded-lg p-6 hover:border-amber-500/30 transition-all duration-300">
                  <h4 className="font-serif font-bold text-white text-lg mb-2">Special Events</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Weddings, proms, races and occasions with a professional chauffeur and premium vehicle.
                  </p>
                </div>
                <div className="bg-zinc-900/50 border border-amber-500/20 rounded-lg p-6 hover:border-amber-500/30 transition-all duration-300">
                  <h4 className="font-serif font-bold text-white text-lg mb-2">Private Hire</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Hourly or daily hire for appointments, shopping or tailored itineraries across London.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-sans text-amber-500 text-sm uppercase tracking-logo font-medium mb-6">
                Our Fleet
              </h3>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-zinc-900/50 border border-amber-500/20 rounded-lg p-6 hover:border-amber-500/30 transition-all duration-300">
                  <h4 className="font-serif font-bold text-white text-lg mb-2">Luxury Sedans</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    BMW, Mercedes and Rolls Royce—executive sedans with leather interior, WiFi and privacy.
                  </p>
                </div>
                <div className="bg-zinc-900/50 border border-amber-500/20 rounded-lg p-6 hover:border-amber-500/30 transition-all duration-300">
                  <h4 className="font-serif font-bold text-white text-lg mb-2">Executive SUVs</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Range Rover, Land Rover and premium SUVs for space, comfort and presence.
                  </p>
                </div>
                <div className="bg-zinc-900/50 border border-amber-500/20 rounded-lg p-6 hover:border-amber-500/30 transition-all duration-300">
                  <h4 className="font-serif font-bold text-white text-lg mb-2">People Carriers</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Mercedes V Class and larger vehicles for groups and extra luggage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Luxurious service marquee - above How It Works */}
        <div className="mt-16 md:mt-20">
          <Marquee />
        </div>

        {/* How It Works */}
        <FadeInSection as="section" className="mt-24 md:mt-32">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 md:w-12 bg-amber-500 shrink-0" />
            <span className="font-sans text-amber-500 text-xs md:text-sm uppercase tracking-logo font-medium">
              How It Works
            </span>
          </div>
          <h2 className="font-serif font-bold text-white text-3xl md:text-4xl mb-16">
            How We Simplify Your Experience
          </h2>

          <div className="relative">
            {/* Golden horizontal line */}
            <div className="absolute top-8 left-0 right-0 h-px bg-amber-500/60 hidden md:block" aria-hidden />

            <div className="grid md:grid-cols-3 gap-12 md:gap-8">
              <div className="relative flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center shrink-0 mb-6 relative z-10">
                  <span className="font-serif font-bold text-white text-xl">1</span>
                </div>
                <h3 className="font-serif font-bold text-white text-xl mb-3">Choose a Vehicle</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed font-light">
                  Browse our premium fleet of luxury vehicles—from executive sedans to SUVs and
                  chauffeur-driven cars—and select the one that suits your journey and occasion.
                </p>
              </div>

              <div className="relative flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center shrink-0 mb-6 relative z-10">
                  <span className="font-serif font-bold text-white text-xl">2</span>
                </div>
                <h3 className="font-serif font-bold text-white text-xl mb-3">Select a Service</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed font-light">
                  Pick the service you need: airport transfers, corporate travel, events, or
                  private hire. We tailor each booking to your schedule and requirements.
                </p>
              </div>

              <div className="relative flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center shrink-0 mb-6 relative z-10">
                  <span className="font-serif font-bold text-white text-xl">3</span>
                </div>
                <h3 className="font-serif font-bold text-white text-xl mb-3">Book Your Ride</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed font-light">
                  Confirm your booking online or by phone. We’ll take care of the rest—punctual
                  pickup, professional driver, and a seamless journey from start to finish.
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Testimonials */}
        <FadeInSection as="section" className="mt-24 md:mt-32">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 md:w-12 bg-amber-500 shrink-0" />
                <span className="font-sans text-amber-500 text-xs md:text-sm uppercase tracking-logo font-medium">
                  Testimonials
                </span>
              </div>
              <h2 className="font-serif font-bold text-white text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
                See Why Customers Choose Us Every Time
              </h2>
              <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                Our clients trust us for airport transfers, corporate travel, and special
                occasions. Here’s what they have to say about their experience with Al Safir.
              </p>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous testimonial"
                  className="btn-animate w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-black shrink-0"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next testimonial"
                  className="btn-animate w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-black shrink-0"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

            <div className="bg-amber-50/95 rounded-2xl p-8 md:p-10 shadow-xl border border-amber-500/10">
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="w-20 h-20 rounded-full bg-amber-500/20 flex items-center justify-center mb-5 shrink-0">
                  <span className="font-serif font-bold text-amber-700 text-xl">
                    {current.initials}
                  </span>
                </div>
                <h3 className="font-sans font-bold text-black text-xl mb-1">{current.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{current.location}</p>
                <blockquote className="font-serif text-black/90 text-lg md:text-xl italic leading-relaxed">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
    </>
  );
};

export default About;

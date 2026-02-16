import { Link } from 'react-router-dom';
import { Mail, Instagram, MapPin, Check, ArrowRight, Phone } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import FadeInSection from '../components/FadeInSection';
import TikTokIcon from '../components/TikTokIcon';

const Contact = () => {
  return (
    <>
      <PageMeta
        title="Contact Us - Al Safir Chauffeurs"
        description="Get in touch with Al Safir Chauffeurs. Email, Instagram, TikTok. London's luxury chauffeur service. Available 24/7."
      />
      <div className="min-h-screen bg-black pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <FadeInSection className="text-center mb-10 sm:mb-12 md:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4 sm:mb-6">
              <span className="text-white">Contact </span>
              <span className="text-amber-500">Us</span>
            </h1>
            <p className="text-white/70 text-sm sm:text-base md:text-lg">
              Get in touch with us for bookings and inquiries
            </p>
          </FadeInSection>

        <FadeInSection className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
          <div className="bg-zinc-900/50 border border-amber-500/20 rounded-lg p-5 sm:p-6 md:p-8 hover:border-amber-500/50 transition-all duration-300">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="bg-amber-500/10 p-3 sm:p-4 rounded-lg shrink-0">
                <Mail className="text-amber-500" size={24} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-white font-semibold text-lg sm:text-xl mb-1 sm:mb-2">Email</h3>
                <a
                  href="mailto:info@alsafirchauffeurs.co.uk"
                  className="text-white/70 hover:text-amber-500 transition-colors text-sm sm:text-base break-all"
                >
                  info@alsafirchauffeurs.co.uk
                </a>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/50 border border-amber-500/20 rounded-lg p-5 sm:p-6 md:p-8 hover:border-amber-500/50 transition-all duration-300">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="bg-amber-500/10 p-3 sm:p-4 rounded-lg shrink-0">
                <Phone className="text-amber-500" size={24} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-white font-semibold text-lg sm:text-xl mb-1 sm:mb-2">Phone / WhatsApp</h3>
                <a
                  href="https://wa.me/447462380655"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-amber-500 transition-colors text-sm sm:text-base"
                  aria-label="Open WhatsApp to chat with +44 7462 380655"
                >
                  +44 7462 380655
                </a>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/50 border border-amber-500/20 rounded-lg p-5 sm:p-6 md:p-8 hover:border-amber-500/50 transition-all duration-300">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="bg-amber-500/10 p-3 sm:p-4 rounded-lg shrink-0">
                <Instagram className="text-amber-500" size={24} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-white font-semibold text-lg sm:text-xl mb-1 sm:mb-2">Instagram</h3>
                <a
                  href="https://www.instagram.com/safirchauffeurs?igsh=c2J3M2RhYWV0ZmR1&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-amber-500 transition-colors text-sm sm:text-base break-all"
                >
                  @safirchauffeurs
                </a>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/50 border border-amber-500/20 rounded-lg p-5 sm:p-6 md:p-8 hover:border-amber-500/50 transition-all duration-300">
            <div className="flex items-start space-x-3 sm:space-x-4">
              <div className="bg-amber-500/10 p-3 sm:p-4 rounded-lg text-amber-500 shrink-0">
                <TikTokIcon size={24} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-white font-semibold text-lg sm:text-xl mb-1 sm:mb-2">TikTok</h3>
                <a
                  href="https://vm.tiktok.com/ZNRygTJNR/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-amber-500 transition-colors text-sm sm:text-base break-all"
                >
                  @SafirChauffeurs
                </a>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
        <div className="bg-zinc-900/50 border border-amber-500/20 rounded-lg p-5 sm:p-6 md:p-8">
          <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
            <div className="bg-amber-500/10 p-3 sm:p-4 rounded-lg shrink-0">
              <MapPin className="text-amber-500" size={24} />
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg sm:text-xl mb-1 sm:mb-2">Location</h3>
              <p className="text-white/70 text-sm sm:text-base">Knightsbridge, London</p>
            </div>
          </div>

          <div className="aspect-video bg-zinc-800/50 rounded-lg overflow-hidden border border-amber-500/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5436018141683!2d-0.1607!3d51.5014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760532743b0d4f%3A0x9e2890acf8a2c1a1!2sKnightsbridge%2C%20London!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Knightsbridge, London Map"
            ></iframe>
          </div>
        </div>
        </FadeInSection>

        <FadeInSection className="mt-8 sm:mt-10 md:mt-12 text-center">
          <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border border-amber-500/30 rounded-lg p-5 sm:p-6 md:p-8">
            <h3 className="text-xl sm:text-2xl font-serif text-amber-500 mb-2 sm:mb-3">Available 24/7</h3>
            <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto">
              Our team is ready to assist you with your luxury travel needs at any time. Contact us
              through any of the methods above and we'll respond promptly.
            </p>
          </div>
        </FadeInSection>

        {/* Ready to Begin Your Journey */}
        <FadeInSection as="section" className="mt-12 sm:mt-16 md:mt-20 lg:mt-28">
          <div className="bg-amber-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-white">
            <h2 className="font-serif font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center mb-6 sm:mb-8 md:mb-10 text-white px-2">
              Ready to Begin Your Journey with Us?
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
              <Link
                to="/fleet"
                className="btn-animate inline-flex items-center justify-center gap-2 border-2 border-white rounded-full px-5 sm:px-6 py-2.5 sm:py-3.5 text-xs sm:text-sm font-medium uppercase tracking-wide text-white hover:bg-white hover:text-black transition-colors duration-200 w-full sm:w-auto"
              >
                Our Fleet
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
              </Link>
              <Link
                to="/book"
                className="btn-animate inline-flex items-center justify-center gap-2 border-2 border-white rounded-full px-5 sm:px-6 py-2.5 sm:py-3.5 text-xs sm:text-sm font-medium uppercase tracking-wide text-white hover:bg-black hover:text-white border-white hover:border-black transition-colors duration-200 w-full sm:w-auto"
              >
                Browse Fleet
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black text-amber-400 mb-3 sm:mb-4">
                  <Check size={20} strokeWidth={2.5} className="text-amber-400 sm:w-[22px] sm:h-[22px]" />
                </div>
                <h3 className="font-serif font-bold text-base sm:text-lg md:text-xl text-white mb-1.5 sm:mb-2">Luxury Comfort</h3>
                <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed px-2">
                  Travel in premium vehicles with leather interiors, climate control, and a smooth ride. Every journey is designed for your comfort and style.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black text-amber-400 mb-3 sm:mb-4">
                  <Check size={20} strokeWidth={2.5} className="text-amber-400 sm:w-[22px] sm:h-[22px]" />
                </div>
                <h3 className="font-serif font-bold text-base sm:text-lg md:text-xl text-white mb-1.5 sm:mb-2">Reliable Service</h3>
                <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed px-2">
                  Punctual, discreet, and professional. We monitor flights, track your journey, and ensure you are met on time, every time.
                </p>
              </div>
              <div className="text-center sm:col-span-2 md:col-span-1">
                <div className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black text-amber-400 mb-3 sm:mb-4">
                  <Check size={20} strokeWidth={2.5} className="text-amber-400 sm:w-[22px] sm:h-[22px]" />
                </div>
                <h3 className="font-serif font-bold text-base sm:text-lg md:text-xl text-white mb-1.5 sm:mb-2">Personal Travel</h3>
                <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed px-2">
                  Door-to-door service tailored to you. Airport transfers, corporate travel, or special occasions—we adapt to your schedule and preferences.
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
    </>
  );
};

export default Contact;

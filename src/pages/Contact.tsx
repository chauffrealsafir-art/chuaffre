import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, MapPin, Check, ArrowRight } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import FadeInSection from '../components/FadeInSection';
import TikTokIcon from '../components/TikTokIcon';

const Contact = () => {
  return (
    <>
      <PageMeta
        title="Contact Us - Al Safir Chauffeurs"
        description="Get in touch with Al Safir Chauffeurs. Email, phone, WhatsApp, Instagram, TikTok. London's luxury chauffeur service. Available 24/7."
      />
      <div className="min-h-screen bg-black pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeInSection className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              <span className="text-white">Contact </span>
              <span className="text-amber-500">Us</span>
            </h1>
            <p className="text-white/70 text-lg">
              Get in touch with us for bookings and inquiries
            </p>
          </FadeInSection>

        <FadeInSection className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-zinc-900/50 border border-amber-500/20 rounded-lg p-8 hover:border-amber-500/50 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="bg-amber-500/10 p-4 rounded-lg">
                <Mail className="text-amber-500" size={28} />
              </div>
              <div>
                <h3 className="text-white font-semibold text-xl mb-2">Email</h3>
                <a
                  href="mailto:info@alsafirchauffeurs.co.uk"
                  className="text-white/70 hover:text-amber-500 transition-colors"
                >
                  info@alsafirchauffeurs.co.uk
                </a>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/50 border border-amber-500/20 rounded-lg p-8 hover:border-amber-500/50 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="bg-amber-500/10 p-4 rounded-lg">
                <Phone className="text-amber-500" size={28} />
              </div>
              <div>
                <h3 className="text-white font-semibold text-xl mb-2">Phone / WhatsApp</h3>
                <a
                  href="tel:+447546238066"
                  className="text-white/70 hover:text-amber-500 transition-colors"
                >
                  +44 (0) 7546 238066
                </a>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/50 border border-amber-500/20 rounded-lg p-8 hover:border-amber-500/50 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="bg-amber-500/10 p-4 rounded-lg">
                <Instagram className="text-amber-500" size={28} />
              </div>
              <div>
                <h3 className="text-white font-semibold text-xl mb-2">Instagram</h3>
                <a
                  href="https://instagram.com/saafir_chauffeur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-amber-500 transition-colors"
                >
                  @saafir_chauffeur
                </a>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/50 border border-amber-500/20 rounded-lg p-8 hover:border-amber-500/50 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="bg-amber-500/10 p-4 rounded-lg text-amber-500">
                <TikTokIcon size={28} />
              </div>
              <div>
                <h3 className="text-white font-semibold text-xl mb-2">TikTok</h3>
                <a
                  href="https://tiktok.com/@SafirChauffeurs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-amber-500 transition-colors"
                >
                  @SafirChauffeurs
                </a>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
        <div className="bg-zinc-900/50 border border-amber-500/20 rounded-lg p-8">
          <div className="flex items-start space-x-4 mb-6">
            <div className="bg-amber-500/10 p-4 rounded-lg">
              <MapPin className="text-amber-500" size={28} />
            </div>
            <div>
              <h3 className="text-white font-semibold text-xl mb-2">Location</h3>
              <p className="text-white/70">London, United Kingdom</p>
            </div>
          </div>

          <div className="aspect-video bg-zinc-800/50 rounded-lg overflow-hidden border border-amber-500/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5436018141683!2d-0.12765538422947517!3d51.50735097963546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slondon!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="London Map"
            ></iframe>
          </div>
        </div>
        </FadeInSection>

        <FadeInSection className="mt-12 text-center">
          <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border border-amber-500/30 rounded-lg p-8">
            <h3 className="text-2xl font-serif text-amber-500 mb-3">Available 24/7</h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our team is ready to assist you with your luxury travel needs at any time. Contact us
              through any of the methods above and we'll respond promptly.
            </p>
          </div>
        </FadeInSection>

        {/* Ready to Begin Your Journey */}
        <FadeInSection as="section" className="mt-20 md:mt-28">
          <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 text-black">
            <h2 className="font-serif font-bold text-2xl md:text-3xl lg:text-4xl text-center mb-8 md:mb-10">
              Ready to Begin Your Journey with Us?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-16">
              <Link
                to="/services"
                className="btn-animate inline-flex items-center justify-center gap-2 border-2 border-black rounded-full px-6 py-3.5 text-sm font-medium uppercase tracking-wide text-black hover:bg-black hover:text-white transition-colors duration-200"
              >
                Our Services
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/book"
                className="btn-animate inline-flex items-center justify-center gap-2 border-2 border-black rounded-full px-6 py-3.5 text-sm font-medium uppercase tracking-wide text-black hover:bg-black hover:text-white transition-colors duration-200"
              >
                Browse Fleet
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-10">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-500/20 text-amber-600 mb-4">
                  <Check size={22} strokeWidth={2.5} />
                </div>
                <h3 className="font-serif font-bold text-lg md:text-xl text-black mb-2">Luxury Comfort</h3>
                <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-500/20 text-amber-600 mb-4">
                  <Check size={22} strokeWidth={2.5} />
                </div>
                <h3 className="font-serif font-bold text-lg md:text-xl text-black mb-2">Reliable Service</h3>
                <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-500/20 text-amber-600 mb-4">
                  <Check size={22} strokeWidth={2.5} />
                </div>
                <h3 className="font-serif font-bold text-lg md:text-xl text-black mb-2">Personal Travel</h3>
                <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
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

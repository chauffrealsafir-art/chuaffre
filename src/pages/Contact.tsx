import { Mail, Phone, Instagram, Music, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            <span className="text-white">Contact </span>
            <span className="text-amber-500">Us</span>
          </h1>
          <p className="text-white/70 text-lg">
            Get in touch with us for bookings and inquiries
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-zinc-900/50 border border-amber-500/20 rounded-lg p-8 hover:border-amber-500/50 transition-all duration-300 opacity-0 animate-fadeIn animation-delay-200">
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

          <div className="bg-zinc-900/50 border border-amber-500/20 rounded-lg p-8 hover:border-amber-500/50 transition-all duration-300 opacity-0 animate-fadeIn animation-delay-300">
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

          <div className="bg-zinc-900/50 border border-amber-500/20 rounded-lg p-8 hover:border-amber-500/50 transition-all duration-300 opacity-0 animate-fadeIn animation-delay-400">
            <div className="flex items-start space-x-4">
              <div className="bg-amber-500/10 p-4 rounded-lg">
                <Instagram className="text-amber-500" size={28} />
              </div>
              <div>
                <h3 className="text-white font-semibold text-xl mb-2">Instagram</h3>
                <a
                  href="https://instagram.com/SafirChauffeurs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-amber-500 transition-colors"
                >
                  @SafirChauffeurs
                </a>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/50 border border-amber-500/20 rounded-lg p-8 hover:border-amber-500/50 transition-all duration-300 opacity-0 animate-fadeIn animation-delay-500">
            <div className="flex items-start space-x-4">
              <div className="bg-amber-500/10 p-4 rounded-lg">
                <Music className="text-amber-500" size={28} />
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
        </div>

        <div className="bg-zinc-900/50 border border-amber-500/20 rounded-lg p-8 opacity-0 animate-fadeIn animation-delay-600">
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

        <div className="mt-12 text-center opacity-0 animate-fadeIn animation-delay-700">
          <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border border-amber-500/30 rounded-lg p-8">
            <h3 className="text-2xl font-serif text-amber-500 mb-3">Available 24/7</h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our team is ready to assist you with your luxury travel needs at any time. Contact us
              through any of the methods above and we'll respond promptly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

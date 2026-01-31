const About = () => {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            <span className="text-white">About </span>
            <span className="text-amber-500">Us</span>
          </h1>
        </div>

        <div className="bg-gradient-to-br from-zinc-900 to-black border border-amber-500/20 rounded-lg p-8 md:p-16 shadow-2xl opacity-0 animate-fadeIn animation-delay-200">
          <p className="text-white/90 text-lg md:text-xl leading-relaxed text-center font-light">
            Al Safir Chauffeurs is a London-based luxury chauffeur service providing professional,
            discreet and reliable transport across the capital. We deliver a seamless experience
            for airport transfers, business travel, special occasions and private appointments,
            with a focus on punctuality, comfort and high standards of service. Every journey is
            tailored to the client, ensuring a smooth and refined travel experience from start to
            finish.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-8 bg-zinc-900/50 border border-amber-500/10 rounded-lg hover:border-amber-500/30 transition-all duration-300 opacity-0 animate-fadeIn animation-delay-400">
            <div className="text-4xl font-bold text-amber-500 mb-2">10+</div>
            <p className="text-white/70 text-sm tracking-wide">Years Experience</p>
          </div>
          <div className="text-center p-8 bg-zinc-900/50 border border-amber-500/10 rounded-lg hover:border-amber-500/30 transition-all duration-300 opacity-0 animate-fadeIn animation-delay-600">
            <div className="text-4xl font-bold text-amber-500 mb-2">24/7</div>
            <p className="text-white/70 text-sm tracking-wide">Available Service</p>
          </div>
          <div className="text-center p-8 bg-zinc-900/50 border border-amber-500/10 rounded-lg hover:border-amber-500/30 transition-all duration-300 opacity-0 animate-fadeIn animation-delay-800">
            <div className="text-4xl font-bold text-amber-500 mb-2">100%</div>
            <p className="text-white/70 text-sm tracking-wide">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

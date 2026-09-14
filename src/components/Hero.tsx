const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: 'url(/clinic-photo.jpeg)',
        }}
      >
        {/* Overlay for transparency and readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3F4F2F]/50 via-[#6B8E23]/40 to-[#8FAF3E]/50"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="absolute inset-0 opacity-10 z-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white font-semibold text-sm mb-6 border border-white/30 shadow-lg">
            Dental & Aesthetic Clinic in Multan
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Your Smile & Confidence, <br />
            <span className="text-[#EAF2D3] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Our Priority</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] font-medium">
            Experience compassionate, comprehensive dental care and facial aesthetics with our team of dedicated medical specialists in Multan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-white text-[#3F4F2F] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#F6FAEC] transition-all transform hover:scale-105 shadow-xl"
            >
              Book Appointment
            </button>
            <button
              onClick={scrollToServices}
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md border-2 border-white/60 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 hover:border-white transition-all transform hover:scale-105 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;

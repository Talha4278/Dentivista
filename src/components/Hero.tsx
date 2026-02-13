import { Calendar, Shield, Clock } from 'lucide-react';

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: 'url(/clinic-photo.jpeg)',
        }}
      >
        {/* Overlay for transparency and readability - lighter overlay to show image */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3F4F2F]/40 via-[#6B8E23]/35 to-[#8FAF3E]/40"></div>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Your Health, <br />
            <span className="text-[#EAF2D3] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Our Priority</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] font-medium">
            Experience compassionate, comprehensive healthcare with our team of dedicated professionals.
            Quality care you can trust, when you need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-white text-teal-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-50 transition-all transform hover:scale-105 shadow-xl"
            >
              Book Appointment
            </button>
            <button
              onClick={scrollToServices}
              className="w-full sm:w-auto bg-white bg-opacity-10 backdrop-blur-md border-2 border-white border-opacity-50 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-20 hover:border-opacity-100 transition-all transform hover:scale-105 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            >
              Our Services
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 animate-fade-in-up delay-300">
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 text-white hover:bg-opacity-20 transition-all transform hover:-translate-y-2">
            <Calendar className="w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Easy Scheduling</h3>
            <p className="text-cyan-50">Book appointments online or by phone with flexible time slots</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 text-white hover:bg-opacity-20 transition-all transform hover:-translate-y-2">
            <Shield className="w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Expert Care</h3>
            <p className="text-cyan-50">Board-certified physicians with decades of combined experience</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 text-white hover:bg-opacity-20 transition-all transform hover:-translate-y-2">
            <Clock className="w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Extended Hours</h3>
            <p className="text-cyan-50">Open evenings and weekends to fit your busy schedule</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
};

export default Hero;

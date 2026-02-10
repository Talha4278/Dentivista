import {
  Stethoscope,
  Heart,
  Baby,
  Activity,
  Eye,
  Pill,
  Syringe,
  ClipboardList,
  UserCheck,
  Microscope,
  Waves,
  Brain,
} from 'lucide-react';

const Services = () => {
  const dentalServices = [
    { icon: Stethoscope, title: 'Root canal treatment' },
    { icon: ClipboardList, title: 'Scaling polishing' },
    { icon: Heart, title: 'Teeth Whitening/ Bleaching' },
    { icon: Baby, title: 'Cosmetic tooth colored filling' },
    { icon: Eye, title: 'Smile Design' },
    { icon: Pill, title: 'Gum treatment' },
    { icon: Microscope, title: 'Dental Jewellery' },
    { icon: Syringe, title: 'Dental Implants and Bone management' },
    { icon: UserCheck, title: 'Removable and fix dentures' },
    { icon: Waves, title: 'Cast partial dentures' },
    { icon: Brain, title: 'Zirconium crowns' },
    { icon: Activity, title: 'PFM crowns' },
    { icon: Stethoscope, title: 'Simple extractions complex extraction and surgery' },
    { icon: Syringe, title: 'Wisdom tooth surgery' },
    { icon: ClipboardList, title: 'Pits and fissure sealants' },
    { icon: UserCheck, title: 'Orthodontic treatment' },
    { icon: Eye, title: 'Clear Aligners' },
  ];

  const aestheticServices = [
    { icon: Heart, title: 'Hydrafacial' },
    { icon: Waves, title: 'Laser' },
    { icon: Syringe, title: 'PRP (face, hair)' },
    { icon: Microscope, title: 'Microneedling' },
    { icon: Pill, title: 'Mesotherapy' },
    { icon: Baby, title: 'Mole removal' },
    { icon: Brain, title: 'Chemical Peel' },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive dental and aesthetic treatments tailored to your needs
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Dental Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {dentalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-[#F6FAEC] to-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#E3EBCB] hover:border-[#8FAF3E]"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#6B8E23] to-[#8FAF3E] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#6B8E23] transition-colors">
                    {service.title}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Aesthetic Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {aestheticServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-[#F6FAEC] to-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#E3EBCB] hover:border-[#8FAF3E]"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#6B8E23] to-[#8FAF3E] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#6B8E23] transition-colors">
                    {service.title}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-[#3F4F2F] via-[#6B8E23] to-[#8FAF3E] rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
          <h3 className="text-xl text-[#F4F8EE] mb-6 max-w-2xl mx-auto">Need a Specialized Service?</h3>
          <p className="text-xl text-[#F4F8EE] mb-6 max-w-2xl mx-auto">
            We also provide referrals to trusted specialists and coordinate care for complex medical needs
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-cyan-50 transition-all transform hover:scale-105 inline-block"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

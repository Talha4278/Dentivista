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
          <span className="text-[#6B8E23] font-bold text-sm uppercase tracking-wider bg-[#F6FAEC] px-4 py-1.5 rounded-full border border-[#E3EBCB] inline-block mb-3">
            Comprehensive Treatments
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced dental care and non-surgical aesthetic solutions tailored to your unique health and beauty goals.
          </p>
        </div>

        {/* Dental Services */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center space-x-3">
            <span className="w-8 h-1 bg-[#6B8E23] rounded-full inline-block"></span>
            <span>Dental Services</span>
            <span className="w-8 h-1 bg-[#6B8E23] rounded-full inline-block"></span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {dentalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-[#F6FAEC] to-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#E3EBCB] hover:border-[#8FAF3E]"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#6B8E23] to-[#8FAF3E] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#6B8E23] transition-colors">
                    {service.title}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* Aesthetic Services */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center space-x-3">
            <span className="w-8 h-1 bg-[#6B8E23] rounded-full inline-block"></span>
            <span>Aesthetic Services</span>
            <span className="w-8 h-1 bg-[#6B8E23] rounded-full inline-block"></span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {aestheticServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-[#F6FAEC] to-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#E3EBCB] hover:border-[#8FAF3E]"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#6B8E23] to-[#8FAF3E] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#6B8E23] transition-colors">
                    {service.title}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

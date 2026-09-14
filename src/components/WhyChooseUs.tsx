import { Sparkles, Award, Clock, HeartHandshake } from 'lucide-react';

const WhyChooseUs = () => {
  const differentiators = [
    {
      icon: Sparkles,
      title: 'Dual Dental & Aesthetic Expertise',
      description:
        'Complete smile transformation and facial skin care under one roof with integrated, harmonious treatment plans.',
    },
    {
      icon: Award,
      title: 'Specialist-Led Care',
      description:
        'Treatments conducted by FCPS & BDS Surgeons and Certified Aestheticians committed to clinical precision and safety.',
    },
    {
      icon: Clock,
      title: 'Convenient Evening Hours',
      description:
        'Open Monday through Saturday from 5:00 PM to 10:00 PM, perfectly suited for work schedules and evening appointments.',
    },
    {
      icon: HeartHandshake,
      title: 'Painless & Compassionate Approach',
      description:
        'Prioritizing patient comfort, clear communication, and gentle techniques for a relaxed, anxiety-free experience.',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-[#F6FAEC] via-[#EEF4E1] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#6B8E23] font-bold text-sm uppercase tracking-wider bg-white px-4 py-1.5 rounded-full shadow-sm border border-[#E3EBCB] inline-block mb-3">
            Why Choose Dentivista
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Patient-Centered Excellence You Can Trust
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine clinical skill, advanced equipment, and warm hospitality to deliver outstanding dental and aesthetic results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#E3EBCB] flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-gradient-to-br from-[#6B8E23] to-[#8FAF3E] rounded-2xl flex items-center justify-center mb-6 shadow-lg text-white">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

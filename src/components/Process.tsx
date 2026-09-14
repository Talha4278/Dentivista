import { CalendarCheck, Stethoscope, Sparkles, Smile } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: '01',
      icon: CalendarCheck,
      title: 'Easy Appointment Booking',
      description:
        'Schedule your visit online or via WhatsApp in under a minute with evening slots tailored to your routine.',
    },
    {
      number: '02',
      icon: Stethoscope,
      title: 'Specialist Consultation',
      description:
        'Our qualified doctors conduct a detailed examination, understand your goals, and formulate a customized plan.',
    },
    {
      number: '03',
      icon: Sparkles,
      title: 'Gentle & Modern Treatment',
      description:
        'Experience state-of-the-art dental care or aesthetic procedures designed for maximum comfort and safety.',
    },
    {
      number: '04',
      icon: Smile,
      title: 'Confident Results & Aftercare',
      description:
        'Leave with a radiant smile and rejuvenated skin, backed by personalized post-care instructions and support.',
    },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#6B8E23] font-bold text-sm uppercase tracking-wider bg-[#F6FAEC] px-4 py-1.5 rounded-full border border-[#E3EBCB] inline-block mb-3">
            Our Patient Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How Your Care Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From your first consultation to your final result, we ensure a seamless and comfortable experience every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-gradient-to-br from-[#F6FAEC] to-white rounded-2xl p-8 border border-[#E3EBCB] shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#6B8E23] to-[#8FAF3E] rounded-xl flex items-center justify-center text-white shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black text-[#8FAF3E]/40 font-mono">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What are the clinic operating hours?',
      answer:
        'Dentivista Dental & Aesthetics is open Monday through Saturday from 5:00 PM to 10:00 PM. We offer convenient evening appointments so you can get quality care after work or school.',
    },
    {
      question: 'Where is Dentivista located in Multan?',
      answer:
        'We are located on the 1st Floor, 6/Street 2, Down Town Royal Orchard, Multan. Free parking is available nearby for all our patients.',
    },
    {
      question: 'How do I book an appointment?',
      answer:
        'You can easily book online using our website contact form, call us directly at +92 300 0979185, or send us a message on WhatsApp for instant confirmation.',
    },
    {
      question: 'Are dental treatments like root canals or extractions painful?',
      answer:
        'Patient comfort is our top priority. We use modern local anesthetics and gentle clinical techniques to ensure treatments are virtually pain-free and stress-free.',
    },
    {
      question: 'What aesthetic services do you offer alongside dental care?',
      answer:
        'Our aesthetic treatments include Hydrafacial, PRP (face and hair), Laser therapies, Microneedling, Mesotherapy, Mole removal, and Chemical peels, led by certified aesthetic specialists.',
    },
    {
      question: 'What if I need a specialized procedure or referral?',
      answer:
        'We provide comprehensive general and specialized procedures in-house. For highly complex medical requirements, we coordinate care and provide direct referrals to trusted medical specialists.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-gray-50 via-[#F6FAEC]/40 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-[#6B8E23] font-bold text-sm uppercase tracking-wider bg-[#F6FAEC] px-4 py-1.5 rounded-full border border-[#E3EBCB] mb-3">
            <HelpCircle size={16} />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find quick answers to common questions about our dental & aesthetic services, timings, and appointments.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#E3EBCB] overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex justify-between items-center space-x-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-bold text-gray-900">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? 'bg-[#6B8E23] text-white rotate-180' : 'bg-[#F6FAEC] text-[#6B8E23]'
                    }`}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 animate-fade-in">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

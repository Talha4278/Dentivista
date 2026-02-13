import { useState, FormEvent } from 'react';
import { Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s\-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setIsSubmitting(false);

    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '0300 0979185',
      link: 'tel:+923000979185',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'dentivistadentalandaesthetics@gmail.com',
      link: 'mailto:dentivistadentalandaesthetics@gmail.com',
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Mon-Fri: 8AM-8PM, Sat-Sun: 9AM-5PM',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white via-[#F6FAEC] to-[#EEF4E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or ready to book an appointment? We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 text-center border border-[#E3EBCB]"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#6B8E23] to-[#8FAF3E] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-[#6B8E23] hover:text-[#3F4F2F] font-medium"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.content}</p>
                )}
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          {submitted && (
            <div className="mb-8 bg-green-50 border border-green-200 rounded-xl p-6 flex items-center">
              <CheckCircle className="text-green-600 mr-3 flex-shrink-0" size={24} />
              <p className="text-green-800 font-medium">
                Thank you! Your message has been sent successfully. We'll get back to you soon.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={`w-full px-4 py-3 border ${
                    errors.name ? 'border-red-300' : 'border-gray-300'
                  } rounded-xl focus:ring-2 focus:ring-[#6B8E23] focus:border-transparent transition-all`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={`w-full px-4 py-3 border ${
                    errors.email ? 'border-red-300' : 'border-gray-300'
                  } rounded-xl focus:ring-2 focus:ring-[#6B8E23] focus:border-transparent transition-all`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className={`w-full px-4 py-3 border ${
                    errors.phone ? 'border-red-300' : 'border-gray-300'
                  } rounded-xl focus:ring-2 focus:ring-[#6B8E23] focus:border-transparent transition-all`}
                  placeholder="(123) 456-7890"
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Service of Interest *
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => handleChange('service', e.target.value)}
                  className={`w-full px-4 py-3 border ${
                    errors.service ? 'border-red-300' : 'border-gray-300'
                  } rounded-xl focus:ring-2 focus:ring-[#6B8E23] focus:border-transparent transition-all`}
                >
                  <option value="">Select a service</option>
                  <optgroup label="Dental Services">
                    <option value="root-canal">Root Canal Treatment</option>
                    <option value="scaling-polishing">Scaling & Polishing</option>
                    <option value="teeth-whitening">Teeth Whitening/Bleaching</option>
                    <option value="cosmetic-filling">Cosmetic Tooth Colored Filling</option>
                    <option value="smile-design">Smile Design</option>
                    <option value="gum-treatment">Gum Treatment</option>
                    <option value="dental-jewellery">Dental Jewellery</option>
                    <option value="dental-implants">Dental Implants and Bone Management</option>
                    <option value="dentures">Removable and Fixed Dentures</option>
                    <option value="cast-partial">Cast Partial Dentures</option>
                    <option value="zirconium-crowns">Zirconium Crowns</option>
                    <option value="pfm-crowns">PFM Crowns</option>
                    <option value="extractions">Simple Extractions, Complex Extraction and Surgery</option>
                    <option value="wisdom-tooth">Wisdom Tooth Surgery</option>
                    <option value="sealants">Pits and Fissure Sealants</option>
                    <option value="orthodontic">Orthodontic Treatment</option>
                    <option value="clear-aligners">Clear Aligners</option>
                  </optgroup>
                  <optgroup label="Aesthetic Services">
                    <option value="hydrafacial">Hydrafacial</option>
                    <option value="laser">Laser</option>
                    <option value="prp">PRP (Face, Hair)</option>
                    <option value="microneedling">Microneedling</option>
                    <option value="mesotherapy">Mesotherapy</option>
                    <option value="mole-removal">Mole Removal</option>
                    <option value="chemical-peel">Chemical Peel</option>
                  </optgroup>
                </select>
                {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                rows={6}
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                className={`w-full px-4 py-3 border ${
                  errors.message ? 'border-red-300' : 'border-gray-300'
                } rounded-xl focus:ring-2 focus:ring-[#6B8E23] focus:border-transparent transition-all resize-none`}
                placeholder="Tell us how we can help you..."
              ></textarea>
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full md:w-auto bg-gradient-to-r from-[#6B8E23] to-[#8FAF3E] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-[#3F4F2F] hover:to-[#6B8E23] transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

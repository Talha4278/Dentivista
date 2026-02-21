import { Award, Heart, Users } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Dr. Muhammad Hashir (BDS, RDS, CHPE)',
      role: 'Senior Dental Surgeon & Clinical Educator ',
      specialty: 'Restorative Dentistry, Clinical Training & Patient-Centered Care',
      image: '/Dr Hashir.jpeg',
      bio: 'Dr. Muhammad Hashir is a dedicated dental surgeon with extensive experience in restorative and general dentistry. Holding a Bachelor of Dental Surgery (BDS), Registered Dental Surgeon (RDS) certification, and a Certificate in Health Professions Education (CHPE), he combines clinical excellence with a strong passion for education and professional development. Dr. Hashir is committed to delivering evidence-based, patient-focused treatments while maintaining the highest standards of care. His approach emphasizes precision, ethical practice, and long-term oral health outcomes.',
    },
    {
      name: 'Dr Rameesaha Hashir (BDS, RDS, Certified Aesthetician)',
      role: 'Aesthetic & Cosmetic Dental Surgeon',
      specialty: 'Cosmetic Dentistry, Smile Design & Facial Aesthetics',
      image: '',
      bio: 'Dr. Rameesha Hashir is a skilled dental professional specializing in aesthetic and cosmetic dentistry. With qualifications in BDS and RDS, along with certification in aesthetics, she focuses on enhancing smiles through minimally invasive and modern cosmetic procedures. Her expertise includes smile makeovers, teeth whitening, veneers, and facial aesthetic treatments. Known for her artistic eye and gentle approach, Dr. Rameesha prioritizes patient comfort while creating natural, confident smiles.',
    },
    {
      name: 'Dr. Umer Farooq (BDS, RDS, FCPS)',
      role: 'Consultant Dental Specialist',
      specialty: 'Advanced Clinical Dentistry & Specialized Dental Procedures',
      image: '',
      bio: 'Dr. Umer Farooq is a highly qualified dental specialist with BDS, RDS, and FCPS credentials. With advanced clinical training and a strong commitment to excellence, he provides comprehensive and specialized dental care. His expertise spans complex procedures, advanced diagnostics, and evidence-based treatment planning. Dr. Umer is known for his meticulous clinical skills and dedication to achieving optimal functional and aesthetic outcomes for his patients.',
    },
    
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We treat every patient with empathy, respect, and genuine concern for their wellbeing.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to the highest standards of medical practice and continuous improvement.',
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Building lasting relationships with our patients and serving our community with dedication.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white via-[#F6FAEC] to-[#EEF4E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Our Clinic</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Providing exceptional healthcare services to our community for over 20 years.
            Our mission is to deliver personalized, compassionate care that improves lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-[#E3EBCB]"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#6B8E23] to-[#8FAF3E] rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mb-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our experienced physicians are dedicated to providing you with the highest quality of care
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden h-64">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#6B8E23] to-[#8FAF3E] flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">{member.name.charAt(0)}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F2A14] to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-semibold text-[#CFE3A1]">{member.specialty}</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-[#3F4F2F] font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

const About = () => {
  const team = [
    {
      name: 'Dr. Muhammad Hashir (BDS, RDS, CHPE)',
      role: 'Senior Dental Surgeon & Clinical Educator',
      specialty: 'Restorative Dentistry, Clinical Training & Patient-Centered Care',
      image: '/Dr Hashir.jpeg',
      bio: 'Dr. Muhammad Hashir is a dedicated dental surgeon with extensive experience in restorative and general dentistry. Holding a Bachelor of Dental Surgery (BDS), Registered Dental Surgeon (RDS) certification, and a Certificate in Health Professions Education (CHPE), he combines clinical excellence with a strong passion for education and professional development. Dr. Hashir is committed to delivering evidence-based, patient-focused treatments while maintaining the highest standards of care.',
    },
    {
      name: 'Dr. Rameesha Hashir (BDS, RDS, Certified Aesthetician)',
      role: 'Aesthetic & Cosmetic Dental Surgeon',
      specialty: 'Cosmetic Dentistry, Smile Design & Facial Aesthetics',
      image: '',
      bio: 'Dr. Rameesha Hashir is a skilled dental professional specializing in aesthetic and cosmetic dentistry. With qualifications in BDS and RDS, along with certification in aesthetics, she focuses on enhancing smiles through minimally invasive and modern cosmetic procedures. Her expertise includes smile makeovers, teeth whitening, veneers, and facial aesthetic treatments.',
    },
    {
      name: 'Dr. Umer Farooq (BDS, RDS, FCPS)',
      role: 'Consultant Dental Specialist',
      specialty: 'Advanced Clinical Dentistry & Specialized Dental Procedures',
      image: '',
      bio: 'Dr. Umer Farooq is a highly qualified dental specialist with BDS, RDS, and FCPS credentials. With advanced clinical training and a strong commitment to excellence, he provides comprehensive and specialized dental care spanning complex procedures, advanced diagnostics, and evidence-based treatment planning.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white via-[#F6FAEC]/50 to-[#EEF4E1]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#6B8E23] font-bold text-sm uppercase tracking-wider bg-white px-4 py-1.5 rounded-full border border-[#E3EBCB] inline-block mb-3">
            Clinical Leadership & Trust
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meet Our Doctors & Specialists</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of qualified dental surgeons and certified aesthetic practitioners is dedicated to delivering evidence-based care with a personal, gentle touch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-[#E3EBCB] flex flex-col justify-between"
            >
              <div>
                <div className="relative overflow-hidden h-72">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#6B8E23] to-[#8FAF3E] flex items-center justify-center">
                      <span className="text-white text-5xl font-bold">{member.name.charAt(4) || member.name.charAt(0)}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#EAF2D3] bg-[#3F4F2F]/80 backdrop-blur-md px-3 py-1 rounded-full inline-block mb-1">
                      {member.specialty}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#6B8E23] font-semibold text-sm mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

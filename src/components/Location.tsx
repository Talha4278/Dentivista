import { MapPin, Navigation, Building } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-20 bg-gradient-to-b from-white via-[#F6FAEC] to-[#EEF4E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Find Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conveniently located in the heart of the city with ample parking
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#F6FAEC] to-white rounded-2xl p-8 border border-[#E3EBCB]">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6B8E23] to-[#8FAF3E] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-700 leading-relaxed">
                    1st floor - 6/Street 2 - Down Town Royal Orchard<br />
                    Multan<br />
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#F6FAEC] to-white rounded-2xl p-8 border border-[#E3EBCB]">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6B8E23] to-[#8FAF3E] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Navigation className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Directions</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Easy access from Highway 101, Exit 45. Free parking available in the adjacent structure.
                  </p>
                  <a
                    href="https://share.google/aHkoqGmq426wYR646"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#6B8E23] font-semibold hover:text-[#3F4F2F] transition-colors"
                  >
                    Get Directions
                    <Navigation size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#F6FAEC] to-white rounded-2xl p-8 border border-[#E3EBCB]">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6B8E23] to-[#8FAF3E] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Parking & Accessibility</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Wheelchair accessible entrance on ground floor. Elevator access to all floors.
                    Complimentary valet parking available Mon-Fri.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.612568743586!2d71.5584173!3d30.24812300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b35c234ccb5dd%3A0xbf37e737d9c97f1d!2sDENTIVISTA%20Dental%20%26%20Aesthetics!5e0!3m2!1sen!2s!4v1770570390737!5m2!1sen!2s" 
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location Map"
            ></iframe>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#3F4F2F] via-[#6B8E23] to-[#8FAF3E] rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Visit Us Today</h3>
          <p className="text-xl text-[#F4F8EE] mb-6 max-w-2xl mx-auto">
            Walk-ins welcome for urgent care. For scheduled appointments, please call ahead or book online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+923000979185"
              className="bg-white text-[#3F4F2F] px-8 py-3 rounded-full font-semibold hover:bg-[#F6FAEC] transition-all transform hover:scale-105 inline-block"
            >
              Call Now
            </a>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#3F4F2F] transition-all transform hover:scale-105"
            >
              Book Online
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

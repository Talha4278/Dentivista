import { MapPin, Navigation, Clock } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-20 bg-gradient-to-b from-white via-[#F6FAEC]/40 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#6B8E23] font-bold text-sm uppercase tracking-wider bg-[#F6FAEC] px-4 py-1.5 rounded-full border border-[#E3EBCB] inline-block mb-3">
            Visit Our Clinic
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Location & Clinic Hours</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conveniently located in Down Town Royal Orchard, Multan with easy evening access and parking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#F6FAEC] to-white rounded-2xl p-6 border border-[#E3EBCB] shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6B8E23] to-[#8FAF3E] rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Clinic Address</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    1st Floor - 6/Street 2 - Down Town Royal Orchard<br />
                    Multan, Pakistan
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#F6FAEC] to-white rounded-2xl p-6 border border-[#E3EBCB] shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6B8E23] to-[#8FAF3E] rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow-md">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Operating Hours</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    <span className="font-semibold">Monday – Saturday:</span> 5:00 PM – 10:00 PM<br />
                    <span className="text-gray-500 text-xs">(Sunday: Closed)</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#F6FAEC] to-white rounded-2xl p-6 border border-[#E3EBCB] shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6B8E23] to-[#8FAF3E] rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow-md">
                  <Navigation className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Directions & Parking</h3>
                  <p className="text-gray-700 leading-relaxed text-sm mb-3">
                    Located in Down Town Royal Orchard, Multan. Free parking available in the adjacent area.
                  </p>
                  <a
                    href="https://share.google/aHkoqGmq426wYR646"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#6B8E23] font-bold hover:text-[#3F4F2F] transition-colors text-sm"
                  >
                    Open Google Maps Directions
                    <Navigation size={14} className="ml-1.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl border border-[#E3EBCB] h-[440px]">
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
      </div>
    </section>
  );
};

export default Location;

import {Facebook,Instagram} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1F2A14] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center relative">
              <img
                src="/icon.png"
                alt="Dentivista logo"
                className="w-20 h-20 object-contain relative z-10"
                style={{
                  mixBlendMode: 'multiply',
                  filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.9)) drop-shadow(0 0 6px rgba(255, 255, 255, 0.7)) contrast(1.3) brightness(1.15)',
                  WebkitFilter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.9)) drop-shadow(0 0 6px rgba(255, 255, 255, 0.7)) contrast(1.3) brightness(1.15)'
                }}
              />
              </div>
              <span className="text-xl font-bold">Dentivista Dental & Aesthetics</span>
            </div>
            <p className="text-gray-300 mb-4">
              Providing exceptional healthcare services with compassion and expertise.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/p/Dentivista-61578077104083/" className="text-gray-300 hover:text-[#8FAF3E] transition-colors">
                <Facebook size={20} />
              </a>
              
              <a href="https://www.instagram.com/dentivista?igsh=MWd3c2JvNzVueDFkdA==" className="text-gray-300 hover:text-[#8FAF3E] transition-colors">
                <Instagram size={20} />
              </a>
              
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#EAF2D3]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-[#8FAF3E] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-[#8FAF3E] transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-[#8FAF3E] transition-colors"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-[#8FAF3E] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#EAF2D3]">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Root canal treatment</li>
              <li>Scaling polishing</li>
              <li>Teeth Whitening/ Bleaching</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#EAF2D3]">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>(+92) 300-0979185</li>
              <li>dentivistadentalandaesthetics@gmail.com</li>
              <li>Royal Orchard, Multan</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#3F4F2F] pt-8 flex flex-col md:flex-row justify-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Dentivista dental & aesthetics. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;

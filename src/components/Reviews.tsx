import { useState, useEffect, useRef } from 'react';
import { Star, Quote, Video, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const GoogleLogoSVG = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      fill="#EA4335"
    />
  </svg>
);

interface GoogleReview {
  id: string;
  author_name: string;
  author_avatar?: string;
  rating: number;
  relative_time: string;
  comment: string;
  treatment?: string;
  video_url?: string | null;
  verified_google: boolean;
}

const googleReviewsData: GoogleReview[] = [
  {
    id: '1',
    author_name: 'Mohib',
    rating: 5,
    relative_time: '2 months ago',
    comment:
      'Outstanding service! The entire team made me feel comfortable throughout my visit for dental treatment. The results exceeded my expectations.',
    treatment: 'Dental Care & Smile Restoration',
    video_url: '/review 1.mp4',
    verified_google: true,
  },
  {
    id: '2',
    author_name: 'Sarah M.',
    rating: 5,
    relative_time: '1 month ago',
    comment:
      'The team was incredibly gentle and professional. I got teeth whitening and smile design done here. I finally feel confident about my smile again!',
    treatment: 'Teeth Whitening & Smile Design',
    video_url: null,
    verified_google: true,
  },
  {
    id: '3',
    author_name: 'Abdul Wais',
    rating: 5,
    relative_time: '3 months ago',
    comment:
      'Professional, friendly, and efficient. I had a wonderful experience at Dentivista and would definitely recommend to friends and family in Multan.',
    treatment: 'General Dentistry & Aesthetics',
    video_url: '/review 2.mp4',
    verified_google: true,
  },
  {
    id: '4',
    author_name: 'Ayesha K.',
    rating: 5,
    relative_time: '2 weeks ago',
    comment:
      'Very caring staff and modern equipment. Dr. Hashir took time to explain every step of my treatment. Highly recommended clinic in Royal Orchard!',
    treatment: 'Root Canal & Crown Placement',
    video_url: null,
    verified_google: true,
  },
  {
    id: '5',
    author_name: 'Hamza N.',
    rating: 5,
    relative_time: '1 month ago',
    comment:
      'Best dental and aesthetic clinic in Multan! Got Hydrafacial and scaling done. Extremely clean environment and very qualified doctor team.',
    treatment: 'Hydrafacial & Dental Scaling',
    video_url: null,
    verified_google: true,
  },
  {
    id: '6',
    author_name: 'Dr. Tariq Mahmood',
    rating: 5,
    relative_time: '3 months ago',
    comment:
      'State-of-the-art dental facility in Down Town Royal Orchard with FCPS consultant specialists. Exceptional standard of sterilisation and patient care.',
    treatment: 'Consultant Dental Care',
    video_url: null,
    verified_google: true,
  },
];

const GOOGLE_MAPS_REVIEW_URL = 'https://share.google/aHkoqGmq426wYR646';

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Update items per page based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, googleReviewsData.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };

  // Auto-play carousel slider
  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [currentIndex, isPaused, maxIndex]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={18}
        className={index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
      />
    ));
  };

  const isLocalVideo = (url: string | null) => {
    if (!url) return false;
    return url.startsWith('/') || url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.mov');
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-[#EEF4E1]/30 via-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-1.5 rounded-full border border-[#E3EBCB] shadow-sm mb-4">
            <GoogleLogoSVG className="w-4 h-4" />
            <span className="text-gray-800 font-bold text-xs uppercase tracking-wider">Verified Google Reviews</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Loved by Our Patients on Google
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See real reviews and video stories from patients who restored their smiles and confidence at Dentivista.
          </p>

          {/* Google Business Rating Summary Card */}
          <div className="mt-8 inline-flex flex-col sm:flex-row items-center justify-center bg-white rounded-2xl px-6 py-4 border border-[#E3EBCB] shadow-md space-y-3 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-3">
              <GoogleLogoSVG className="w-8 h-8" />
              <div className="text-left">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-black text-gray-900 leading-none">5.0</span>
                  <div className="flex text-yellow-400">{renderStars(5)}</div>
                </div>
                <span className="text-xs text-gray-500 font-medium">Based on 20+ Verified Patient Reviews</span>
              </div>
            </div>

            <div className="hidden sm:block h-8 w-px bg-gray-200"></div>

            <a
              href={GOOGLE_MAPS_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#F6FAEC] text-[#6B8E23] hover:bg-[#6B8E23] hover:text-white px-4 py-2 rounded-full font-bold text-xs transition-all border border-[#E3EBCB]"
            >
              <span>View Google Business Profile</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Reviews Carousel Slider Container */}
        <div
          className="relative px-2 sm:px-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel Controls (Top Right on Desktop) */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Showing {currentIndex + 1} - {Math.min(currentIndex + itemsPerPage, googleReviewsData.length)} of {googleReviewsData.length} Reviews
            </span>

            <div className="flex space-x-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-white border border-[#E3EBCB] text-gray-700 hover:bg-[#6B8E23] hover:text-white hover:border-[#6B8E23] transition-all flex items-center justify-center shadow-sm focus:outline-none"
                aria-label="Previous reviews"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-white border border-[#E3EBCB] text-gray-700 hover:bg-[#6B8E23] hover:text-white hover:border-[#6B8E23] transition-all flex items-center justify-center shadow-sm focus:outline-none"
                aria-label="Next reviews"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Cards Carousel Grid Wrapper */}
          <div className="overflow-hidden py-4">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              }}
            >
              {googleReviewsData.map((review) => (
                <div
                  key={review.id}
                  className="px-3 flex-shrink-0"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-[#E3EBCB] hover:border-[#8FAF3E] h-full flex flex-col justify-between group">
                    <div>
                      {/* Top Header: Author + Google Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6B8E23] to-[#8FAF3E] text-white font-bold text-base flex items-center justify-center shadow-sm">
                            {review.author_name.charAt(0)}
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 text-sm leading-snug">{review.author_name}</h3>
                            <p className="text-xs text-gray-400">{review.relative_time}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1 bg-blue-50 text-blue-700 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-blue-100">
                          <GoogleLogoSVG className="w-3.5 h-3.5" />
                          <span>Google</span>
                        </div>
                      </div>

                      {/* Video Player Embed if present */}
                      {review.video_url && (
                        <div className="mb-4 rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-black">
                          <div className="relative pb-[56.25%]">
                            {isLocalVideo(review.video_url) ? (
                              <video
                                src={review.video_url}
                                className="absolute top-0 left-0 w-full h-full object-cover"
                                controls
                                playsInline
                                preload="metadata"
                              >
                                <track
                                  kind="captions"
                                  src={review.video_url?.includes('1') ? '/review-1-captions.vtt' : '/review-2-captions.vtt'}
                                  srcLang="en"
                                  label="English"
                                  default
                                />
                              </video>
                            ) : null}
                          </div>
                          <div className="flex items-center justify-center py-1.5 bg-[#F6FAEC] text-[#3F4F2F]">
                            <Video size={14} className="mr-1.5" aria-hidden="true" />
                            <span className="text-xs font-semibold">Video Testimonial</span>
                          </div>
                        </div>
                      )}

                      {/* Rating Stars & Treatment Tag */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex">{renderStars(review.rating)}</div>
                        {review.treatment && (
                          <span className="text-[11px] font-medium bg-[#F6FAEC] text-[#6B8E23] px-2.5 py-0.5 rounded-full border border-[#E3EBCB]">
                            {review.treatment}
                          </span>
                        )}
                      </div>

                      {/* Comment */}
                      <div className="relative">
                        <Quote className="text-[#6B8E23]/20 absolute -top-2 -left-2 w-6 h-6 pointer-events-none" />
                        <p className="text-gray-700 text-sm leading-relaxed relative z-10 pl-3 italic">
                          "{review.comment}"
                        </p>
                      </div>
                    </div>

                    {/* Bottom Google Verification Indicator */}
                    <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
                      <span className="flex items-center text-emerald-600 font-medium">
                        ✓ Verified Patient Review
                      </span>
                      <span>5.0 Star Rating</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex justify-center items-center space-x-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => setCurrentIndex(dotIndex)}
                className={`transition-all duration-300 rounded-full focus:outline-none ${
                  currentIndex === dotIndex
                    ? 'w-8 h-2.5 bg-[#6B8E23]'
                    : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${dotIndex + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Reviews on Google Link & Booking Callout */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-[#3F4F2F] via-[#6B8E23] to-[#8FAF3E] rounded-3xl p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <GoogleLogoSVG className="w-6 h-6 bg-white rounded-full p-1 shadow-sm" />
                <span className="text-[#EAF2D3] font-bold text-xs uppercase tracking-wider">Dentivista on Google Maps</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Read All 20+ Reviews on Google</h3>
              <p className="text-white/90 text-sm md:text-base max-w-xl">
                Check our official Google Business Profile to explore patient ratings, directions, and reviews for Dentivista Dental & Aesthetics in Royal Orchard, Multan.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full md:w-auto">
              <a
                href={GOOGLE_MAPS_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#3F4F2F] px-6 py-3.5 rounded-full font-bold hover:bg-[#F6FAEC] transition-all transform hover:scale-105 inline-flex items-center justify-center space-x-2 shadow-lg text-sm"
              >
                <GoogleLogoSVG className="w-5 h-5" />
                <span>View Google Listing</span>
                <ExternalLink size={16} />
              </a>

              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-transparent border-2 border-white text-white px-6 py-3.5 rounded-full font-bold hover:bg-white hover:text-[#3F4F2F] transition-all transform hover:scale-105 text-sm text-center"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Reviews;

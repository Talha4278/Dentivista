import { useState, useEffect } from 'react';
import { Star, Quote, Video } from 'lucide-react';
import { supabase, Review } from '../lib/supabase';

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('is_featured', { ascending: false })
        .order('created_at', { ascending: false });

      if (error) throw error;
      setReviews(data || []);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={20}
        className={index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
      />
    ));
  };

  const getYouTubeEmbedUrl = (url: string | null) => {
    if (!url) return null;
    if (url.includes('embed')) return url;
    const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop();
    return `https://www.youtube.com/embed/${videoId}`;
  };

  if (loading) {
    return (
      <section id="reviews" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-12 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Patient Reviews</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear what our patients have to say about their experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 ${
                review.is_featured ? 'ring-2 ring-[#6B8E23]' : ''
              }`}
            >
              {review.is_featured && (
                <div className="inline-block bg-gradient-to-r from-[#6B8E23] to-[#8FAF3E] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                  Featured Review
                </div>
              )}

              {review.video_url && (
                <div className="mb-6 rounded-xl overflow-hidden">
                  <div className="relative pb-[56.25%]">
                    <iframe
                      src={getYouTubeEmbedUrl(review.video_url) || ''}
                      className="absolute top-0 left-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="flex items-center justify-center mt-3 text-[#6B8E23]">
                    <Video size={18} className="mr-2" />
                    <span className="text-sm font-semibold">Video Testimonial</span>
                  </div>
                </div>
              )}

              <Quote className="text-[#6B8E23] mb-4" size={32} />

              <div className="flex mb-4">{renderStars(review.rating)}</div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">"{review.comment}"</p>

              <div className="pt-4 border-t border-gray-100">
                <p className="font-semibold text-gray-900">{review.patient_name}</p>
                <p className="text-sm text-gray-500">
                  {new Date(review.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-[#F6FAEC] to-[#EEF4E1] rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Share Your Experience</h3>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              We value your feedback and would love to hear about your experience with our clinic
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-[#6B8E23] to-[#8FAF3E] text-white px-8 py-3 rounded-full font-semibold hover:from-[#3F4F2F] hover:to-[#6B8E23] transition-all transform hover:scale-105 inline-block shadow-lg"
            >
              Leave a Review
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

import React, { useState, useEffect } from 'react';
import img1 from '../assets/Images/groom.jpeg';
import img2 from '../assets/Images/bride.png';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const testimonials = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in orci vitae nisi tincidunt elementum. Aliquam facilisis mi eget magna facilisis, a facilisis lacus tincidunt. Fusce faucibus mauris eu pharetra lobortis. Cras eu pretium enim, non condimentum arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      name: "Anna Smith",
      role: "Groom",
      image: img1
    },
    {
      id: 2,
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      name: "Ruchira Singha",
      role: "Bride",
      image: img2
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const goToSlide = (index) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center uppercase tracking-wider">
          What Our Clients Say
        </h2>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Testimonial Content */}
          <div className="text-center px-4 sm:px-8 md:px-12 transition-opacity duration-500">
            <div className="mb-8">
              <svg className="w-12 h-12 mx-auto mb-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mb-6 italic text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                "{testimonials[currentSlide].text}"
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center">
              <img
                src={testimonials[currentSlide].image}
                alt={testimonials[currentSlide].name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-gray-300 mb-3 sm:mb-0 sm:mr-4"
              />
              <div className="text-center sm:text-left">
                <h4 className="font-bold text-lg md:text-xl">{testimonials[currentSlide].name}</h4>
                {testimonials[currentSlide].role && (
                  <p className="text-gray-400 text-sm md:text-base">{testimonials[currentSlide].role}</p>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-2 sm:px-4">
            <button
              onClick={prevSlide}
              className="bg-gray-800 hover:bg-gray-700 p-1 sm:p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              aria-label="Previous testimonial"
              disabled={isAnimating}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="bg-gray-800 hover:bg-gray-700 p-1 sm:p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              aria-label="Next testimonial"
              disabled={isAnimating}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Indicator Dots */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full mx-1 focus:outline-none ${
                  currentSlide === index ? 'bg-white' : 'bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-10 sm:mt-12">
          <p className="text-xs sm:text-sm text-gray-400">www.DownloadNewThemes.com</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
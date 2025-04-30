import React, { useState, useEffect } from "react";
import img1 from "../assets/Images/groom.jpeg";
import img2 from "../assets/Images/bride.png";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in orci vitae nisi tincidunt elementum. Aliquam facilisis mi eget magna facilisis, a facilisis lacus tincidunt.",
      name: "Anna Smith",
      role: "Groom",
      image: img1,
    },
    {
      id: 2,
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
      name: "Ruchira Singha",
      role: "Bride",
      image: img2,
    },
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
      setCurrentSlide(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
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
    <section className="py-16 md:py-24 bg-white text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-16 text-center uppercase tracking-wider text-black">
          Testimonials
        </h2>

        <div className="relative">
          {/* Testimonial Content */}
          <div className="transition-opacity duration-500">
            <div className="mb-6">
              <svg
                className="w-8 h-8 mx-auto mb-6 text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mb-8 text-center italic text-base md:text-lg leading-relaxed text-gray-700">
                "{testimonials[currentSlide].text}"
              </p>
            </div>

            <div className="flex items-center justify-center">
              <img
                src={testimonials[currentSlide].image}
                alt={testimonials[currentSlide].name}
                className="w-14 h-14 rounded-full object-cover border border-gray-200 mr-4"
              />
              <div>
                <h4 className="font-medium text-base text-black">
                  {testimonials[currentSlide].name}
                </h4>
                {testimonials[currentSlide].role && (
                  <p className="text-gray-500 text-sm">
                    {testimonials[currentSlide].role}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full">
            <button
              onClick={prevSlide}
              className="bg-white hover:bg-gray-100 p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200 shadow-sm"
              aria-label="Previous testimonial"
              disabled={isAnimating}
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="bg-white hover:bg-gray-100 p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200 shadow-sm"
              aria-label="Next testimonial"
              disabled={isAnimating}
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 w-2 rounded-full mx-1.5 focus:outline-none transition-colors ${
                  currentSlide === index ? "bg-gray-800" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React, { useEffect, useRef } from "react";
import aboutimg from "../assets/Images/about_us_updated.jpeg";

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    // Initialize intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    // Observe elements
    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (titleRef.current) observer.observe(titleRef.current);

    // Animate features with staggered delay
    const features = document.querySelectorAll(".feature-item");
    features.forEach((feature, index) => {
      feature.style.transitionDelay = `${index * 150 + 500}ms`;
      observer.observe(feature);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative py-24 bg-white overflow-hidden scroll-smooth"
      id="about"
    >
      {/* Subtle background with red gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-50 to-white"></div>

      {/* Rose corner decorations - SVG with red color */}
      <div className="absolute top-10 right-10 w-64 h-64 opacity-5 pointer-events-none">
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="text-red-700"
        >
          <path
            d="M50,0 C50,50 100,50 100,50 C50,50 50,100 50,100 C50,50 0,50 0,50 C50,50 50,0 50,0 Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="absolute bottom-10 left-10 w-48 h-48 opacity-5 pointer-events-none">
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="text-red-700"
        >
          <path
            d="M50,0 C50,50 100,50 100,50 C50,50 50,100 50,100 C50,50 0,50 0,50 C50,50 50,0 50,0 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section heading with red accent */}
        <div
          ref={titleRef}
          className="text-center mb-16 opacity-0 transform translate-y-6 transition-all duration-1000 ease-out"
        >
          <h6 className="text-sm tracking-[0.25em] uppercase mb-3 text-red-600 inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-16 after:h-px after:bg-red-200 after:-translate-x-1/2 after:translate-y-4">
            About Our Studio
          </h6>
          <h2 className="text-3xl md:text-4xl font-light mb-0 leading-tight text-gray-800">
            Capturing Life's Most{" "}
            <span className="font-medium">Meaningful Moments</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Section with red border accents */}
          <div
            ref={imageRef}
            className="w-full lg:w-1/2 opacity-0 transform translate-x-10 transition-all duration-1000 ease-out"
          >
            <div className="relative">
              {/* Main image with refined frame */}
              <div className="relative p-1 border border-red-100 shadow-lg bg-white">
                <img
                  src={aboutimg}
                  alt="Professional photography session"
                  className="w-full h-auto object-cover"
                  style={{ objectPosition: "center 35%" }}
                  loading="lazy"
                />

                {/* Red rose corner accent */}
                <div className="absolute -top-8 -right-8 w-16 h-16 opacity-40">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-red-600"
                  >
                    <path
                      d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                <div className="absolute -bottom-8 -left-8 w-16 h-16 opacity-40 rotate-180">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-red-600"
                  >
                    <path
                      d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>

              {/* Elegant decorative borders with red accent */}
              <div className="absolute -top-3 -right-3 w-32 h-32 border-t border-r border-red-200"></div>
              <div className="absolute -bottom-3 -left-3 w-32 h-32 border-b border-l border-red-200"></div>
            </div>
          </div>

          {/* Text Content with red accents */}
          <div
            ref={contentRef}
            className="w-full lg:w-1/2 opacity-0 transform translate-y-10 transition-all duration-1000 ease-out"
          >
            <p className="text-base leading-relaxed text-gray-600 mb-6">
              We are a photography studio dedicated to creating timeless imagery
              with a focus on authenticity and artistry. Our approach combines
              technical excellence with creative vision to create photographs
              that truly resonate.
            </p>

            <p className="text-base leading-relaxed text-gray-600 mb-8">
              Specializing in weddings, portraits, and commercial photography,
              we transform fleeting moments into enduring visual stories that
              you'll cherish for years to come.
            </p>

            {/* Elegant divider with red rose accent */}
            <div className="flex items-center my-8 w-full">
              <div className="flex-grow h-px bg-red-100"></div>
              <div className="mx-4 text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-grow h-px bg-red-100"></div>
            </div>

            {/* Features with red accents on hover */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                  ),
                  title: "Professional Gear",
                  subtitle: "High-end equipment",
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  ),
                  title: "Quick Delivery",
                  subtitle: "Fast turnaround",
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    />
                  ),
                  title: "Diverse Styles",
                  subtitle: "Multiple approaches",
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  ),
                  title: "Secure Storage",
                  subtitle: "Protected archives",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start opacity-0 transform translate-y-4 feature-item p-4 hover:bg-red-50 transition-all duration-300 rounded-sm group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mt-0.5 mr-3 text-gray-700 group-hover:text-red-600 transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {feature.icon}
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-800 group-hover:text-red-900 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-500 group-hover:text-red-700 transition-colors duration-300">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS for refined animations */}
      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }

        .feature-item {
          transition: all 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
      `}</style>
    </div>
  );
};

export default About;

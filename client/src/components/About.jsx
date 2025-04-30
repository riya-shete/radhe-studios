import React, { useEffect, useRef } from "react";
import aboutimg from "../assets/Images/about_us_updated.jpeg";

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    [titleRef.current, imageRef.current, contentRef.current].forEach((el) => {
      if (el) observer.observe(el);
    });

    const featureItems = document.querySelectorAll(".feature-item");
    featureItems.forEach((item, index) => {
      item.style.transitionDelay = `${index * 150 + 300}ms`;
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    { title: "Professional Gear", subtitle: "High-end equipment" },
    { title: "Quick Delivery", subtitle: "Fast turnaround" },
    { title: "Diverse Styles", subtitle: "Multiple approaches" },
    { title: "Secure Storage", subtitle: "Protected archives" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 bg-white overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-50 to-white"></div>

      {/* Decorative SVGs */}
      <div className="absolute top-10 right-10 w-64 h-64 opacity-5">
        <DecorativeRose />
      </div>
      <div className="absolute bottom-10 left-10 w-48 h-48 opacity-5">
        <DecorativeRose />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Title */}
        <div
          ref={titleRef}
          className="text-center mb-12 md:mb-16 opacity-0 transform translate-y-6 transition-all duration-1000 ease-out"
        >
          <h6 className="text-sm tracking-[0.25em] uppercase mb-3 text-red-600 relative after:block after:w-16 after:h-px after:bg-red-300 after:mx-auto after:mt-4">
            About Our Studio
          </h6>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-800 leading-tight">
            Capturing Life's Most{" "}
            <span className="font-medium">Meaningful Moments</span>
          </h2>
        </div>

        {/* Image and Content - Reordered for mobile */}
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
          {/* Image Section - Left-Aligned on Mobile */}
          <div
            ref={imageRef}
            className="w-full lg:w-1/2 opacity-0 transform translate-x-10 transition-all duration-1000 ease-out flex justify-start"
          >
            <div className="relative p-1 border border-red-100 bg-white shadow-lg w-4/5 md:w-5/6 lg:w-full">
              <img
                src={aboutimg}
                alt="Photography session"
                className="w-full object-cover"
                style={{ objectPosition: "center 35%" }}
                loading="lazy"
              />
              <CornerRoses />
              <FrameBorders />
            </div>
          </div>

          {/* Text Content */}
          <div
            ref={contentRef}
            className="w-full lg:w-1/2 mt-16 lg:mt-0 opacity-0 transform translate-y-10 transition-all duration-1000 ease-out"
          >
            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              We are a photography studio dedicated to creating timeless imagery
              that balances technical excellence with creative artistry.
            </p>
            <p className="text-base text-gray-600 mb-8 leading-relaxed">
              Specializing in weddings, portraits, and commercial shoots, we
              transform fleeting moments into lasting memories.
            </p>

            {/* Divider */}
            <div className="flex items-center my-8">
              <div className="flex-grow h-px bg-red-100"></div>
              <div className="mx-4 text-red-500">
                <HeartIcon />
              </div>
              <div className="flex-grow h-px bg-red-100"></div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="feature-item flex items-start p-4 opacity-0 transform translate-y-4 transition-all duration-700 group hover:bg-red-50 rounded-sm"
                >
                  <BulletIcon />
                  <div>
                    <h4 className="font-medium text-gray-800 group-hover:text-red-900 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-500 group-hover:text-red-700 transition-colors">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-specific styles */}
      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }

        @media (max-width: 768px) {
          .corner-rose-left {
            left: -8px !important;
          }

          .frame-border-left {
            left: -8px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;

/* ---- Separated Small Components ---- */
const DecorativeRose = () => (
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
);

const CornerRoses = () => (
  <>
    <div className="absolute -top-8 -right-8 w-14 sm:w-16 h-14 sm:h-16 opacity-40">
      <svg viewBox="0 0 24 24" className="text-red-600" fill="currentColor">
        <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
      </svg>
    </div>
    <div className="absolute -bottom-8 -left-8 w-14 sm:w-16 h-14 sm:h-16 opacity-40 rotate-180 corner-rose-left">
      <svg viewBox="0 0 24 24" className="text-red-600" fill="currentColor">
        <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
      </svg>
    </div>
  </>
);

const FrameBorders = () => (
  <>
    <div className="absolute -top-3 -right-3 w-24 sm:w-32 h-24 sm:h-32 border-t border-r border-red-200"></div>
    <div className="absolute -bottom-3 -left-3 w-24 sm:w-32 h-24 sm:h-32 border-b border-l border-red-200 frame-border-left"></div>
  </>
);

const HeartIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
      clipRule="evenodd"
    />
  </svg>
);

const BulletIcon = () => (
  <svg
    className="h-5 w-5 mt-0.5 mr-3 text-gray-700 group-hover:text-red-600"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 12h14M12 5l7 7-7 7"
    />
  </svg>
);

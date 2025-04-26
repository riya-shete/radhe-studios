import React from "react";
import HeroImage from "../assets/Images/hero_updated.jpeg";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <img
          src={HeroImage}
          alt="Radhe Studios Professional Photography"
          className="w-full h-full object-cover"
          style={{
            objectPosition: "center 35%",
          }}
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {/* Gradient Overlay - Adjusted for blue text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/50 to-transparent z-1"></div>

      {/* Content Container - Moved to bottom left */}
      <div className="relative z-10 h-full flex items-end justify-start px-6 pb-20 lg:pb-24 lg:px-16">
        <div className="max-w-2xl text-left">
          {/* Logo Text with blue and fuchsia typography */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight"
            style={{ color: "#03435f" }}
          >
            <span className="block">RADHE</span>
            <span
              className="block text-transparent bg-clip-text mt-1"
              style={{
                backgroundImage: "linear-gradient(to right, #03435f, #ff005e)",
              }}
            >
              STUDIOS
            </span>
          </h1>

          {/* Refined divider - left aligned with color combo */}
          <div
            className="w-24 h-px my-6"
            style={{
              backgroundImage: "linear-gradient(to right, #03435f, #ff005e)",
            }}
          ></div>

          {/* Client's tagline */}
          <p
            className="text-lg max-w-xl leading-relaxed mb-8 font-medium"
            style={{ color: "#03435f" }}
          >
            Where Art Meets The Lense
          </p>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-5">
            <button
              className="px-8 py-3.5 text-white font-medium rounded-none hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              style={{ backgroundColor: "#03435f" }}
            >
              View Portfolio
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
            <button
              className="px-8 py-3.5 border font-medium rounded-none hover:bg-pink-50 transition-all duration-300"
              style={{ borderColor: "#ff005e", color: "#ff005e" }}
            >
              Book a Session
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden lg:block absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-pulse duration-1000">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;

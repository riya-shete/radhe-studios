import React, { useEffect, useState } from "react";
import HeroImage from "../assets/Images/hero_updated.jpeg";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  // Add subtle parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Original proportions maintained */}
      <div
        className="absolute inset-0 transform transition-transform duration-700"
        style={{ transform: scrolled ? "scale(1.05)" : "scale(1.03)" }}
      >
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

      {/* Subtle overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/20 z-1"></div>

      {/* Content Container - REPOSITIONED to bottom */}
      <div className="absolute bottom-16 left-0 right-0 z-10 px-6 text-center animate-fade-in">
        {/* Studio name - Positioned to avoid obscuring faces */}
        <h1 className="text-4xl md:text-6xl font-normal tracking-wider mb-2 text-white drop-shadow-lg">
          RADHE STUDIOS
        </h1>

        {/* Tagline - Below main title */}
        <p className="text-sm md:text-base text-white font-medium mb-8 tracking-[0.25em] uppercase drop-shadow-lg">
          WHERE ART MEETS THE LENS
        </p>

        {/* Buttons - At the bottom */}
        <div className="flex flex-row gap-4 justify-center">
          <button className="px-8 py-3 text-white font-medium border border-white hover:bg-white hover:text-black transition-all duration-300 tracking-wider text-sm">
            View Portfolio
          </button>
          <button className="px-8 py-3 text-black font-medium bg-white hover:bg-white/90 transition-all duration-300 tracking-wider text-sm">
            Book a Session
          </button>
        </div>
      </div>
    </div>
  );
};

// Add this CSS in your global styles or component
const styleElement = document.createElement("style");
styleElement.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in {
    animation: fadeIn 1s ease-out forwards;
  }
`;
document.head.appendChild(styleElement);

export default Hero;

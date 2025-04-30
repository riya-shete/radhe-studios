import React, { useEffect, useState } from "react";
import HeroImage from "../assets/Images/hero_updated.jpeg";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile-specific styles
  const mobileStyles = {
    heroHeight: "min-h-[90vh]", // Slightly shorter on mobile
    titleSize: "text-5xl", // Adjusted for mobile
    taglineSize: "text-xs", // Smaller on mobile
    buttonPadding: "px-6 py-2", // More compact buttons
    buttonText: "text-xs", // Smaller button text
    contentBottom: "bottom-10", // Adjusted position
  };

  return (
    <div
      className={`relative w-full ${mobileStyles.heroHeight} md:min-h-screen flex items-center justify-center overflow-hidden`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 transform transition-transform duration-700"
        style={{ transform: scrolled ? "scale(1.05)" : "scale(1.03)" }}
      >
        <img
          src={HeroImage}
          alt="Radhe Studios Professional Photography"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 35%" }}
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-1"></div>

      {/* Content Container */}
      <div
        className={`absolute ${mobileStyles.contentBottom} md:bottom-16 left-0 right-0 z-10 px-4 md:px-6 text-center animate-fade-in`}
      >
        {/* Studio name */}
        <h1
          className={`${mobileStyles.titleSize} md:text-6xl font-normal tracking-wider mb-2 text-white drop-shadow-lg`}
        >
          RADHE STUDIOS
        </h1>

        {/* Tagline */}
        <p
          className={`${mobileStyles.taglineSize} md:text-base text-white font-medium mb-6 md:mb-8 tracking-[0.25em] uppercase drop-shadow-lg`}
        >
          WHERE ART MEETS THE LENS
        </p>

        {/* Buttons */}
        <div className="flex flex-row gap-3 md:gap-4 justify-center">
          <button
            className={`${mobileStyles.buttonPadding} md:px-8 md:py-3 ${mobileStyles.buttonText} md:text-sm text-white font-medium border border-white hover:bg-white hover:text-black transition-all duration-300 tracking-wider`}
          >
            View Portfolio
          </button>
          <button
            className={`${mobileStyles.buttonPadding} md:px-8 md:py-3 ${mobileStyles.buttonText} md:text-sm text-black font-medium bg-white hover:bg-white/90 transition-all duration-300 tracking-wider`}
          >
            Book a Session
          </button>
        </div>
      </div>
    </div>
  );
};

// CSS injection with cleanup
useEffect(() => {
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

  return () => {
    document.head.removeChild(styleElement);
  };
}, []);

export default React.memo(Hero);

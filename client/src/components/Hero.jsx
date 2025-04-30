import React, { useEffect, useState } from "react";
import HeroImage from "../assets/Images/hero_updated.jpeg"; // Make sure this path is correct

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  // Add subtle parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Adjust threshold slightly if needed, 20 seems reasonable
      if (scrollTop > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Add CSS animation logic ---
  // Ensure this runs only once on component mount
  useEffect(() => {
    const styleId = "hero-fade-in-animation";
    if (!document.getElementById(styleId)) {
      const styleElement = document.createElement("style");
      styleElement.id = styleId;
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
    }
    // No cleanup needed for this static style element unless the component unmounts frequently
    // and you want to be extremely tidy. For a Hero component, it's likely fine.
  }, []);
  // --- End CSS animation logic ---

  return (
    // Ensure min-h-screen works well on mobile (often needs viewport units like 100svh for reliability)
    // Using min-h-[80svh] or min-h-[90svh] might be safer than min-h-screen on mobile if you encounter address bar issues
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
            // This positioning works well for landscape, might need adjustment
            // for portrait if the subject gets cropped awkwardly. Test with your image.
            objectPosition: "center 35%", // Keep or adjust based on image content on mobile
          }}
          loading="eager" // Keep for LCP
          fetchPriority="high" // Keep for LCP
        />
      </div>
      {/* Subtle overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/25 z-1"></div>{" "}
      {/* Slightly darker overlay */}
      {/* Content Container - REPOSITIONED to bottom */}
      {/* Adjusted padding and bottom offset for mobile */}
      <div className="absolute bottom-10 md:bottom-16 left-0 right-0 z-10 px-4 sm:px-6 text-center animate-fade-in">
        {/* Studio name - Adjusted font size for mobile */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-normal tracking-wider mb-2 text-white drop-shadow-lg">
          RADHE STUDIOS
        </h1>

        {/* Tagline - Adjusted font size and margin for mobile */}
        <p className="text-xs sm:text-sm md:text-base text-white font-medium mb-6 md:mb-8 tracking-[0.2em] md:tracking-[0.25em] uppercase drop-shadow-lg">
          WHERE ART MEETS THE LENS
        </p>

        {/* Buttons - Adjusted padding, text size slightly, maybe stack on very small screens if needed */}
        {/* Using flex-wrap in case buttons are too wide on smallest screens */}
        <div className="flex flex-row flex-wrap gap-3 sm:gap-4 justify-center">
          {/* Adjusted button padding and text size for mobile */}
          <button className="px-6 py-2 sm:px-8 sm:py-3 text-white font-medium border border-white hover:bg-white hover:text-black transition-all duration-300 tracking-wide sm:tracking-wider text-xs sm:text-sm">
            View Portfolio
          </button>
          <button className="px-6 py-2 sm:px-8 sm:py-3 text-black font-medium bg-white hover:bg-white/90 transition-all duration-300 tracking-wide sm:tracking-wider text-xs sm:text-sm">
            Book a Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

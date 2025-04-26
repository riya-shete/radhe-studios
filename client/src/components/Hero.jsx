import React from 'react';
import HeroImage from '../assets/Images/hero_updated.jpeg';

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-gray-900 mt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-1"
        style={{
          backgroundImage: `url(${HeroImage})`,
          opacity: 0.8
        }}
      />

      {/* Overlay for Better Contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end z-10">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
           Welcome to RADHE STUDIOS
          </h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-200 max-w-lg">
            Welcome to our world
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
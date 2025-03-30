import React from 'react';
import aboutimg from '../assets/Images/aboutusimage.png';

const About = () => {
  return (
    <div className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="relative overflow-hidden rounded shadow-lg">
              <img
                src={aboutimg}
                alt="Photography session"
                className="w-full h-auto object-cover transform hover:scale-105 transition duration-500"
              />
            </div>
          </div>
          
          {/* Right Side - Text */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 uppercase tracking-tight">
              Photography is the beauty of life captured
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
              We're a photography studio known for bold, artistic photography around the region.
              Taking photographs isn't just a job for us; it's a way of life. We specialize in
              capturing the memorable moments of your life including weddings, receptions and many more
              special occasions.
            </p>
            <button className="bg-black text-white text-sm uppercase py-3 px-6 self-start hover:bg-gray-800 transition duration-300 tracking-wide rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
              Contact Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
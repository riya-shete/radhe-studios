import React from 'react';
import img1 from '../assets/Images/image1.png';
import img2 from '../assets/Images/image2.png';
import img3 from '../assets/Images/image3.png';
import img4 from '../assets/Images/image4.png';
import img5 from '../assets/Images/image5.png';
import img6 from '../assets/Images/image6.png';
import img7 from '../assets/Images/image7.png';
import img8 from '../assets/Images/image8.png';
import img9 from '../assets/Images/image9.png';
import img10 from '../assets/Images/image10.png';
import img11 from '../assets/Images/image11.png';
import img12 from '../assets/Images/image12.png';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

const galleryItems = [
  { id: 1, title: 'My Latest Album', subtitle: 'Complete wedding photography' },
  { id: 2, title: 'Engagement Shoots', subtitle: 'Capturing the special moments' },
  { id: 3, title: 'Outdoor Photography', subtitle: 'Beautiful scenic portraits' },
  { id: 4, title: 'Candid Moments', subtitle: 'Real emotions, raw beauty' },
  { id: 5, title: 'Pre-Wedding Shoots', subtitle: 'Creating memories before the big day' },
  { id: 6, title: 'Maternity Photoshoots', subtitle: 'Cherishing new beginnings' },
  { id: 7, title: 'Family Portraits', subtitle: 'Love and togetherness in frames' },
  { id: 8, title: 'Fashion Photography', subtitle: 'Creative and stylish portraits' },
  { id: 9, title: 'Haldi Ceremony', subtitle: 'Haldi event coverage' },
  { id: 10, title: 'Birthday Photography', subtitle: 'Memories of special days' },
  { id: 11, title: 'Travel Photography', subtitle: 'Capturing places & stories' },
  { id: 12, title: 'Black & White Classics', subtitle: 'Timeless monochrome shots' },
];

const Gallery = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Our Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore our diverse photography portfolio showcasing our best work across various styles and occasions</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id} 
              className="relative overflow-hidden group aspect-square rounded shadow-md"
            >
              <img
                src={images[index]}
                alt={item.title || `Gallery Image ${item.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Fixed index comparison (item.id starts at 1, not 0) */}
              {item.id === 0 ? (
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center p-4 text-white">
                  <h3 className="text-lg md:text-xl font-semibold text-center uppercase">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-center mt-1">
                    {item.subtitle}
                  </p>
                </div>
              ) : (
                // Hover overlay for other items
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-center p-4">
                  {item.title && (
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold">
                      {item.title}
                    </h3>
                  )}
                  {item.subtitle && (
                    <p className="text-xs sm:text-sm mt-1">
                      {item.subtitle}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
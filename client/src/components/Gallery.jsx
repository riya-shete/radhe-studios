import React, { useEffect } from "react";

// Import all images
import img1 from "../assets/Images/image1_updated.jpeg";
import img2 from "../assets/Images/image2_updated.jpeg";
import img3 from "../assets/Images/image3_updated.jpeg";
import img4 from "../assets/Images/image4_updated.jpeg";
import img5 from "../assets/Images/image5_updated.jpeg";
import img6 from "../assets/Images/image6.jpeg";
import img7 from "../assets/Images/image7.jpeg";
import img8 from "../assets/Images/image8.jpeg";
import img9 from "../assets/Images/image9.jpeg";
import img10 from "../assets/Images/image10.jpeg";
import img11 from "../assets/Images/image11.jpeg";
import img12 from "../assets/Images/image12.jpeg";

const Gallery = () => {
  // Brand colors
  const brandBlue = "#03435f";
  const brandPink = "#ff005e";

  // Image arrangement optimized for masonry-style layout with full height hero
  const galleryStructure = [
    // Top hero image - full height and span
    {
      id: 11,
      title: "Travel Photography",
      subtitle: "Capturing breathtaking places & stories around the world",
      image: img11,
      className: "col-span-full md:col-span-6 hero-item",
    },

    // Left column - taller images
    {
      id: 1,
      title: "Wedding Collections",
      subtitle: "Complete wedding photography",
      image: img1,
      className: "col-span-full md:col-span-2 md:row-span-2 md:h-[36rem]",
    },
    {
      id: 5,
      title: "Pre-Wedding Shoots",
      subtitle: "Creating memories before the big day",
      image: img5,
      className: "col-span-full md:col-span-2 md:row-span-2 md:h-[36rem]",
    },

    // Middle column
    {
      id: 12,
      title: "Black & White Classics",
      subtitle: "Timeless monochrome shots",
      image: img12,
      className: "col-span-full md:col-span-2 md:row-span-1 md:h-72",
    },
    {
      id: 8,
      title: "Fashion Photography",
      subtitle: "Creative and stylish portraits",
      image: img8,
      className: "col-span-full md:col-span-2 md:row-span-1 md:h-72",
    },
    {
      id: 3,
      title: "Outdoor Photography",
      subtitle: "Beautiful scenic portraits",
      image: img3,
      className: "col-span-full md:col-span-2 md:row-span-1 md:h-72",
    },
    {
      id: 10,
      title: "Birthday Photography",
      subtitle: "Memories of special days",
      image: img10,
      className: "col-span-full md:col-span-2 md:row-span-1 md:h-72",
    },

    // Right column - varied heights
    {
      id: 4,
      title: "Candid Moments",
      subtitle: "Real emotions, raw beauty",
      image: img4,
      className: "col-span-full md:col-span-2 md:row-span-1 md:h-80",
    },
    {
      id: 7,
      title: "Family Portraits",
      subtitle: "Love and togetherness in frames",
      image: img7,
      className: "col-span-full md:col-span-2 md:row-span-1 md:h-64",
    },
    {
      id: 2,
      title: "Engagement Shoots",
      subtitle: "Capturing the special moments",
      image: img2,
      className: "col-span-full md:col-span-2 md:row-span-1 md:h-80",
    },
    {
      id: 9,
      title: "Haldi Ceremony",
      subtitle: "Haldi event coverage",
      image: img9,
      className: "col-span-full md:col-span-2 md:row-span-1 md:h-64",
    },

    // Bottom full width
    {
      id: 6,
      title: "Maternity Sessions",
      subtitle: "Cherishing new beginnings",
      image: img6,
      className: "col-span-full md:col-span-6 md:h-80",
    },
  ];

  useEffect(() => {
    // Create CSS for gallery animations and hover effects
    const style = document.createElement("style");
    style.innerHTML = `
      .gallery-grid {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 8px;
      }
      
      /* Full height hero item on desktop */
      @media (min-width: 768px) {
        .gallery-grid {
          gap: 12px;
        }
        
        .hero-item {
          height: 90vh !important;
          min-height: 600px;
        }
        
        .hero-item .gallery-title {
          font-size: 2.25rem;
        }
      }
      
      /* Mobile specific styles */
      @media (max-width: 767px) {
        .gallery-grid {
          grid-template-columns: 1fr !important;
          gap: 16px;
        }
        
        .gallery-item {
          grid-column: 1 / -1 !important;
          height: 350px !important;
        }
        
        .hero-item {
          height: 500px !important;
        }
      }
      
      .gallery-item {
        position: relative;
        overflow: hidden;
        opacity: 0;
        transform: scale(0.98);
        transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
      }
      
      .gallery-item.loaded {
        opacity: 1;
        transform: scale(1);
      }
      
      .gallery-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
      }
      
      .gallery-item:hover .gallery-image {
        transform: scale(1.05);
      }
      
      .gallery-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, 
          rgba(3, 67, 95, 0.85) 0%, 
          rgba(3, 67, 95, 0.5) 40%, 
          rgba(3, 67, 95, 0.2) 70%, 
          transparent 100%);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 24px;
        opacity: 0;
        transition: opacity 0.4s ease;
      }
      
      .gallery-item:hover .gallery-overlay {
        opacity: 1;
      }
      
      .gallery-text {
        transform: translateY(20px);
        opacity: 0;
        transition: all 0.5s ease;
        transition-delay: 0.1s;
        max-width: 100%;
      }
      
      .gallery-item:hover .gallery-text {
        transform: translateY(0);
        opacity: 1;
      }
      
      .gallery-title {
        color: white;
        font-weight: 300;
        margin-bottom: 4px;
        font-size: 1.1rem;
        line-height: 1.3;
      }
      
      .gallery-subtitle {
        color: rgba(255, 255, 255, 0.8);
        font-size: 0.85rem;
        font-weight: 300;
      }
      
      .gallery-divider {
        width: 40px;
        height: 1px;
        background-color: rgba(255, 255, 255, 0.7);
        margin: 8px 0;
      }
      
      .hero-item .gallery-title {
        font-size: 1.75rem;
      }
      
      .hero-item .gallery-subtitle {
        font-size: 1rem;
      }
      
      .hero-item .gallery-divider {
        width: 60px;
        margin: 12px 0;
      }
      
      .portfolio-button {
        position: relative;
        overflow: hidden;
        z-index: 1;
      }
      
      .portfolio-button::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background-color: ${brandBlue};
        transition: all 0.3s ease;
        z-index: -1;
      }
      
      .portfolio-button:hover::before {
        left: 0;
      }
      
      .portfolio-button:hover {
        color: white;
      }
    `;
    document.head.appendChild(style);

    // Apply staggered loading animation
    const items = document.querySelectorAll(".gallery-item");
    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("loaded");
      }, 100 + index * 90);
    });

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="py-16 md:py-24 relative bg-gray-50">
      {/* Subtle accent line */}
      <div
        className="absolute top-0 left-0 w-full h-0.5"
        style={{
          background: `linear-gradient(to right, ${brandBlue}, ${brandPink})`,
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Professional heading section */}
        <div className="text-center mb-10 md:mb-14">
          <h5
            className="uppercase tracking-widest text-xs mb-3 font-light"
            style={{ color: brandPink, letterSpacing: "0.25em" }}
          >
            Portfolio
          </h5>

          <h2
            className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight"
            style={{ color: brandBlue }}
          >
            Our Photography Collection
          </h2>

          <div
            className="w-16 h-px mx-auto mb-6"
            style={{
              background: `linear-gradient(to right, ${brandBlue}, ${brandPink})`,
            }}
          ></div>

          <p className="text-gray-600 max-w-2xl mx-auto text-base font-light leading-relaxed mb-8">
            A curated selection of our finest work, capturing precious moments
            and emotions across different styles and occasions.
          </p>
        </div>

        {/* Masonry-inspired gallery grid */}
        <div className="gallery-grid">
          {galleryStructure.map((item, index) => (
            <div
              key={item.id}
              className={`gallery-item ${item.className} ${
                index === 0 || index === galleryStructure.length - 1
                  ? "hero-item"
                  : ""
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="gallery-image"
                style={{
                  objectPosition: index === 0 ? "center 35%" : "center center",
                }}
              />

              <div className="gallery-overlay">
                <div className="gallery-text">
                  <h3 className="gallery-title">{item.title}</h3>
                  <div className="gallery-divider"></div>
                  <p className="gallery-subtitle">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional call-to-action button */}
        <div className="text-center mt-12 md:mt-16">
          <button
            className="portfolio-button px-8 py-3 border-2 text-sm uppercase tracking-wider font-light transition-all duration-300"
            style={{ borderColor: brandBlue, color: brandBlue }}
          >
            View Complete Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

import React, { useEffect, useRef, useState } from "react";

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
  // Brand colors - exactly matching the About section
  const brandRed = "#b91c1c"; // red-700
  const brandRedLight = "#fee2e2"; // red-100
  const textDark = "#1f2937"; // gray-800
  const textLight = "#6b7280"; // gray-500

  // Refs for elements
  const sectionRef = useRef(null);
  const galleryRef = useRef(null);

  // States for interactions
  const [hoverIndex, setHoverIndex] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [filterCategory, setFilterCategory] = useState("all");

  // Image categories
  const categories = [
    { id: "all", label: "All" },
    { id: "wedding", label: "Wedding" },
    { id: "portrait", label: "Portraits" },
    { id: "travel", label: "Travel" },
    { id: "family", label: "Family" },
  ];

  // Enhanced image data with categories
  const galleryStructure = [
    // Top hero image
    {
      id: 11,
      title: "Travel Photography",
      subtitle: "Capturing breathtaking places & stories around the world",
      image: img11,
      className: "col-span-full md:col-span-6 hero-item",
      category: "travel",
    },

    // Left column - taller images
    {
      id: 1,
      title: "Wedding Collections",
      subtitle: "Complete wedding photography",
      image: img1,
      className: "col-span-full md:col-span-2 md:row-span-2 md:h-[36rem]",
      category: "wedding",
    },
    {
      id: 5,
      title: "Pre-Wedding Shoots",
      subtitle: "Creating memories before the big day",
      image: img5,
      className: "col-span-full md:col-span-2 md:row-span-2 md:h-[36rem]",
      category: "wedding",
    },

    // Middle column
    {
      id: 12,
      title: "Black & White Classics",
      subtitle: "Timeless monochrome shots",
      image: img12,
      className: "col-span-full md:col-span-2 md:row-span-1 md:h-72",
      category: "portrait",
    },
    {
      id: 8,
      title: "Fashion Photography",
      subtitle: "Creative and stylish portraits",
      image: img8,
      className: "col-span-full md:col-span-2 md:row-span-1 md:h-72",
      category: "portrait",
    },
    {
      id: 3,
      title: "Outdoor Photography",
      subtitle: "Beautiful scenic portraits",
      image: img3,
      className: "col-span-full md:col-span-2 md:row-span-1 md:h-72",
      category: "travel",
    },
    {
      id: 10,
      title: "Birthday Photography",
      subtitle: "Memories of special days",
      image: img10,
      className: "col-span-full md:col-span-2 md:row-span-1 md:h-72",
      category: "family",
    },

    // Right column - varied heights
    {
      id: 4,
      title: "Candid Moments",
      subtitle: "Real emotions, raw beauty",
      image: img4,
      className: "col-span-full md:col-span-2 md:row-span-1 md:h-80",
      category: "wedding",
    },
    {
      id: 7,
      title: "Family Portraits",
      subtitle: "Love and togetherness in frames",
      image: img7,
      className: "col-span-full md:col-span-2 md:row-span-1 md:h-64",
      category: "family",
    },
    {
      id: 2,
      title: "Engagement Shoots",
      subtitle: "Capturing the special moments",
      image: img2,
      className: "col-span-full md:col-span-2 md:row-span-1 md:h-80",
      category: "wedding",
    },
    {
      id: 9,
      title: "Haldi Ceremony",
      subtitle: "Haldi event coverage",
      image: img9,
      className: "col-span-full md:col-span-2 md:row-span-1 md:h-64",
      category: "wedding",
    },

    // Bottom full width
    {
      id: 6,
      title: "Maternity Sessions",
      subtitle: "Cherishing new beginnings",
      image: img6,
      className: "col-span-full md:col-span-6 md:h-80",
      category: "family",
    },
  ];

  // Filter images based on selected category
  const filteredImages =
    filterCategory === "all"
      ? galleryStructure
      : galleryStructure.filter((item) => item.category === filterCategory);

  // Track scroll position for subtle animations
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Apply animation when changing categories
  useEffect(() => {
    if (galleryRef.current) {
      galleryRef.current.classList.add("category-transition");
      setTimeout(() => {
        if (galleryRef.current) {
          galleryRef.current.classList.remove("category-transition");
        }
      }, 500);
    }

    // Apply staggered loading animation to gallery items
    const items = document.querySelectorAll(".gallery-item");
    items.forEach((item, index) => {
      item.classList.remove("loaded");
      setTimeout(() => {
        item.classList.add("loaded");
      }, 100 + index * 100);
    });
  }, [filterCategory]);

  // Add enhanced styles with cleaner background
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      /* Main container styling - clean white background */
      .gallery-section {
        position: relative;
        background: white;
        overflow: hidden;
      }
      
      /* Subtle rose corner decorations */
      .decorative-rose {
        position: absolute;
        opacity: 0.03;
        pointer-events: none;
        z-index: 1;
      }
      
      .decorative-rose.top-right {
        top: 10%;
        right: 10%;
        width: 64px;
        height: 64px;
      }
      
      .decorative-rose.bottom-left {
        bottom: 10%;
        left: 10%;
        width: 48px;
        height: 48px;
        transform: rotate(180deg);
      }
      
      /* Content container */
      .content-container {
        position: relative;
        z-index: 10;
      }
      
      /* Elegant heading styles with subtle red accents */
      .portfolio-title {
        font-size: 0.75rem;
        font-weight: 400;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        color: ${brandRed};
        margin-bottom: 0.75rem;
        position: relative;
        display: inline-block;
      }
      
      .gallery-heading {
        font-size: 2.25rem;
        font-weight: 300;
        color: ${textDark};
        margin-bottom: 1.5rem;
        position: relative;
        display: inline-block;
      }
      
      .gallery-description {
        color: ${textLight};
        font-weight: 300;
        font-size: 1rem;
        line-height: 1.7;
        margin-bottom: 3rem;
      }
      
      /* Subtle divider with red heart */
      .section-divider {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin: 1.5rem 0 2.5rem;
      }
      
      .divider-line {
        height: 1px;
        background-color: #e5e7eb;
        width: 80px;
      }
      
      .divider-icon {
        margin: 0 1rem;
        color: ${brandRed};
      }
      
      /* Category filter with subtle styling */
      .category-filter {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 3rem;
      }
      
      .category-button {
        background: none;
        border: none;
        padding: 0.5rem 1rem;
        font-size: 0.85rem;
        color: ${textLight};
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        font-weight: 400;
        letter-spacing: 0.05em;
      }
      
      .category-button::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 1px;
        background-color: ${brandRed};
        transition: all 0.3s ease;
        transform: translateX(-50%);
      }
      
      .category-button:hover {
        color: ${textDark};
      }
      
      .category-button:hover::after {
        width: 20px;
      }
      
      .category-button.active {
        color: ${brandRed};
      }
      
      .category-button.active::after {
        width: 30px;
        background-color: ${brandRed};
      }
      
      /* Refined grid with better spacing */
      .gallery-grid {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 20px;
        position: relative;
        z-index: 10;
        transition: opacity 0.3s ease;
      }
      
      .category-transition {
        opacity: 0.7;
      }
      
      /* Gallery item styling with clean design */
      .gallery-item {
        position: relative;
        overflow: hidden;
        transition: transform 0.4s ease, box-shadow 0.4s ease;
        box-shadow: 0 2px 10px rgba(0,0,0,0.04);
        border: 1px solid rgba(0,0,0,0.03);
        border-radius: 2px;
      }
      
      .gallery-item:hover {
        box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        transform: translateY(-3px);
      }
      
      /* Image styling */
      .gallery-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s ease;
      }
      
      .gallery-item:hover .gallery-image {
        transform: scale(1.05);
      }
      
      /* Refined overlay */
      .gallery-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, 
          rgba(0, 0, 0, 0.8) 0%, 
          rgba(0, 0, 0, 0.4) 40%, 
          rgba(0, 0, 0, 0.1) 80%, 
          transparent 100%);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 28px;
        opacity: 0;
        transition: opacity 0.4s ease;
      }
      
      .gallery-item:hover .gallery-overlay {
        opacity: 1;
      }
      
      /* Text styling */
      .gallery-text {
        transform: translateY(15px);
        transition: transform 0.4s ease;
      }
      
      .gallery-item:hover .gallery-text {
        transform: translateY(0);
      }
      
      .gallery-title {
        color: white;
        font-weight: 400;
        margin-bottom: 4px;
        font-size: 1.1rem;
        letter-spacing: 0.02em;
      }
      
      .gallery-subtitle {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.85rem;
        font-weight: 300;
        letter-spacing: 0.01em;
      }
      
      .gallery-divider {
        width: 25px;
        height: 1px;
        background: ${brandRed};
        margin: 8px 0;
      }
      
      /* Category badge */
      .category-badge {
        position: absolute;
        top: 16px;
        right: 16px;
        background-color: rgba(0, 0, 0, 0.6);
        color: white;
        font-size: 0.7rem;
        padding: 3px 8px;
        border-radius: 3px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        font-weight: 400;
        opacity: 0;
        transform: translateY(-5px);
        transition: all 0.3s ease;
      }
      
      .gallery-item:hover .category-badge {
        opacity: 1;
        transform: translateY(0);
      }
      
      /* Full height hero item on desktop */
      @media (min-width: 768px) {
        .hero-item {
          height: 90vh !important;
          min-height: 600px;
        }
        
        .hero-item .gallery-title {
          font-size: 1.5rem;
          font-weight: 300;
          letter-spacing: 0.05em;
        }
        
        .hero-item .gallery-subtitle {
          font-size: 1rem;
        }
        
        .hero-item .gallery-divider {
          width: 40px;
        }
      }
      
      /* Mobile specific styles */
      @media (max-width: 767px) {
        .gallery-grid {
          grid-template-columns: 1fr !important;
          gap: 24px;
        }
        
        .gallery-item {
          grid-column: 1 / -1 !important;
          height: 350px !important;
        }
        
        .hero-item {
          height: 500px !important;
        }
        
        .gallery-heading {
          font-size: 1.75rem;
        }
        
        .gallery-overlay {
          opacity: 1;
          background: linear-gradient(to top, 
            rgba(0, 0, 0, 0.7) 0%, 
            rgba(0, 0, 0, 0.3) 50%, 
            transparent 100%);
        }
        
        .gallery-text {
          transform: translateY(0);
        }
        
        .category-filter {
          gap: 0.25rem;
        }
        
        .category-button {
          padding: 0.5rem 0.75rem;
          font-size: 0.8rem;
        }
      }
      
      /* Clean button with subtle styling */
      .portfolio-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 12px 32px;
        background: none;
        border: 1px solid ${textDark};
        color: ${textDark};
        font-size: 0.8rem;
        letter-spacing: 2px;
        text-transform: uppercase;
        font-weight: 400;
        transition: all 0.3s ease;
        cursor: pointer;
      }
      
      .portfolio-button:hover {
        background-color: ${textDark};
        color: white;
      }
      
      .arrow-icon {
        margin-left: 8px;
        transition: transform 0.3s ease;
      }
      
      .portfolio-button:hover .arrow-icon {
        transform: translateX(4px);
      }
      
      /* Loading animations */
      .gallery-item {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      
      .gallery-item.loaded {
        opacity: 1;
        transform: translateY(0);
      }
      
      /* No results message */
      .no-results {
        text-align: center;
        padding: 4rem 0;
        color: ${textLight};
        font-size: 1.1rem;
        font-weight: 300;
      }
    `;

    document.head.appendChild(style);

    // Apply initial loading animation
    const items = document.querySelectorAll(".gallery-item");
    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("loaded");
      }, 100 + index * 100);
    });

    return () => {
      document.head.removeChild(style);
    };
  }, [scrollY, textDark, brandRed, textLight, brandRedLight]);

  return (
    <section ref={sectionRef} className="py-24 gallery-section" id="portfolio">
      {/* Very subtle rose corner decorations */}
      <div className="decorative-rose top-right">
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
      <div className="decorative-rose bottom-left">
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

      <div className="container mx-auto px-6 lg:px-8 content-container">
        {/* Clean heading with subtle red accent */}
        <div className="text-center mb-8">
          <h5 className="portfolio-title">Our Portfolio</h5>
          <h2 className="gallery-heading">A Collection of Moments</h2>

          {/* Subtle heart divider */}
          <div className="section-divider">
            <div className="divider-line"></div>
            <div className="divider-icon">
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
            <div className="divider-line"></div>
          </div>

          <p className="gallery-description max-w-2xl mx-auto">
            A curated selection of our finest work, capturing precious moments
            and emotions across different styles and occasions.
          </p>
        </div>

        {/* Category filter */}
        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-button ${
                filterCategory === category.id ? "active" : ""
              }`}
              onClick={() => setFilterCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div ref={galleryRef} className="gallery-grid">
          {filteredImages.length > 0 ? (
            filteredImages.map((item, index) => (
              <div
                key={item.id}
                className={`gallery-item ${item.className} ${
                  index === 0 || index === filteredImages.length - 1
                    ? "hero-item"
                    : ""
                }`}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-image"
                  style={{
                    objectPosition:
                      index === 0 ? "center 35%" : "center center",
                  }}
                />

                {/* Category badge */}
                <div className="category-badge">
                  {categories.find((cat) => cat.id === item.category)?.label}
                </div>

                {/* Clean overlay with subtle red accent */}
                <div className="gallery-overlay">
                  <div className="gallery-text">
                    <h3 className="gallery-title">{item.title}</h3>
                    <div className="gallery-divider"></div>
                    <p className="gallery-subtitle">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results col-span-full">
              No images found in this category.
            </div>
          )}
        </div>

        {/* Clean button */}
        <div className="text-center mt-16">
          <button className="portfolio-button">
            View Complete Portfolio
            <span className="arrow-icon">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

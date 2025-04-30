import React, { useState, useEffect } from "react";

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
  const brandRed = "#b91c1c"; // red-700
  const textDark = "#1f2937"; // gray-800
  const textLight = "#6b7280"; // gray-500

  // States
  const [filterCategory, setFilterCategory] = useState("all");
  const [activeImageId, setActiveImageId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Image categories
  const categories = [
    { id: "all", label: "All" },
    { id: "wedding", label: "Wedding" },
    { id: "portrait", label: "Portraits" },
    { id: "travel", label: "Travel" },
    { id: "family", label: "Family" },
  ];

  // Image data
  const galleryImages = [
    {
      id: 11,
      title: "Travel Photography",
      subtitle: "Capturing breathtaking places & stories around the world",
      image: img11,
      isHero: true,
      category: "travel",
    },
    {
      id: 1,
      title: "Wedding Collections",
      subtitle: "Complete wedding photography",
      image: img1,
      isTall: true,
      category: "wedding",
    },
    {
      id: 5,
      title: "Pre-Wedding Shoots",
      subtitle: "Creating memories before the big day",
      image: img5,
      isTall: true,
      category: "wedding",
    },
    {
      id: 12,
      title: "Black & White Classics",
      subtitle: "Timeless monochrome shots",
      image: img12,
      category: "portrait",
    },
    {
      id: 8,
      title: "Fashion Photography",
      subtitle: "Creative and stylish portraits",
      image: img8,
      category: "portrait",
    },
    {
      id: 3,
      title: "Outdoor Photography",
      subtitle: "Beautiful scenic portraits",
      image: img3,
      category: "travel",
    },
    {
      id: 10,
      title: "Birthday Photography",
      subtitle: "Memories of special days",
      image: img10,
      category: "family",
    },
    {
      id: 4,
      title: "Candid Moments",
      subtitle: "Real emotions, raw beauty",
      image: img4,
      category: "wedding",
    },
    {
      id: 7,
      title: "Family Portraits",
      subtitle: "Love and togetherness in frames",
      image: img7,
      category: "family",
    },
    {
      id: 2,
      title: "Engagement Shoots",
      subtitle: "Capturing the special moments",
      image: img2,
      category: "wedding",
    },
    {
      id: 9,
      title: "Haldi Ceremony",
      subtitle: "Haldi event coverage",
      image: img9,
      category: "wedding",
    },
    {
      id: 6,
      title: "Maternity Sessions",
      subtitle: "Cherishing new beginnings",
      image: img6,
      isHero: true,
      category: "family",
    },
  ];

  // Filter images based on selected category
  const filteredImages =
    filterCategory === "all"
      ? galleryImages
      : galleryImages.filter((item) => item.category === filterCategory);

  // Toggle image info
  const toggleImageInfo = (id) => {
    if (isMobile) {
      setActiveImageId((prevId) => (prevId === id ? null : id));
    }
  };

  // Check for mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <section className="py-24 bg-white" id="portfolio">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h5 className="text-red-700 text-sm uppercase tracking-widest mb-2">
            Our Portfolio
          </h5>
          <h2 className="text-3xl font-light text-gray-800 mb-4">
            A Collection of Moments
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-px bg-gray-200"></div>
            <div className="mx-3 text-red-700">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="w-16 h-px bg-gray-200"></div>
          </div>

          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            A curated selection of our finest work, capturing precious moments
            and emotions across different styles and occasions.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 text-sm transition-colors ${
                filterCategory === category.id
                  ? "text-red-700 font-medium"
                  : "text-gray-500 hover:text-gray-800"
              }`}
              onClick={() => setFilterCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Ultra simple gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md ${
                item.isHero ? "md:col-span-2" : ""
              } ${item.isTall ? "md:row-span-2" : ""}`}
              style={{
                height: item.isHero
                  ? isMobile
                    ? "400px"
                    : "500px"
                  : item.isTall
                  ? isMobile
                    ? "400px"
                    : "600px"
                  : isMobile
                  ? "350px"
                  : "400px",
              }}
              onClick={() => toggleImageInfo(item.id)}
              onMouseEnter={() => !isMobile && setActiveImageId(item.id)}
              onMouseLeave={() => !isMobile && setActiveImageId(null)}
            >
              {/* Image - Always visible */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Info overlay - Separate element */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end transition-opacity duration-300 ${
                  activeImageId === item.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <div
                  className={`transform transition-transform duration-500 ${
                    activeImageId === item.id
                      ? "translate-y-0"
                      : "translate-y-8"
                  }`}
                >
                  <h3 className="text-white text-lg font-light mb-1">
                    {item.title}
                  </h3>
                  <div
                    className="w-0 h-0.5 bg-red-600 mb-2 transition-all duration-500"
                    style={{ width: activeImageId === item.id ? "24px" : "0" }}
                  ></div>
                  <p className="text-white/90 text-sm">{item.subtitle}</p>
                </div>

                {/* Category badge */}
                <span
                  className={`absolute top-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded uppercase tracking-wider transition-all duration-500 ${
                    activeImageId === item.id
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-4"
                  }`}
                >
                  {categories.find((cat) => cat.id === item.category)?.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 border border-gray-800 text-gray-800 uppercase text-sm tracking-wider hover:bg-gray-800 hover:text-white transition-colors duration-300">
            View Complete Portfolio
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

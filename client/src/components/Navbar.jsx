import React, { useState, useEffect } from "react";
import Logo from "../assets/Images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when window resizes to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Journal", href: "#journal" },
  ];

  const handleLinkClick = (name) => {
    setActiveLink(name);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src={Logo} alt="Radhe Studios Logo" className="h-10" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1 lg:space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm tracking-wider uppercase transition-colors px-3 py-2 relative ${
                  activeLink === link.name
                    ? "font-extrabold"
                    : "font-bold hover:opacity-80"
                }`}
                style={{ color: "#03435f" }}
                onClick={() => handleLinkClick(link.name)}
              >
                {link.name}
                {activeLink === link.name && (
                  <span
                    className="absolute bottom-0 left-0 w-full h-0.5"
                    style={{ backgroundColor: "#ff005e" }}
                  ></span>
                )}
              </a>
            ))}
          </div>

          {/* Contact button - only visible on larger screens */}
          <div className="hidden lg:block">
            <button
              className={`px-6 py-2 border text-sm font-bold tracking-wider uppercase transition-all duration-300 ${
                scrolled
                  ? "hover:bg-pink-50 border-[#ff005e] text-[#ff005e]"
                  : "hover:bg-white/10 border-[#03435f] text-[#03435f] bg-white/30"
              }`}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none transition-colors"
              style={{ color: "#03435f" }}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white py-4 px-4 border-t border-gray-200 mt-2 shadow-sm">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm uppercase tracking-wider py-3 px-2 transition-colors ${
                  activeLink === link.name
                    ? "bg-pink-50 font-extrabold"
                    : "hover:bg-blue-50 font-bold"
                }`}
                style={{
                  color: activeLink === link.name ? "#ff005e" : "#03435f",
                }}
                onClick={() => handleLinkClick(link.name)}
              >
                {link.name}
              </a>
            ))}
            <button
              className="mt-2 border py-3 transition-all duration-300 text-sm uppercase tracking-wider font-extrabold hover:bg-pink-50"
              style={{ borderColor: "#ff005e", color: "#ff005e" }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import Logo from "../assets/Images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
  ];

  const handleLinkClick = (name) => {
    setActiveLink(name);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo - Refined */}
          <div className="flex items-center">
            <img
              src={Logo}
              alt="Radhe Studios Logo"
              className={`h-8 transition-all duration-300 ${
                scrolled ? "opacity-100" : "opacity-90 filter drop-shadow-sm"
              }`}
            />
          </div>

          {/* Desktop Menu - Elegant spacing */}
          <div className="hidden md:flex space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs tracking-[0.2em] uppercase transition-colors py-2 relative ${
                  scrolled
                    ? activeLink === link.name
                      ? "text-black font-normal"
                      : "text-gray-600 hover:text-black"
                    : activeLink === link.name
                    ? "text-white font-normal"
                    : "text-white/90 hover:text-white"
                }`}
                onClick={() => handleLinkClick(link.name)}
              >
                {link.name}
                {activeLink === link.name && (
                  <span
                    className={`absolute bottom-0 left-0 w-full h-px ${
                      scrolled ? "bg-black" : "bg-white"
                    }`}
                  ></span>
                )}
              </a>
            ))}
          </div>

          {/* Contact button - More elegant */}
          <div className="hidden md:block">
            <button
              className={`px-6 py-2 text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
                scrolled
                  ? "text-black hover:bg-gray-50"
                  : "text-white/90 hover:text-white hover:bg-white/5"
              }`}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button - Refined */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 focus:outline-none transition-colors ${
                scrolled ? "text-black" : "text-white"
              }`}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="h-5 w-5"
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

      {/* Mobile Menu - More elegant */}
      <div
        className={`md:hidden bg-white shadow-md transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-[0.15em] py-2 transition-colors ${
                  activeLink === link.name
                    ? "text-black font-normal"
                    : "text-gray-500 hover:text-black"
                }`}
                onClick={() => handleLinkClick(link.name)}
              >
                {link.name}
              </a>
            ))}
            <button className="text-xs uppercase tracking-[0.15em] py-2 text-black hover:bg-gray-50 transition-colors mt-2">
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect, useRef } from "react";
import Logo from "../assets/Images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Throttled scroll handler
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        navbarRef.current &&
        mobileMenuRef.current &&
        !navbarRef.current.contains(event.target) &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Set up scroll observer to automatically update active link
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const scrollObserver = () => {
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        // Map section IDs to nav names
        const sectionToNavMap = {
          home: "Home",
          hero: "Home",
          banner: "Home",
          main: "Home",
          about: "About",
          portfolio: "Portfolio",
          services: "Services",
        };

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          if (sectionToNavMap[sectionId]) {
            setActiveLink(sectionToNavMap[sectionId]);
          }
        }
      });
    };

    window.addEventListener("scroll", scrollObserver);
    return () => window.removeEventListener("scroll", scrollObserver);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
  ];

  const handleLinkClick = (name, href, e) => {
    e.preventDefault();
    setActiveLink(name);
    setIsOpen(false);

    // For Home link, scroll to top
    if (name === "Home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    // For other links, try to find the section and scroll to it
    const targetSection = document.querySelector(href);
    if (targetSection) {
      const navbarHeight = navbarRef.current
        ? navbarRef.current.offsetHeight
        : 0;
      const targetPosition = targetSection.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      ref={navbarRef}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center"
            aria-label="Home"
            onClick={(e) => handleLinkClick("Home", "#", e)}
          >
            <img
              src={Logo}
              alt="Company Logo"
              className={`h-8 transition-all duration-300 ${
                scrolled ? "opacity-100" : "opacity-90 filter drop-shadow-sm"
              }`}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs tracking-[0.2em] uppercase transition-colors py-2 relative ${
                  scrolled
                    ? activeLink === link.name
                      ? "text-black font-semibold"
                      : "text-gray-600 hover:text-black"
                    : activeLink === link.name
                    ? "text-white font-semibold"
                    : "text-white/90 hover:text-white"
                }`}
                onClick={(e) => handleLinkClick(link.name, link.href, e)}
                aria-current={activeLink === link.name ? "page" : undefined}
              >
                {link.name}
                {activeLink === link.name && (
                  <span
                    className={`absolute bottom-0 left-0 w-full h-px ${
                      scrolled ? "bg-black" : "bg-white"
                    }`}
                    aria-hidden="true"
                  />
                )}
              </a>
            ))}
            <button
              className={`px-6 py-2 text-xs tracking-[0.2em] uppercase transition-all duration-300 rounded ${
                scrolled
                  ? "text-black hover:bg-gray-100 border border-black/20"
                  : "text-white/90 hover:text-white hover:bg-white/10 border border-white/20"
              }`}
              aria-label="Contact us"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 focus:outline-none transition-colors ${
                scrolled ? "text-black" : "text-white"
              }`}
              aria-expanded={isOpen}
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
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-white shadow-lg`}
        aria-hidden={!isOpen}
      >
        <div className="px-6 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`py-3 text-sm uppercase tracking-[0.15em] ${
                activeLink === link.name
                  ? "text-black font-semibold"
                  : "text-gray-600 hover:text-black"
              }`}
              onClick={(e) => handleLinkClick(link.name, link.href, e)}
              aria-current={activeLink === link.name ? "page" : undefined}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
            }}
            className="mt-2 w-full text-sm uppercase tracking-[0.15em] text-white bg-black py-3 rounded hover:bg-gray-900 transition-colors duration-300"
            aria-label="Contact us"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

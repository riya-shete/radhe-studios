import React from "react";
import Logo from "../assets/Images/logo.png"; // Assuming you have a logo file

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Photography services offered by Radhe Studios
  const services = [
    "Wedding",
    "Pre-Wedding",
    "Portraits",
    "Studio Photography",
    "Family",
    "Corporate",
    "Commercial",
    "& Many More",
  ];

  // Quick links for website navigation
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white pt-16 pb-8 border-t border-gray-100 shadow-inner">
      {/* Subtle top shadow for enhanced depth */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent absolute top-0 left-0"></div>

      <div className="container mx-auto px-6 lg:px-8 max-w-6xl relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full opacity-5 -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-50 rounded-full opacity-5 translate-y-1/4 -translate-x-1/4"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {/* About/Logo Section */}
          <div className="space-y-4">
            <div className="bg-white p-3 inline-block rounded-lg shadow-sm">
              <img src={Logo} alt="Radhe Studios Logo" className="h-10" />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Radhe Studios specializes in capturing life's most precious
              moments with creativity and professionalism. We transform ordinary
              events into extraordinary memories.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <p className="font-medium">Aniket Patil PhotoFilms</p>
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-800 mb-4 pb-2 border-b border-gray-100">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="text-gray-600 text-sm flex items-center group"
                >
                  <svg
                    className="w-3 h-3 text-red-600 mr-2 transition-transform duration-300 group-hover:translate-x-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="group-hover:text-gray-800 transition-colors duration-300">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-800 mb-4 pb-2 border-b border-gray-100">
              Get In Touch
            </h3>

            <div className="space-y-4">
              <div className="flex items-start group">
                <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center mr-3 shadow-sm group-hover:bg-red-100 transition-colors duration-300">
                  <svg
                    className="w-4 h-4 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 text-sm">Phone</h4>
                  <a
                    href="tel:+918830083756"
                    className="text-gray-600 text-sm hover:text-red-600 transition-colors"
                  >
                    +91 8830083756
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center mr-3 shadow-sm group-hover:bg-red-100 transition-colors duration-300">
                  <svg
                    className="w-4 h-4 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 text-sm">Email</h4>
                  <a
                    href="mailto:Radhe.arts0201@gmail.com"
                    className="text-gray-600 text-sm hover:text-red-600 transition-colors break-all"
                  >
                    Radhe.arts0201@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center mr-3 shadow-sm group-hover:bg-red-100 transition-colors duration-300">
                  <svg
                    className="w-4 h-4 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 text-sm">
                    Studio Location
                  </h4>
                  <p className="text-gray-600 text-sm">Pune, Maharashtra</p>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="mt-6">
              <h4 className="font-medium text-gray-800 text-sm mb-3">
                Follow Us
              </h4>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-red-600 transition-all duration-300 hover:shadow"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-red-600 transition-all duration-300 hover:shadow"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-red-600 transition-all duration-300 hover:shadow"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-red-600 transition-all duration-300 hover:shadow"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Quick Links */}
        <div className="mt-16 pt-6 border-t border-gray-100 text-center relative z-10">
          <div className="flex flex-wrap justify-center mb-6 gap-x-8 gap-y-2">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm text-gray-500 hover:text-red-600 transition-colors relative after:absolute after:w-0 after:h-px after:bg-red-600 after:left-0 after:bottom-0 after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          <p className="text-xs text-gray-500">
            &copy; {currentYear} Radhe Studios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

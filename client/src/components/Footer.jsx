import React from "react";
import Logo from "../assets/Images/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white pt-12 pb-6 border-t border-gray-100 shadow-inner relative">
      {/* Mobile-optimized top shadow */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent absolute top-0 left-0"></div>

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative">
        {/* Decorative elements - Adjusted for mobile */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full opacity-5 -translate-y-1/2 translate-x-1/4 md:w-64 md:h-64 hidden sm:block"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-50 rounded-full opacity-5 translate-y-1/4 -translate-x-1/4 md:w-48 md:h-48 hidden sm:block"></div>

        {/* Main footer grid - two columns only */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
          {/* About/Logo Section */}
          <div className="space-y-3 md:space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="bg-white p-2 md:p-3 inline-block rounded-lg shadow-sm">
              <img
                src={Logo}
                alt="Radhe Studios Logo"
                className="h-8 md:h-10"
              />
            </div>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-xs">
              Radhe Studios specializes in capturing life's most precious
              moments with creativity and professionalism.
            </p>
            <div className="text-xs md:text-sm text-gray-600">
              <p className="font-medium">Aniket Patil PhotoFilms</p>
            </div>
          </div>

          {/* Contact Information - Left aligned on all screens */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-base md:text-lg font-medium text-gray-800 pb-2 border-b border-gray-100 text-left">
              Get In Touch
            </h3>

            <div className="space-y-4 md:space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-red-50 flex items-center justify-center mr-3 shadow-sm transition-all duration-300 hover:bg-red-100">
                  <svg
                    className="w-3 h-3 md:w-4 md:h-4 text-red-600"
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
                  <h4 className="font-medium text-gray-800 text-xs md:text-sm">
                    Phone
                  </h4>
                  <a
                    href="tel:+918830083756"
                    className="text-gray-600 text-xs md:text-sm hover:text-red-600 transition-colors duration-300"
                  >
                    +91 8830083756
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-red-50 flex items-center justify-center mr-3 shadow-sm transition-all duration-300 hover:bg-red-100">
                  <svg
                    className="w-3 h-3 md:w-4 md:h-4 text-red-600"
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
                  <h4 className="font-medium text-gray-800 text-xs md:text-sm">
                    Email
                  </h4>
                  <a
                    href="mailto:Radhe.arts0201@gmail.com"
                    className="text-gray-600 text-xs md:text-sm hover:text-red-600 transition-colors duration-300"
                  >
                    Radhe.arts0201@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-red-50 flex items-center justify-center mr-3 shadow-sm transition-all duration-300 hover:bg-red-100">
                  <svg
                    className="w-3 h-3 md:w-4 md:h-4 text-red-600"
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
                  <h4 className="font-medium text-gray-800 text-xs md:text-sm">
                    Studio Location
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm">
                    Pune, Maharashtra
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Icons - Left aligned */}
            <div className="mt-4 md:mt-6">
              <h4 className="font-medium text-gray-800 text-xs md:text-sm mb-2 md:mb-3 text-left">
                Follow Us
              </h4>
              <div className="flex space-x-3 md:space-x-3">
                {/* Instagram */}
                <a
                  href="#"
                  className="w-8 h-8 md:w-8 md:h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-red-600 transition-all duration-300 hover:shadow-md"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-4 h-4 md:w-4 md:h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="#"
                  className="w-8 h-8 md:w-8 md:h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-red-600 transition-all duration-300 hover:shadow-md"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-4 h-4 md:w-4 md:h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>

                {/* Twitter */}
                <a
                  href="#"
                  className="w-8 h-8 md:w-8 md:h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-red-600 transition-all duration-300 hover:shadow-md"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-4 h-4 md:w-4 md:h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  className="w-8 h-8 md:w-8 md:h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-red-600 transition-all duration-300 hover:shadow-md"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-4 h-4 md:w-4 md:h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright - improved spacing for mobile */}
        <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} Radhe Studios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

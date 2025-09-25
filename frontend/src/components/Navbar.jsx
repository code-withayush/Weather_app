import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Favorites", path: "/favorites" },
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full backdrop-blur-xl bg-gradient-to-r from-blue-500/80 via-indigo-600/80 to-purple-700/80 shadow-2xl z-50 border-b border-white/20 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-3xl font-extrabold text-white flex items-center gap-2 tracking-wide transition-transform duration-500 hover:scale-110">
            🌤️
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500">
              WeatherApp
            </span>
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-lg font-medium transition-all duration-300 hover:text-yellow-300 ${
                  location.pathname === link.path ? "text-yellow-300" : "text-white"
                }`}
              >
                {link.name}
                {/* Underline Animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-300 transition-all duration-300 ${
                    location.pathname === link.path ? "w-full" : "hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white transition-transform duration-300 hover:scale-125"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-gradient-to-b from-blue-600/90 to-purple-700/90 backdrop-blur-xl px-6 py-4 space-y-3 transition-all duration-500 overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block text-lg font-semibold rounded-md px-3 py-2 transition-all duration-300 transform hover:scale-105 ${
                location.pathname === link.path
                  ? "bg-yellow-300 text-gray-900"
                  : "text-white hover:bg-yellow-300 hover:text-gray-900"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;

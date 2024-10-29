// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="text-white text-2xl font-bold">
          <Link to="/">Pet Adoption</Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-white hover:text-yellow-300 transition duration-300">Home</Link>
          <Link to="/adopt" className="text-white hover:text-yellow-300 transition duration-300">Adopt</Link>
          <Link to="/about" className="text-white hover:text-yellow-300 transition duration-300">About Us</Link>
          <Link to="/contact" className="text-white hover:text-yellow-300 transition duration-300">Contact</Link>
        </nav>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            {/* Hamburger icon for mobile view */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

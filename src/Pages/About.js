
// src/Pages/AboutUs.js
import React from 'react';

const About = () => {
  return (
    <div className="bg-gradient-to-br from-blue-200 to-green-200 min-h-screen flex flex-col items-center py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h1>
      <p className="text-lg text-gray-700 max-w-2xl text-center mb-6">
        At Pet Adoption, we believe that every animal deserves a loving home. Our mission is to connect
        loving families with wonderful pets in need. We work tirelessly to ensure that every pet is
        cared for and ready to find their forever home.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src="https://via.placeholder.com/300" alt="Our Mission" className="w-full h-48 object-cover rounded-t-lg" />
          <h2 className="text-xl font-semibold text-center mt-4">Our Mission</h2>
          <p className="text-gray-600 text-center">
            To provide a safe haven for animals and help them find loving families.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src="https://via.placeholder.com/300" alt="Our Team" className="w-full h-48 object-cover rounded-t-lg" />
          <h2 className="text-xl font-semibold text-center mt-4">Our Team</h2>
          <p className="text-gray-600 text-center">
            A group of passionate animal lovers dedicated to making a difference.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src="https://via.placeholder.com/300" alt="Our Impact" className="w-full h-48 object-cover rounded-t-lg" />
          <h2 className="text-xl font-semibold text-center mt-4">Our Impact</h2>
          <p className="text-gray-600 text-center">
            We've successfully matched hundreds of pets with families over the years.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Join Us in Making a Difference</h2>
      <p className="text-lg text-gray-700 max-w-2xl text-center mb-6">
        Whether you're looking to adopt a pet or support our cause, we welcome you to be part of our journey.
        Together, we can create a brighter future for animals in need.
      </p>
      <a href="/contact" className="bg-green-500 text-white font-semibold py-2 px-6 rounded shadow-lg transition-transform transform hover:scale-105">
        Contact Us
      </a>
    </div>
  );
};

export default About;

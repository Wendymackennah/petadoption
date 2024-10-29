
// src/Pages/Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-purple-400 to-pink-500 min-h-screen flex flex-col items-center justify-center text-center py-12">
      <h1 className="text-5xl font-extrabold text-white mb-4">Welcome to Pet Adoption</h1>
      <p className="text-xl text-white mb-8 max-w-xl">
        Your new furry friend is waiting for you. Join us in giving a loving home to animals in need.
      </p>
      <a
        href="/adopt"
        className="bg-white text-purple-600 font-semibold py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
      >
        Adopt a Pet
      </a>

      <div className="mt-12 max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
          <img src="https://via.placeholder.com/300" alt="Happy Pet" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-xl font-semibold">Happy Tails</h2>
          <p className="text-gray-600">
            Discover heartwarming stories of pets who found their forever homes.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
          <img src="https://via.placeholder.com/300" alt="Volunteer" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-xl font-semibold">Get Involved</h2>
          <p className="text-gray-600">
            Join our community of animal lovers and help make a difference.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
          <img src="https://via.placeholder.com/300" alt="Support" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h2 className="text-xl font-semibold">Support Us</h2>
          <p className="text-gray-600">
            Your donations help provide care for animals waiting for adoption.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

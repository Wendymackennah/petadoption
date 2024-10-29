
// src/Pages/PetDetails.js
import React from 'react';

const PetDetails = ({ pet }) => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={pet.image_url} alt={pet.name} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h2 className="text-2xl font-bold">{pet.name}</h2>
          <p className="text-gray-700">Breed: {pet.breed}</p>
          <p className="text-gray-700">Age: {pet.age} years</p>
          <p className="mt-4">Description: {pet.description || 'No description available.'}</p>
          <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded transition duration-300 hover:bg-green-600">
            Adopt {pet.name}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;

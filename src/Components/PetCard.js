
// src/components/PetCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const PetCard = ({ pet }) => {
  const navigate = useNavigate(); // Initialize navigate for routing

  // Function to handle adoption button click
  const handleAdoptClick = () => {
    alert(`You have adopted ${pet.name}!`);
    // Here you can add more logic, such as redirecting to a confirmation page
    navigate(`/adopt/${pet.id}`); // Navigate to the adoption confirmation page
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <img src={pet.image_url} alt={pet.name} className="w-full h-48 object-cover rounded-t-2xl" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-purple-600">{pet.name}</h2>
        <p className="text-gray-600">Breed: {pet.breed}</p>
        <p className="text-gray-600">Age: {pet.age} years</p>
        <button 
          onClick={handleAdoptClick} // Add onClick handler
          className="mt-4 w-full bg-purple-500 text-white py-2 rounded-full hover:bg-purple-600 transition duration-300"
        >
          Adopt {pet.name}
        </button>
      </div>
    </div>
  );
};

export default PetCard;

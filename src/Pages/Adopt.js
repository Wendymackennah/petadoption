
// src/Pages/Adopt.js
import React, { useEffect, useState } from 'react';
import PetCard from '/home/wendymackennah/Octoberprojects/petadoption/pet-adoption-website/src/Components/PetCard.js';

const Adopt = () => {
  const [pets, setPets] = useState([]);

  // Sample data for illustration; replace with real fetch later
  const samplePets = [
    {
      id: 1,
      name: 'Bella',
      breed: 'Labrador',
      age: 3,
      image_url: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Max',
      breed: 'Beagle',
      age: 4,
      image_url: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Lucy',
      breed: 'Poodle',
      age: 2,
      image_url: 'https://via.placeholder.com/150'
    },
    {
      id: 4,
      name: 'Charlie',
      breed: 'Golden Retriever',
      age: 5,
      image_url: 'https://via.placeholder.com/150'
    },
    {
      id: 5,
      name: 'Daisy',
      breed: 'Bulldog',
      age: 3,
      image_url: 'https://via.placeholder.com/150'
    },
    {
      id: 6,
      name: 'Rocky',
      breed: 'German Shepherd',
      age: 4,
      image_url: 'https://via.placeholder.com/150'
    }
  ];

  useEffect(() => {
    // Fetch pets from API (mocked here)
    setPets(samplePets);
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Available Pets for Adoption</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {pets.map(pet => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default Adopt;

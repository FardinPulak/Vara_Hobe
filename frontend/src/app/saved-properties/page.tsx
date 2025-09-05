'use client';
import React, { useState } from 'react';

const SavedProperties = () => {
  
  const [savedProperties, setSavedProperties] = useState([
    {
      id: 1,
      name: 'Bachelor Room',
      location: 'Bashundhara R.A, Vatara',
      saveTime: '2025-02-04 03:35:17',
      image: '/image/property1.jpg', 
    },
    {
      id: 2,
      name: 'Family House',
      location: 'Mirpur 2, Mirpur',
      saveTime: '2024-12-17 14:23:19',
      image: '/image/property2.jpg', 
    },
    {
      id: 3,
      name: 'Family House',
      location: 'Mirpur 12, Mirpur',
      saveTime: '2024-12-17 01:14:48',
      image: '/image/property3.jpg', 
    },
  ]);

  const unsaveProperty = (id: number) => {
    setSavedProperties((prevProperties) =>
      prevProperties.filter((property) => property.id !== id)
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Saved Properties</h1>

      <div className="space-y-4">
        {savedProperties.map((property) => (
          <div
            key={property.id}
            className="flex items-center bg-white p-4 rounded-lg shadow-lg"
          >
            <img
              src={property.image}
              alt={property.name}
              className="w-32 h-32 object-cover rounded-md mr-6"
            />
            <div className="flex-1">
              <h2 className="text-xl font-semibold">{property.name}</h2>
              <p className="text-gray-600">{property.location}</p>
              <p className="text-sm text-gray-500">Save Time: {property.saveTime}</p>
            </div>
            <button
              onClick={() => unsaveProperty(property.id)}
              className="ml-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
            >
              Unsave Property
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedProperties;

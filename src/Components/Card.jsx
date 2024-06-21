import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa'; // Importing star icon
import stethoscopeIcon from '../../public/images/doctor.jpg';

const Card = ({ name, username, id, branch }) => {
  // State to track favorite status
  const [isFavorite, setIsFavorite] = useState(false);

  // Function to toggle favorite status
  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const existingIndex = favorites.findIndex(fav => fav.id === id);

    if (existingIndex !== -1) {
      // If already favorited, remove from favorites
      favorites.splice(existingIndex, 1);
      setIsFavorite(false); // Update state
    } else {
      // If not favorited, add to favorites
      const newFavorite = { id, name, username, branch };
      favorites.push(newFavorite);
      setIsFavorite(true); // Update state
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  return (
    <div className="p-2 m-1 text-center bg-white border border-gray-200 rounded-lg shadow-sm w-60 h-92">
      <Link to={`/dentist/${id}`} className="block text-blue-500 hover:text-blue-700">
        <div className="justify-center mb-4 rounded-full">
          <div className="w-56 h-56 bg-no-repeat bg-contain" style={{ backgroundImage: `url(${stethoscopeIcon})` }}></div>
        </div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500">Branch: {branch}</p>
      </Link>
      <button onClick={toggleFavorite} className={`px-24 py-2 mt-2 text-white rounded ${isFavorite ? 'bg-yellow-500 hover:bg-yellow-700' : 'bg-gray-200 hover:bg-blue-700'}`}>
        <FaStar className="inline" />
      </button>
    </div>
  );
};

export default Card;

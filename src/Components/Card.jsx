import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import stethoscopeIcon from '../assets/image/doctor.jpg';
import { GlobalContext } from '../Components/utils/global.context';

const Card = ({ name, username, id, branch }) => {
  const { state } = useContext(GlobalContext);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const existingIndex = favorites.findIndex(fav => fav.id === id);

    if (existingIndex !== -1) {
      favorites.splice(existingIndex, 1);
      setIsFavorite(false);
    } else {
      const newFavorite = { id, name, username, branch };
      favorites.push(newFavorite);
      setIsFavorite(true);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isFavorited = favorites.some(fav => fav.id === id);
    setIsFavorite(isFavorited);
  }, [id]);

  return (
    <div className={`p-2 m-1 text-center border border-gray-200 rounded-lg shadow-sm w-60 h-92 ${state.theme === 'dark' ? 'bg-custom-gray border-gray-700' : 'bg-white'}`}>
      <Link to={`/dentist/${id}`} className={`block ${state.theme === 'dark' ? 'text-blue-400 hover:text-blue-600' : 'text-blue-500 hover:text-blue-700'}`}>
        <div className="justify-center mb-4 rounded-full">
          <div className="w-56 h-56 bg-no-repeat bg-contain" style={{ backgroundImage: `url(${stethoscopeIcon})` }}></div>
        </div>
        <h3 className={`mb-4 text-lg font-semibold ${state.theme === 'dark' ? 'text-white' : 'text-black'}`}>{name}</h3>
        <p className={`text-gray-500 ${state.theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{branch}</p>
      </Link>
      <button onClick={toggleFavorite} className={`px-24 py-2 mt-2 text-white rounded ${isFavorite ? 'bg-yellow-500 hover:bg-yellow-700' : `${state.theme === 'dark' ? 'bg-gray-600 hover:bg-blue-500' : 'bg-gray-200 hover:bg-blue-700'}`}`}>
        <FaStar className="inline" />
      </button>
    </div>
  );
};

export default Card;

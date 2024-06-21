// import React from "react";
// import Card from "../Components/Card";

// //Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

// const Favs = () => {

//   return (
//     <>
//       <h1>Dentists Favs</h1>
//       <div className="card-grid">
//         {/* este componente debe consumir los destacados del localStorage */}
//         {/* Deberan renderizar una Card por cada uno de ellos */}
//       </div>
//     </>
//   );
// };

// export default Favs;
import React, { useContext } from 'react';
import Card from '../Components/Card';
import { GlobalContext } from '../Components/utils/global.context';

const Favs = () => {
  const { state } = useContext(GlobalContext);
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  return (
    <div className={`favs-container ${state.theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>

      <h1 className="mb-2 text-3xl font-bold text-center">Dentists Favs</h1>
      <div className="flex flex-wrap justify-around pl-64 pr-64">
        {favorites.length === 0 ? (
          <p>No favorites saved yet.</p>
        ) : (
          favorites.map((dentist) => (
            <Card
              key={dentist.id}
              name={dentist.name}
              username={dentist.username}
              id={dentist.id}
              branch={dentist.branch}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Favs;


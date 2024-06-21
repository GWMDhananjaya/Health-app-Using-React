import React, { useContext } from "react";
import Card from "../Components/Card";
import { GlobalContext } from "../Components/utils/global.context";

const Favs = () => {
  const { state } = useContext(GlobalContext);
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div
      className={`favs-container ${
        state.theme === "dark" ? "dark-theme" : "light-theme"
      }`}
    >
      <h1 className="mb-2 text-3xl font-bold text-center">Dentists Favs</h1>
      <div className="flex flex-wrap justify-around pl-64 pr-64">
        {favorites.length === 0 ? (
          <p></p>
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

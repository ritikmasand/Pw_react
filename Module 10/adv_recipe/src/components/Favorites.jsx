import React, { use, useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Favorites() {
  const [favs, setFavs] = useState([]);
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favs"));
    setFavs(stored);
  }, []);

  return (
    <div>
      <h2>Favorite Recipe</h2>
      {favs.length === 0 && <p> No Favorites yet</p>}
      <ul>
        {favs.map((id) => (
          <li key={id}>
            <Link to={`/recipe/${id}`}>View Recipe {id} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;

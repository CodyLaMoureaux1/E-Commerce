import React, { useEffect, useState } from "react";
import "../style/index.css";

const App = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const { results } = await response.json();
        setPokemon(results);
      } catch (err) {
        console.error(err);
      }
    };
    getAllData();
  }, []);

  return (
    <div>
      <p>Hello World</p>
      {!!pokemon.length &&
        pokemon.map((el, i) => {
          return (
            <div key={i}>
              <h1>{el.name}</h1>
            </div>
          );
        })}
    </div>
  );
};

export default App;

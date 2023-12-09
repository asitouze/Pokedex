import { useState } from 'react';
import { useEffect } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";

function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0);

  useEffect(
    () => {
      alert("hello pokemon trainer :)");
    },
    []
  );

  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];
    // const handleClickMoins = () => {
    //   setPokemonIndex(pokemonIndex - 1)
    // }
    // const handleClickPlus = () => {
    //   setPokemonIndex(pokemonIndex + 1)
    // }
  

  return (
    <div>
      <NavBar pokemonList={pokemonList} setPokemonIndex={setPokemonIndex} pokemonIndex={pokemonIndex}/>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
}



export default App;



import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from "./components/PokemonCard"

function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0);

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
    
    console.log(pokemonIndex);
  const handleClickMoins = () => {
    setPokemonIndex(pokemonIndex - 1)
  }
  const handleClickPlus = () => {
    setPokemonIndex(pokemonIndex + 1)
  }

  return (
    <div>
      {pokemonIndex > 0 && 
        <button type='button' name='precedent' onClick={handleClickMoins} >Précédent</button>
      }
      {pokemonIndex < pokemonList.length - 1 && 
        <button type='button' name='suivant' onClick={handleClickPlus}>Suivant</button>
      }

      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
  
    </div>
  );
}



export default App;



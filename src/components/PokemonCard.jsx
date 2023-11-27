function PokemonCard() {      
    return (
      <div>
        {pokemonList.map((pokemon, i) => (
          <div key={i}>
            <figure>
              {pokemon.imgSrc ?  <img src={pokemon.imgSrc} /> :<p>???</p>}
            </figure>
            <figcaption>{pokemon.name}</figcaption>
          </div>
        ))}
      </div>
    );
  }

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  
  export default PokemonCard;
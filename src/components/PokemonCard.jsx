function PokemonCard(props) {     
  console.log(`props => ${props}`); 
    return (
      <div>
        {pokemonList.map((props.pokemon, i) => (
          <div key={i}>
            <figure>
              {props.pokemon.imgSrc ?  <img src={props.pokemon.imgSrc} /> :<p>???</p>}
            </figure>
            <figcaption>{props.pokemon.name}</figcaption>
          </div>
        ))}
      </div>
    );
    
  }

  export default PokemonCard;
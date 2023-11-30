/* eslint-disable react/prop-types */
function PokemonCard(props) {     
  const {pokemon} = props;
  console.log(`props => ${props}`); 
    return (
      <div>
        {pokemon.map((pokemon, i) => (
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

  export default PokemonCard;
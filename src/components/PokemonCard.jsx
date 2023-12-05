/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
function PokemonCard({ pokemon }) {    
     return (
    //   <div>
    //     {pokemon.map((pokemon, i) => (
    //       <div key={i}>
    
          <div>
            <figure>
              {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name} /> :<p>???</p>}
            </figure>
            <figcaption>{pokemon.name}</figcaption>
          </div>
  //       ))}
  //     </div>
     );
   }
  PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    }),
  };
  export default PokemonCard;
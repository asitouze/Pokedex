/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
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
  PokemonCard.propTypes = {
    pokemon: PropTypes.arrayOf( PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    })
  )};
  export default PokemonCard;
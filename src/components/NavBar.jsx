import PropTypes from "prop-types";
import "./NavBar.css";
function NavBar({ pokemonList, setPokemonIndex}) {

  const handleClick = (e) => {
   setPokemonIndex(e.target.value);
  }

  return (
    <nav>
      {pokemonList.map((pokemon, i) => (
        <div key={i}>
          <button name="pokemon" type="button" value={i} onClick={handleClick}> {pokemon.name}</button>
        </div>
      ))}
    </nav>
  );
}
NavBar.propTypes = {
  pokemonList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  })
  ).isRequired,
  setPokemonIndex: PropTypes.func.isRequired,
};

export default NavBar;
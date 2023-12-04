import PropTypes from "prop-types";
function NavBar({ pokemonList, pokemonIndex}) {
  return (
    <nav>
      {pokemonList.map((pokemon, pokemonIndex) => (
        <div key={pokemonIndex}>
          <button name="pokemon"> {pokemon.name}</button>
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
  ).isRequired
};

export default NavBar;
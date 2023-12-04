import PropTypes from "prop-types";
function NavBar({ pokemonList}) {
    return(
        <nav>
          {pokemon.map((pokemonList, name) => (
          <div key={pokemonList.name}>
            <button name="pokemon"> pokemonList.name</button>
            ))}
        </nav>
    )    
}
NavBar.propTypes = {
  pokemonList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  })
  ).isRequired
};

export default NavBar;
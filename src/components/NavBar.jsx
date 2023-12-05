import PropTypes from "prop-types";
function NavBar({ pokemonList, pokemonIndex, setPokemonIndex}) {

  const handleClick = () => {
    // console.log(pokemonList[pokemonIndex]);
   setPokemonIndex(pokemonList[pokemonIndex]);
  }

  return (
    <nav>
      {pokemonList.map((pokemon, i) => (
        <div key={i}>
          <button name={pokemon.name} type="button" onClick={handleClick}> {pokemon.name}</button>
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
  pokemonIndex: PropTypes.number,
};

export default NavBar;
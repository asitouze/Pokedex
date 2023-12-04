import PropTypes from "prop-types";
function NavBar({pokemonIndex, handleClickMoins, pokemonList, handleClickPlus}) {
    return(
        <nav>
        {pokemonIndex > 0 && 
        <button type='button' name='precedent' onClick={handleClickMoins} >Précédent</button>
      }
      {pokemonIndex < pokemonList.length - 1 && 
        <button type='button' name='suivant' onClick={handleClickPlus}>Suivant</button>
      }
        </nav>
    )    
}
NavBar.propTypes = {
  handleClickMoins: PropTypes.func.isRequired,
  handleClickPlus: PropTypes.func.isRequired,
  pokemonIndex: PropTypes.number.isRequired,
  pokemonList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  })
  ).isRequired
};

export default NavBar;
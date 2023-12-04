function NavBar() {
    
    const handleClickMoins = () => {
      setPokemonIndex(pokemonIndex - 1)
    }
    const handleClickPlus = () => {
      setPokemonIndex(pokemonIndex + 1)
    }

    return(
        <>
        {pokemonIndex > 0 && 
        <button type='button' name='precedent' onClick={handleClickMoins} >Précédent</button>
      }
      {pokemonIndex < pokemonList.length - 1 && 
        <button type='button' name='suivant' onClick={handleClickPlus}>Suivant</button>
      }
        </>
    )
}

export default NavBar;
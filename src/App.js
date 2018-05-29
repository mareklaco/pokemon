import React, {Component} from 'react';
import './App.css';
import List from "./List";
import Pokemon from "./Pokemon";

/**
 * Kontroller aplikacie.
 *
 * Udrzuje v stave zoznam, zvolene meno, nacitane data jedneho pokemona.
 *
 * Nacitava data z API (zoznam/jeden pokemon) a zobrazuje <List/> a <Pokemon/>
 */
class App extends Component {

  state = {
    selectedPokemonName: undefined,
    selectedPokemonData: undefined,
    listData: undefined,
  }

  componentWillMount() {
    this.apiLoadList()
  }

  /**
   * Zvoli noveho pokemona, alebo odznaci aktualneho
   *
   * @param string pokemonName
   */
  handlePokemonClick = (pokemonName) => {
    const newPokemonName = pokemonName !== this.state.selectedPokemonName ? pokemonName : undefined

    if (newPokemonName && (!this.state.selectedPokemonData || this.state.selectedPokemonData.name !== newPokemonName)) {
      this.apiLoadPokemon(newPokemonName)
    }

    this.setState({
      selectedPokemonName: newPokemonName,
    })
  }

  /**
   * Spusti API call na nacitanie dat pokemona a data vlozi do stavu
   *
   * @param string pokemonName
   */
  apiLoadPokemon = (pokemonName) => {
    const data = {
      name: 'Pikacu',
      imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/25.png',
    }
    this.setState({
      selectedPokemonData: data,
    })
  }


  /**
   * Spusti API call na nacitanie zoznamu a da do stavu prvych 9
   */
  apiLoadList = () => {
    const listData = [
      {
        name: 'pikacu',
      },
      {
        name: 'ferko',
      },
    ]
    this.setState({
      listData: listData,
    })
  }

  render() {
    const pokemonToShow = this.state.selectedPokemonName && this.state.selectedPokemonData
    return (
      <div className="App">

        {(this.state.listData) && (
          <List
            onClick={this.handlePokemonClick}
            selectedPokemnonName={this.state.selectedPokemonName}
            list={this.state.listData}
          />
        )}

        {(pokemonToShow) && (
          <Pokemon pokemon={pokemonToShow}/>
        )}

      </div>
    )
  }
}

export default App

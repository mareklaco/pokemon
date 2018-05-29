import React, {Component} from 'react';
import './App.css';
import List from "./List";
import Pokemon from "./Pokemon";
import {getRequest} from "./functions";

/**
 * Kontroller aplikacie.
 *
 * Udrzuje v stave zoznam, zvolene meno, nacitane data jedneho pokemona.
 *
 * Nacitava data z API (zoznam/jeden pokemon) a zobrazuje <List/> a <Pokemon/>
 */
class App extends Component {

  state = {
    /**
     * string
     */
    selectedPokemonName: undefined,
    /**
     * shape ako Pokemon.propTypes.pokemon
     */
    pokemonData: undefined,
    /**
     * shape ako List.propTypes.list
     */
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

    if (newPokemonName && (!this.state.pokemonData || this.state.pokemonData.name !== newPokemonName)) {
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
    const url = this.state.listData && this.state.listData.filter(p => p.name === pokemonName)[0].url
    if (!url) {
      return
    }
    getRequest(url)
      .then(responseObj => {
        if (responseObj) {
          let imageUrl
          //vezmeme prvy trully sprite
          const sprite = Object.keys(responseObj.sprites).find(k => !!responseObj.sprites[k])
          if (sprite) {
            imageUrl = responseObj.sprites[sprite]
          }
          this.setState({
            pokemonData: {
              name: responseObj.name,
              imageUrl
            }
          })
        }
      })
      .catch(errorMsg => {
        console.error(errorMsg)
      })
  }

  /**
   * Spusti API call na nacitanie zoznamu a da do stavu prvych 9
   */
  apiLoadList = () => {
    getRequest('https://pokeapi.co/api/v2/pokemon')
      .then(responseObj => {
        if (responseObj && responseObj.results) {
          const listData = responseObj.results.slice(0, 9);
          this.setState({
            listData,
          })
        }
      })
      .catch(errorMsg => {
        console.error(errorMsg)
      })
  }

  render() {
    const pokemonToShow = this.state.selectedPokemonName
      && this.state.pokemonData
      && (this.state.pokemonData.name === this.state.selectedPokemonName)
      && this.state.pokemonData
    const isLoading = !this.state.listData || (this.state.selectedPokemonName && !pokemonToShow)
    return (
      <div className={"App " + (isLoading ? 'App--isLoading' : '')}>

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

        {(isLoading) && (
          <div className="App__Loading">
            Loading...
          </div>
        )}

      </div>
    )
  }
}

export default App

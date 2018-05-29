import React, {PureComponent} from 'react';
import * as PropTypes from 'prop-types'

/**
 * Jeden pokemon
 *
 * Dostane a zobrazi data jedneho pokemona.
 */
class Pokemon extends PureComponent {

  static propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string,
    }).isRequired
  }

  render() {
    const {pokemon} = this.props
    return (
      <div className="Pokemon">
        <h2 className="Pokemon__Name">
          {pokemon.name}
        </h2>
        {(!!pokemon.imageUrl) && (
          <img
            className="Pokemon__Image"
            src={pokemon.imageUrl}
            title={pokemon.name}
            alt={pokemon.name}/>
        )}
      </div>
    )
  }
}

export default Pokemon
